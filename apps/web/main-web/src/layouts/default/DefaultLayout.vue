<template>
  <div class="flex overflow-hidden flex-wrap gap-6 pr-16 bg-white max-md:pr-5">
    <SideBar />

    <main
      class="flex flex-col grow shrink-0 mt-11 ml-[245px] basis-0 w-fit max-md:mt-10 max-md:max-w-full"
    >
      <slot />
    </main>
  </div>
</template>
<script setup lang="ts">
import SideBar from '@/components/sidebar'
</script>
