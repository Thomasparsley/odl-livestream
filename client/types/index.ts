//
// Created on Sat Jul 01 2023
// Copyright (c) 2023 Tomáš Petržela (email@thomasparsley.cz)
//

export interface StopwatchResponse {
    left: number
    right: number
}

export type CategorySlug = "starsi-zaci" | "mladsi-zaci" | "dorostenci";
export const CategorySlugValues = [{
    name: "Starší žáci",
    value: "starsi-zaci"
}, {
    name: "Mladší žáci",
    value: "mladsi-zaci"
}, {
    name: "Dorostenci",
    value: "dorostenci"
}] as const;

export interface Team {
    teamId: number;
    teamUnitId: number;
    name: string;
    slug: string;
    group: string;
    district: string;
    sumOfPoints: number;
    points: number[];
    countedValues: { [key: number]: number };
    bestTime: number;
    positionInSeason: number;
    timeFromEvent: {
        left: number;
        right: number;
    }
}

export type TeamsByCategory = {
    [key in CategorySlug]: Team[];
};

export interface Category {
    name: string;
    value: CategorySlug;
}

export enum LayoutViewType {
    TeamInfo = 0,
    Stopwatch = 1,
}

export interface StreamConfig {
    category: Category
    layoutView: LayoutViewType
    startingPosition: number
    team: Team
}