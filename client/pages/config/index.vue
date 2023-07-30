<script setup lang="ts">
import {
  Team,
  LayoutViewType,
  StreamConfig,
  CategorySlugValues,
  CategorySlug,
} from "../../types";
import { TeamData } from "../../data/input";

definePageMeta({
  layout: "config",
});

const currentConfig = ref(await fetchCurrentConfig());

const currentCategory = ref(currentConfig.value.category.value);
const teams = ref(TeamData[currentCategory.value]);
const currentTeam = ref<Team>(currentConfig.value.team);
const currentTeamId = ref(currentTeam.value.teamUnitId);

async function fetchCurrentConfig(): Promise<StreamConfig> {
  const { data } = await useFetch<StreamConfig>("/api/kv", {
    query: {
      key: "config",
    },
  });

  const value = data.value;
  return value as StreamConfig;
}

async function setConfig(config: StreamConfig) {
  return await useFetch("/api/kv", {
    method: "POST",
    body: config,
    query: {
      key: "config",
    },
  });
}

async function setDefaultConfig() {
  const config: StreamConfig = {
    category: {
      name: "Mladší žáci",
      value: "mladsi-zaci",
    },
    layoutView: LayoutViewType.TeamInfo,
    startingPosition: 1,
    team: TeamData["mladsi-zaci"][0],
  };

  await setConfig(config);
  location.reload();
}

async function setPageLayout(viewType: LayoutViewType) {
  const currentConfig = await fetchCurrentConfig();

  const config: StreamConfig = {
    ...currentConfig,
    layoutView: viewType,
  };

  await setConfig(config);
}

async function setStartingPosition(n: number) {
  const currentConfig = await fetchCurrentConfig();

  const config: StreamConfig = {
    ...currentConfig,
    startingPosition: n,
  };

  await setConfig(config);
}

async function incrementStartingPosition() {
  const currentConfig = await fetchCurrentConfig();
  await setStartingPosition(currentConfig.startingPosition + 1);
}

async function setCategory(category: any) {
  const currentConfig = await fetchCurrentConfig();

  const config: StreamConfig = {
    ...currentConfig,
    category: {
      name: category.name,
      value: category.value,
    },
    team: TeamData[category.value as CategorySlug][0],
  };

  await setConfig(config);
  location.reload();
}

async function setTeam() {
  const currentConfig = await fetchCurrentConfig();

  const config: StreamConfig = {
    ...currentConfig,
    team: currentTeam.value,
  };

  await setConfig(config);
  await incrementStartingPosition();
  await setPageLayout(LayoutViewType.TeamInfo);
  location.reload();
}

watch(currentCategory, async (value) => {
  // find in CategorySlugValues
  const category = CategorySlugValues.find((c) => c.value === value);
  if (!category) return;

  setCategory(category).then(() => {});
  teams.value = TeamData[value];
});

watch(currentTeamId, (newId) => {
  const team = teams.value.find((t) => t.teamUnitId === newId);
  if (!team) return;

  currentTeam.value = team;
});
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="flex gap-2 p-2 justify-center">
      <v-btn @click="setDefaultConfig()">Nastavit výchozí nastavení</v-btn>
    </div>

    <div class="flex gap-2 p-2 justify-center">
      <v-btn @click="setPageLayout(LayoutViewType.TeamInfo)">
        Layout informace o týmu
      </v-btn>
      <v-btn @click="setPageLayout(LayoutViewType.Stopwatch)">
        Layout Požárním útoku
      </v-btn>
    </div>

    <div class="flex gap-2 p-2 justify-center">
      <v-btn @click="setStartingPosition(1)">
        Restartovat startovací pozici
      </v-btn>
      <v-btn @click="incrementStartingPosition()">
        Inkrementovat startovací pozici
      </v-btn>
    </div>

    <div class="flex gap-2 p-2 justify-center">
      <v-select
        label="Select"
        item-title="name"
        :items="CategorySlugValues"
        v-model="currentCategory"
      ></v-select>
      <v-select
        label="Select"
        :item-title="
          (team) =>
            `${
              team.name
            } - ${team.group.toUpperCase()} / ${team.district.toUpperCase()}`
        "
        item-value="teamUnitId"
        :items="teams"
        v-model="currentTeamId"
      ></v-select>
    </div>

    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field label="Jméno týmu" v-model="currentTeam.name" />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field label="Skupina" v-model="currentTeam.group" />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Okres"
              v-model="currentTeam.district"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="V sezóně"
              v-model="currentTeam.positionInSeason"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Nejlepší čas"
              v-model="currentTeam.bestTime"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Body"
              v-model="currentTeam.sumOfPoints"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Levý terč"
              v-model="currentTeam.timeFromEvent.left"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Pravý terč"
              v-model="currentTeam.timeFromEvent.right"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <div class="flex gap-2 p-2 justify-center items-center">
              <v-btn @click="setTeam()">Nastavit</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
