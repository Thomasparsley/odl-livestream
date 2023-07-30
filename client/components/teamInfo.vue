<script setup lang="ts">
import { Team } from "types";

const { team, startingPosition } = defineProps<{
  team: Team;
  startingPosition: number;
}>();
</script>

<template>
  <div class="absolute top-0 left-0 w-screen h-screen text-lg">
    <div class="flex flex-col justify-end h-full">
      <div class="flex flex-col gap-1 mx-28 my-16">
        <!-- Top bar -->
        <div
          class="bg-gray-900/90 w-full rounded-t-lg rounded-b flex justify-between"
        >
          <!-- Team name, discrit -->
          <div class="text-white px-6 py-2">
            <h3 class="flex items-baseline gap-1">
              <span class="font-bold text-4xl text-sky-500"
                >{{ team.name }}
                <template v-if="team.group !== 'a'">
                  <span class="uppercase">{{ team.group }}</span></template
                ></span
              >
              <span>/</span>
              <span class="uppercase">{{ team.district }}</span>
            </h3>
          </div>

          <!-- Result time -->
          <div class="text-white px-6 py-2 h-full flex items-center">
            <div
              v-if="team.timeFromEvent.left < 0 || team.timeFromEvent.right < 0"
            >
              NP
            </div>
            <div
              v-else-if="
                team.timeFromEvent.left > 0 || team.timeFromEvent.right > 0
              "
            >
              <Time
                class="font-bold"
                :value="
                  team.timeFromEvent.left >= team.timeFromEvent.right
                    ? team.timeFromEvent.left
                    : team.timeFromEvent.right
                "
              />
              /
              <Time
                :value="
                  team.timeFromEvent.left < team.timeFromEvent.right
                    ? team.timeFromEvent.left
                    : team.timeFromEvent.right
                "
              />
              <template
                v-if="
                  team.timeFromEvent.left >= team.timeFromEvent.right
                    ? false
                    : true
                "
              >
                L
              </template>
              <template
                v-if="
                  team.timeFromEvent.left >= team.timeFromEvent.right
                    ? true
                    : false
                "
              >
                P
              </template>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="bg-gray-900/90 w-full h-10 rounded-b-lg rounded-t">
          <div
            class="flex justify-between items-center h-full px-6 py-2 text-white"
          >
            <p>{{ startingPosition }}. Startovní pořadí</p>
            <p>V sezóně {{ team.positionInSeason }}. místo</p>
            <p>Nejlepší čas <Time :value="team.bestTime" /></p>
            <p>{{ team.sumOfPoints }} Bodů</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
