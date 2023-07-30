<script setup lang="ts">
import { StopwatchResponse } from "../../types";

definePageMeta({
  layout: "config",
});

const { data: timer, refresh } = await useFetch<StopwatchResponse>("/api/kv", {
  query: {
    key: "stopwatch",
  },
});

const refreser = setInterval(async () => {
  await refresh();
}, 100);

onBeforeUnmount(() => {
  clearInterval(refreser);
});
</script>

<template>
  <div
    class="gap-5 h-full w-full flex justify-center items-center flex-col text-gray-900"
  >
    <pre class="flex gap-3 w-[500px]">
      <span class="text-9xl font-bold">L</span>
      <Time :value="timer!.left" extralarge padding />
    </pre>

    <pre class="flex gap-3 mt-5 w-[500px]">
      <span class="text-9xl font-bold">P</span>
      <Time :value="timer!.right" extralarge padding />
    </pre>
  </div>
</template>
