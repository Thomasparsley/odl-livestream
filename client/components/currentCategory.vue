<script setup lang="ts">
const { name } = defineProps({
  name: String,
});
</script>

<template>
  <div class="absolute top-0 left-0">
    <div class="flex mx-28 my-16">
      <div
        class="bg-gray-900/90 rounded-lg flex justify-center items-center gap-3 px-4 py-1"
      >
        <p class="text-white font-medium text-2xl">{{ name }}</p>
      </div>
    </div>
  </div>
</template>
