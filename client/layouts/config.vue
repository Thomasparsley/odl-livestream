<script setup lang="ts">
definePageMeta({
  layout: "config",
});

const links = [
  {
    name: "Časomíra",
    path: "/config/timer",
  },
  {
    name: "Nastavení",
    path: "/config",
  },
];
</script>

<template>
  <v-app id="inspire">
    <v-app-bar class="px-3" color="white" flat density="compact">
      <v-spacer></v-spacer>

      <v-tabs centered color="grey-darken-2">
        <NuxtLink v-for="link in links" :key="link.path" :to="link.path">
          <v-tab>
            {{ link.name }}
          </v-tab>
        </NuxtLink>
      </v-tabs>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-sheet min-height="70vh" rounded="lg">
              <slot></slot>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
