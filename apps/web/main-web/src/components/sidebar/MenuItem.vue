<template>
  <router-link
    :to="link"
    class="flex gap-3 mt-8 whitespace-nowrap items-center"
  >
    <li class="flex gap-3 items-center">
      <span>{{ label }}</span>
    </li>
  </router-link>
</template>

<script setup lang="ts">
interface MenuItemProps {
  label: string
  imgClass?: string
  link: string
}

const props = defineProps<MenuItemProps>()
</script>
