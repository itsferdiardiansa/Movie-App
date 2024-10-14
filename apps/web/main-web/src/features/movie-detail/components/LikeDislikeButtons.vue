<template>
  <div class="flex items-center justify-end space-x-4 mt-4">
    <button
      @click="emitLike"
      class="flex items-center space-x-2 text-green-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0z" />
        <path
          d="M10 3.1l-.44.43-5.14 5.12a1.5 1.5 0 000 2.12l.06.06c.58.58 1.5.58 2.12 0l3.36-3.34L14 13.88c.58.58 1.5.58 2.12 0l.06-.06a1.5 1.5 0 000-2.12l-6.12-6.12-.06-.06-.06-.06A1.5 1.5 0 0010 3.1z"
        />
      </svg>
      <span>{{ likes }} Likes</span>
    </button>

    <button
      @click="emitDislike"
      class="flex items-center space-x-2 text-red-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0z" />
        <path
          d="M10 3.1l.44.43 5.14 5.12a1.5 1.5 0 010 2.12l-.06.06a1.5 1.5 0 01-2.12 0L10 9.34 6.66 12.66c-.58.58-1.5.58-2.12 0l-.06-.06a1.5 1.5 0 010-2.12l6.12-6.12.06-.06.06-.06A1.5 1.5 0 0110 3.1z"
        />
      </svg>
      <span>{{ dislikes }} Dislikes</span>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  likes: number
  dislikes: number
}>()

const emits = defineEmits(['like', 'dislike'])

const emitLike = () => {
  emits('like')
}

const emitDislike = () => {
  emits('dislike')
}
</script>
