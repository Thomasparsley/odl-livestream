//
// Created on Fri Jun 30 2023
// Updated on Fri Sep 20 2024
//
// Copyright (c) 2023-2024 Tomáš Petržela (email@thomasparsley.cz)
//
import type { SerialPort } from "serialport";

import { IsError } from "./types";

const UTF_8_ENCODE = new TextEncoder();

export function writeStringToSerial(serial: SerialPort, str: string): void {
  writeBytesToSerial(serial, makeByteCommand(str));
}

function writeBytesToSerial(serial: SerialPort, bytes: Uint8Array): void {
  serial.write(bytes, writeErrorHandler);
}

function makeByteCommand(command: string): Uint8Array {
  return UTF_8_ENCODE.encode(command + "\n");
}

function writeErrorHandler(err: IsError): void {
  if (err) {
    console.log("Error while sending message:");
    console.error(err);
  }
}
