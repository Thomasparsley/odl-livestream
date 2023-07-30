<script setup lang="ts">
const { value, large, extralarge, padding } = defineProps<{
  value: number;
  large?: boolean;
  extralarge?: boolean;
  padding?: boolean;
}>();

/* const min = computed(() => Math.floor(value / 60000));
const sec = computed(() => Math.floor((value % 60000) / 1000));
const ms = computed(() => Math.floor((value % 1000) / 10)); */
</script>

<template>
  <span>
    <template v-if="padding">
      <span :class="{ 'text-3xl': large, 'text-9xl font-bold': extralarge }">
        <span :class="Math.floor(value / 60000) == 0 ? 'text-transparent' : ''"
          >{{ Math.floor(value / 60000) }}:</span
        ><template v-if="Math.floor(value / 60000) > 0">
          <span>{{
            Math.floor((value % 60000) / 1000)
              .toString()
              .padStart(2, "0")
          }}</span>
        </template>
        <template v-else>
          <span>{{ Math.floor((value % 60000) / 1000) }}</span>
        </template>
        <span
          :class="{
            'text-base': !large && !extralarge,
            'text-2xl': large,
            'text-8xl font-bold': extralarge,
          }"
          >,{{
            Math.floor((value % 1000) / 10)
              .toString()
              .padStart(2, "0")
          }}</span
        >
      </span>
    </template>
    <template v-else>
      <template v-if="Math.floor(value / 60000) > 0"
        >{{ Math.floor(value / 60000) }}:<span>{{
          Math.floor((value % 60000) / 1000)
            .toString()
            .padStart(2, "0")
        }}</span></template
      >

      <template v-else>
        <span>{{ Math.floor((value % 60000) / 1000) }}</span>
      </template>
      <span
        :class="{
          'text-base': !large && !extralarge,
          'text-2xl': large,
          'text-8xl font-bold': extralarge,
        }"
        >,{{
          Math.floor((value % 1000) / 10)
            .toString()
            .padStart(2, "0")
        }}</span
      >
    </template>
  </span>
</template>
