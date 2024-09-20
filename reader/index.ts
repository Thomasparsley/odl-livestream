//
// Created on Fri Jun 30 2023
// Updated on Fri Sep 20 2024
//
// Copyright (c) 2023-2024 Tomáš Petržela (email@thomasparsley.cz)
//
import { startKocabSerial, startDemoKocabSerial, type KocabSerialConfig } from "./kocabSerial";

const DEMO = true;

const config: KocabSerialConfig = {
  path: "/dev/tty.usbserial-1140", // <-- EDIT HERE
  baudRate: 115_200,
  readsPerSecond: 15,
};

if (DEMO) {
  startDemoKocabSerial(config);
} else {
  startKocabSerial(config);
}
