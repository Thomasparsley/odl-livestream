<script setup lang="ts">
import { StopwatchResponse } from "../types";

const { timer } = defineProps<{
  timer: StopwatchResponse;
}>();
</script>

<template>
  <div class="absolute top-0 left-0 w-full flex justify-center">
    <div class="mt-16">
      <div class="flex gap-10 px-4 py-1 rounded-lg bg-gray-900/90 text-white">
        <pre class="flex gap-2 w-36">
          <span class="text-3xl">L</span>
          <Time :value="timer.left" large padding />
        </pre>

        <pre class="flex gap-2 w-36">
          <span class="text-3xl">P</span>
          <Time :value="timer.right" large padding />
        </pre>
      </div>
    </div>
  </div>
</template>
