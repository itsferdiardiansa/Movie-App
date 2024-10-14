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
        :icon="item.icon"
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
  icon: string
  label: string
  imgClass?: string
  link: string
}

const menuItems: MenuItem[] = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d0126464bb30fbdd235b47fc2ec6ad4fbc4e0284ff1e7584f1cf46eb1479bc9d?placeholderIfAbsent=true&apiKey=87cbab4469dc4082a85327d0863ba22b',
    label: 'Home',
    imgClass: 'rounded-[50px]',
    link: '/',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5c57ebf0e86a1a7e4122c1ffab3ed5ecdf460bf535a6be3200d3e0f43b776c7f?placeholderIfAbsent=true&apiKey=87cbab4469dc4082a85327d0863ba22b',
    label: 'Admin',
    imgClass: 'rounded-[50px]',
    link: '/admin',
  },
]
</script>
