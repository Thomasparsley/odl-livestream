//
// Created on Fri Jun 30 2023
// Updated on Fri Sep 20 2024
//
// Copyright (c) 2023-2024 Tomáš Petržela (email@thomasparsley.cz)
//
import axios from "axios";
import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";

import { END_OF_LINE_HEX } from "./constats";
import { writeStringToSerial } from "./helpers";
import {
  READ_COMMAND,
  parseData,
  getRandomExample,
} from "./kocab";

export interface KocabSerialConfig {
  path: string;
  baudRate: number;
  readsPerSecond: number;
  dataBits?: 8 | 5 | 6 | 7;
  parity?: "none";
}

export function startKocabSerial(config: KocabSerialConfig) {
  const { path, baudRate, dataBits, parity } = config;

  const serial = new SerialPort({
    path,
    baudRate,
    dataBits: dataBits ?? 8,
    parity: parity ?? "none",
  });

  serial.on("open", (err) => {
    if (err) {
      console.log("Error while opening serial port:");
      console.error(err);
    } else {
      console.log("serial port is opened");
      mainSerial(serial, config);
    }
  });
}

function mainSerial(serial: SerialPort, config: KocabSerialConfig) {
  const parser = serial.pipe(new ReadlineParser({ delimiter: END_OF_LINE_HEX }));
  parser.on("data", (data: string) => parseAndSendData(data));

  const readInterval = calculateReadInterval(config.readsPerSecond);

  setInterval(() => writeStringToSerial(serial, READ_COMMAND), readInterval);
}

export function startDemoKocabSerial(config: KocabSerialConfig) {
  const readInterval = calculateReadInterval(config.readsPerSecond);

  setInterval(() => {
    const data = getRandomExample();
    parseAndSendData(data);
  }, readInterval)
}

//
// HELPERS
//

function calculateReadInterval(readsPerSecond: number): number {
  return 1000 / readsPerSecond;
}

function parseAndSendData(data: string): void {
  const parsedTimer = parseData(data);
  if (!parsedTimer) {
    return;
  }

  // send to KV store
  axios.post("http://localhost:3000/api/kv?key=stopwatch", parsedTimer)
}
