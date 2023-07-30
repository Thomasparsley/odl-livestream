//
// Created on Sat Jul 01 2023
// Copyright (c) 2023 Tomáš Petržela (email@thomasparsley.cz)
//

import { TeamData } from "../../data/input";
import { LayoutViewType, StreamConfig } from "../../types";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const key = query.key as string;

  const value = await useStorage().getItem(key);

  if (key === "config" && value === null) {
    const config: StreamConfig = {
      category: {
        name: "Mladší žáci",
        value: "mladsi-zaci",
      },
      layoutView: LayoutViewType.TeamInfo,
      startingPosition: 1,
      team: TeamData["mladsi-zaci"][0],
    };

    await useStorage().setItem(key, config);
  }

  if (key === "stopwatch" && value === null) {
    await useStorage().setItem(key, {
      left: 0,
      right: 0,
    })
  }

  return value;
});
