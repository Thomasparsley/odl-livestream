<script setup lang="ts">
import { Team } from "../types";

const { team } = defineProps<{
  team: Team;
}>();
</script>

<template>
  <div class="absolute top-0 left-0">
    <div class="flex mx-28 my-16">
      <div
        class="bg-gray-900/90 rounded-lg flex justify-center items-center gap-3 px-4 py-1"
      >
        <p class="text-white font-medium flex items-baseline gap-1">
          <span class="font-bold text-2xl text-sky-500">{{ team.name }}</span>
          <template v-if="team.group !== 'a'">
            <span class="font-bold text-2xl text-sky-500 uppercase">{{
              team.group
            }}</span></template
          >
          <span>/</span>
          <span class="uppercase">{{ team.district }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
