<template>
  <div class="flex min-h-[100dvh] flex-col overflow-hidden">
    <div class="relative z-50">
      <div
        class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-sky-400 to-teal-400"
      ></div>
    </div>

    <main class="w-full h-full">
      <slot></slot>
    </main>
  </div>
</template>

<style>
html {
  @apply overflow-hidden;
}
</style>
