<template>
  <div class="movie-details max-w-5xl mx-auto">
    <div class="md:flex justify-between">
      <div class="flex-1 pr-4">
        <h1
          class="movie-title text-4xl font-extrabold tracking-tight text-left"
        >
          {{ title }}
        </h1>

        <div
          v-html="description"
          class="movie-description text-gray-700 text-lg mt-4 text-left leading-relaxed"
        ></div>
      </div>

      <div class="flex flex-col space-y-4 text-right">
        <div class="flex items-center justify-end text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.12.356-.26.703-.42 1.04M21.542 13c-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7"
            />
          </svg>
          <span class="text-lg">{{ String(+views) }} Views</span>
        </div>

        <div class="flex items-center justify-end text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 7h10M7 11h6M5 17l7-7 4 4 7-7M5 7l4 4 2-2"
            />
          </svg>
          <span class="text-lg">{{ genres }}</span>
        </div>

        <div class="flex items-center justify-end text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 19V5l12-2v14M9 19a4 4 0 100-8 4 4 0 000 8zm12-14l-12 2"
            />
          </svg>
          <span class="text-lg">Artist: {{ artist }}</span>
        </div>

        <LikeDislikeButtons
          :likes="likes"
          :dislikes="dislikes"
          @like="onLike"
          @dislike="onDislike"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LikeDislikeButtons from './LikeDislikeButtons.vue'

const props = defineProps<{
  title: string
  description: string
  views: number
  genres: string
  artist: string
  likes: number
  dislikes: number
}>()

const emits = defineEmits(['like', 'dislike'])

const onLike = () => {
  emits('like')
}

const onDislike = () => {
  emits('dislike')
}
</script>
