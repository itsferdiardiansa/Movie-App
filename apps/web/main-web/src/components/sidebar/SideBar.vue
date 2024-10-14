<template>
  <nav
    class="fixed h-full flex flex-col items-start px-12 pt-7 pb-44 text-base font-light text-black bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.5)] max-md:px-5 max-md:pb-24"
  >
    <h1 class="self-stretch ml-3 text-4xl max-md:ml-2.5">
      <span>Fest.</span><span class="text-xl text-red-900">com</span>
    </h1>

    <ul>
      <MenuItem
        v-for="(item, index) in menuItems"
        :key="index"
        :label="item.label"
        :imgClass="item.imgClass"
        :link="item.link"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'

interface MenuItem {
  label: string
  imgClass?: string
  link: string
}

const menuItems: MenuItem[] = [
  {
    label: 'Home',
    imgClass: 'rounded-[50px]',
    link: '/',
  },
  {
    label: 'Admin',
    imgClass: 'rounded-[50px]',
    link: '/admin',
  },
]
</script>
