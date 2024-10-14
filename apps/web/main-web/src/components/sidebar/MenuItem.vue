<template>
  <router-link
    :to="link"
    class="flex gap-3 mt-8 whitespace-nowrap items-center"
  >
    <li class="flex gap-3 items-center">
      <img
        :src="icon"
        class="object-contain shrink-0 w-6 aspect-square"
        :class="imgClass"
      />
      <span>{{ label }}</span>
    </li>
  </router-link>
</template>

<script setup lang="ts">
interface MenuItemProps {
  icon: string
  label: string
  imgClass?: string
  link: string
}

const props = defineProps<MenuItemProps>()
</script>
