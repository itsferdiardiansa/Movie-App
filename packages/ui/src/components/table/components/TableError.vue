<template>
  <div class="w-full h-72 pb-20">
    <div class="h-full img mb-10">
      <img svg-inline class="h-full w-full" src="@/assets/icons/empty.svg" />
    </div>

    <label class="text-lg font-medium mr-4">Oops...Something went wrong!</label>

    <Button
      variant="dark"
      :pill="true"
      :icon="['fa', 'redo-alt']"
      @click="handleReload"
    />
  </div>
</template>
<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { Button } from '@/components/button'

const handleReload = () => {
  // TODO
}
</script>
