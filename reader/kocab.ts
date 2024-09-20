//
// Created on Fri Jun 30 2023
// Updated on Fri Sep 20 2024
//
// Copyright (c) 2023-2024 Tomáš Petržela (email@thomasparsley.cz)
//

const MINIMAL_LEN_OF_DATA = 27;

//
// Examples of states
//

/** Neutral state */
const EXAMPLE_NEUTRAL_STATE = "2:0:1:0:1:0:1:0:1:0:0:0:0:1";

/** Left and right target running */
const EXAMPLE_LEFT_RIGHT = "2:0:4:6270:2:6270:2:0:1:0:0:0:0:2";

// Final
// The left target is the resulting time
const EXAMPLE_FINAL = "2:0:8:32010:8:29470:8:0:1:0:0:0:0:8";

// Only the right target runs, the left target is knocked down
const EXAMPLE_ONLY_RIGHT = "2:0:4:5390:8:18070:2:0:1:0:0:0:0:2";

// Countdown
const EXAMPLE_COUNTDOWN = "2:300000:1:0:1:0:1:0:1:0:0:0:0:1";

const EXAMPLES = [
  EXAMPLE_NEUTRAL_STATE,
  EXAMPLE_LEFT_RIGHT,
  EXAMPLE_FINAL,
  EXAMPLE_ONLY_RIGHT,
  EXAMPLE_COUNTDOWN
] as const;

export function getRandomExample() {
  const idx = Math.floor(Math.random() * EXAMPLES.length);
  return EXAMPLES[idx];
}

/*
console.log(parseData(EXAMPLE_NEUTRAL_STATE));
console.log(parseData(EXAMPLE_LEFT_RIGHT));
console.log(parseData(EXAMPLE_FINAL));
console.log(parseData(EXAMPLE_ONLY_RIGHT));
console.log(parseData(EXAMPLE_COUNTDOWN));
*/

//
// Comannd
//

export const RESET_COMMAND = "#RST";
export const READ_COMMAND = "#APP:cw:data?";

//
// Parsing
//

/**
 * Code to parse the timer from the given data.
 * @param data The data to parse.
 * @returns The parsed timer, or null if the timer could not be parsed.
 */
export function parseData(data: string): Timer | null {
  // if the data is too short, it's invalid
  if (data.length < MINIMAL_LEN_OF_DATA) {
    return null;
  }

  // if the data starts with a colon, it's invalid
  if (data[0] === ":") {
    return null;
  }

  // if the first character is a letter, it's invalid
  if (data[0].match(/[a-z]/i)) {
    return null;
  }

  // otherwise, try to parse it as a timer
  return parseTimer(data);
}

/**
 * Code to parse the timer from the given data.
 * @param data The data to parse.
 * @returns The parsed timer, or null if the timer could not be parsed.
 */
function parseTimer(data: string): Timer | null {
  // Split the data by the colon
  const splited = data.split(":");

  // Parse the first line as the left timer
  const lineOne = parseInt(splited[3]) as Ms;
  if (isNaN(lineOne)) {
    return null;
  }
  // Parse the second line as the right timer
  const lineTwo = parseInt(splited[5]) as Ms;
  if (isNaN(lineTwo)) {
    return null;
  }

  const timer: Timer = {
    left: lineOne,
    right: lineTwo,
  };

  return timer;
}

//
// Types
//

export type Ms = number;

export interface Timer {
  left: Ms;
  right: Ms;
}
