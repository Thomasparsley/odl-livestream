<script setup lang="ts">
import { LayoutViewType, StopwatchResponse, StreamConfig } from "../types";

const { data: config, refresh: configRefresh } = await useFetch<StreamConfig>(
  "/api/kv",
  {
    query: {
      key: "config",
    },
  }
);

const { data: timer, refresh: timerRefresh } =
  await useFetch<StopwatchResponse>("/api/kv", {
    query: {
      key: "stopwatch",
    },
  });

const interval = setInterval(async () => {
  await configRefresh();
  await timerRefresh();
}, 100);

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="relative">
    <!-- Informace o týmu -->
    <Transition name="fromTop">
      <Live v-if="config?.layoutView == LayoutViewType.TeamInfo" />
    </Transition>

    <Transition name="fromTop">
      <CurrentCategory
        v-if="config?.layoutView == LayoutViewType.TeamInfo"
        :name="config?.category.name"
      />
    </Transition>

    <Transition name="fromBottom">
      <TeamInfo
        :team="config?.team"
        :starting-position="config?.startingPosition ?? 1"
        v-if="config?.layoutView == LayoutViewType.TeamInfo"
      />
    </Transition>

    <!-- Požářní útok -->

    <Transition name="fromTop">
      <Stopwatch
        v-if="config?.layoutView == LayoutViewType.Stopwatch"
        :timer="timer!"
      />
    </Transition>

    <Transition name="fromTop">
      <CurrentTeam
        v-if="config?.layoutView == LayoutViewType.Stopwatch"
        :team="config.team"
      />
    </Transition>
  </div>
</template>

<style>
.fromTop-enter-active,
.fromTop-leave-active {
  transition: transform 0.5s ease;
}

.fromTop-enter-from,
.fromTop-leave-to {
  transform: translateY(-200px);
}

.fromBottom-enter-active,
.fromBottom-leave-active {
  transition: transform 0.5s ease;
}

.fromBottom-enter-from,
.fromBottom-leave-to {
  transform: translateY(200px);
}
</style>
