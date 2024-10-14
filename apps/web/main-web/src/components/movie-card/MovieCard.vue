<template>
  <router-link :to="`/watch/${movie.id}`" class="group block">
    <article
      class="relative w-[300px] h-[450px] bg-gradient-to-r from-black via-black/80 to-black rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden"
    >
      <div class="relative h-[65%] overflow-hidden rounded-t-xl">
        <img
          :src="movieImage"
          class="object-cover w-full h-full transition-transform transform group-hover:scale-110"
          alt="movie poster"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"
        ></div>
        <div
          class="absolute bottom-4 left-4 bg-gray-500 bg-opacity-20 text-white text-sm px-3 py-1 rounded-lg"
        >
          {{ movie.duration.hours }}h {{ movie.duration.minutes }}m
        </div>
      </div>

      <div class="p-4 flex flex-col justify-between h-[35%] text-white">
        <h3 class="text-xl font-bold truncate">{{ movie.title }}</h3>
        <p class="text-sm text-gray-200 mt-2 truncate">{{ movie.genres }}</p>
        <div class="flex justify-between items-center mt-4">
          <p class="text-sm text-gray-300">
            Views:
            <span class="font-semibold text-white">{{
              String(+movie.views)
            }}</span>
          </p>
          <button
            class="bg-gray-700 hover:bg-gray-800 text-white text-sm font-semibold py-2 px-4 rounded-full transition-colors"
          >
            Watch Now
          </button>
        </div>
      </div>
    </article>
  </router-link>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { MovieItem } from '@/features/movies/store/state'

const props = defineProps<{ movie: MovieItem }>()
const movieImage = ref(
  'https://img.freepik.com/free-photo/leaf-nature-backgrounds-pattern-illustration-plant-backdrop-design-abstract-vibrant-green-nature-wallpaper-illustration-generative-ai_188544-12680.jpg'
)
</script>
