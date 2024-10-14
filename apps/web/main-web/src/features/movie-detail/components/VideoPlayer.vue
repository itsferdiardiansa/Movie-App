<template>
  <div class="video-section flex justify-center mb-8">
    <iframe
      :src="watchUrl"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
      class="video-player rounded-3xl shadow-2xl w-full max-w-5xl h-80 md:h-[500px] transition-transform transform hover:scale-105"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  watchUrl: string
}>()
</script>

<style scoped>
.video-section {
  max-width: 100%;
}

.video-player {
  border: none;
}
</style>
