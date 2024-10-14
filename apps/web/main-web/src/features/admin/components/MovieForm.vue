<template>
  <form @submit.prevent="handleSubmit">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700 mb-2"
          >Title</label
        >
        <Input v-model="form.title" id="title" placeholder="Enter title" />
        <p v-if="!formValidation.titleValid" class="text-red-500 text-sm mt-1">
          Title is required
        </p>
      </div>

      <div>
        <label
          for="watchUrl"
          class="block text-sm font-medium text-gray-700 mb-2"
          >Watch URL</label
        >
        <Input
          v-model="form.watchUrl"
          id="watchUrl"
          placeholder="Enter Watch URL /embed/video-id"
        />
        <p
          v-if="!formValidation.watchUrlValid"
          class="text-red-500 text-sm mt-1"
        >
          Watch URL is required
        </p>
      </div>

      <div>
        <label
          for="description"
          class="block text-sm font-medium text-gray-700 mb-2"
          >Description</label
        >
        <Textarea
          v-model="form.description"
          id="description"
          placeholder="Enter description"
        />
        <p
          v-if="!formValidation.descriptionValid"
          class="text-red-500 text-sm mt-1"
        >
          Description is required
        </p>
      </div>

      <div>
        <label
          for="artists"
          class="block text-sm font-medium text-gray-700 mb-2"
          >Artists</label
        >
        <Input
          v-model="form.artists"
          id="artists"
          placeholder="Enter artists"
        />
        <p
          v-if="!formValidation.artistsValid"
          class="text-red-500 text-sm mt-1"
        >
          Artists is required
        </p>
      </div>

      <div>
        <label for="genres" class="block text-sm font-medium text-gray-700 mb-2"
          >Genres</label
        >
        <Select
          v-model="form.genres"
          id="genres"
          :items="genreOptions"
          placeholder="Select genres"
        />
        <p v-if="!formValidation.genresValid" class="text-red-500 text-sm mt-1">
          Genres is required
        </p>
      </div>

      <div class="col-span-2 flex space-x-4">
        <div>
          <label
            for="duration-hours"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Duration Hours</label
          >
          <Input
            v-model="form.duration.hours"
            id="duration-hours"
            placeholder="Hours"
          />
          <p
            v-if="!formValidation.durationHoursValid"
            class="text-red-500 text-sm mt-1"
          >
            Duration Hours is required
          </p>
        </div>
        <div>
          <label
            for="duration-minutes"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Duration Minutes</label
          >
          <Input
            v-model="form.duration.minutes"
            id="duration-minutes"
            placeholder="Minutes"
          />
          <p
            v-if="!formValidation.durationMinutesValid"
            class="text-red-500 text-sm mt-1"
          >
            Duration Minutes is required
          </p>
        </div>
      </div>
    </div>

    <Button :disabled="isLoading" label="Save Movie" class="mt-6">
      <span v-if="isLoading">Loading...</span>
      <span v-else>Save Movie</span>
    </Button>
  </form>
</template>

<script setup lang="ts">
import { ref, watchEffect, computed } from 'vue'
import { Input, Textarea, Select, Button } from '@pomy/ui'
import { useStore } from 'vuex'
import type { MovieItem } from '@/features/movies/store/state'

const props = defineProps<{
  initialMovie?: MovieItem
}>()

const emit = defineEmits(['submit'])

const store = useStore()

const form = ref({
  title: '',
  watchUrl: '',
  description: '',
  artists: '',
  duration: { hours: '', minutes: '' },
  genres: '',
})

const genreOptions = [
  { label: 'Sport', value: 'Sport' },
  { label: 'Entertainment', value: 'Entertainment' },
  { label: 'Movie', value: 'Movie' },
]

const formValidation = ref({
  titleValid: true,
  watchUrlValid: true,
  descriptionValid: true,
  artistsValid: true,
  genresValid: true,
  durationHoursValid: true,
  durationMinutesValid: true,
})

const isLoading = computed(() => store.state.admin.isLoading)

watchEffect(() => {
  if (props.initialMovie) {
    ;(form as any).value = { ...props.initialMovie }
  }
})

const handleSubmit = () => {
  // I you're checking this, I might used @pomy/ui - form-control
  // But there're errors that needed to resolve much longer
  formValidation.value.titleValid = form.value.title !== ''
  formValidation.value.watchUrlValid = form.value.watchUrl !== ''
  formValidation.value.descriptionValid = form.value.description !== ''
  formValidation.value.artistsValid = form.value.artists !== ''
  formValidation.value.genresValid = form.value.genres !== ''
  formValidation.value.durationHoursValid = form.value.duration.hours !== ''
  formValidation.value.durationMinutesValid = form.value.duration.minutes !== ''

  if (Object.values(formValidation.value).every(v => v)) {
    emit('submit', form.value)
  }
}
</script>
