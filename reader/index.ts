//
// Created on Fri Jun 30 2023
// Copyright (c) 2023 Tomáš Petržela (email@thomasparsley.cz)
//

import axios from "axios";
import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";

import { SERIAL_PATH } from "./config";
import {
    READ_COMMAND,
    parseData,
    getRandomExample,
} from "./kocab";

const BAUD_RATE = 115200;

const READS_PER_SECOND = 15;
const READ_INTERVAL = 1000 / READS_PER_SECOND;

const END_OF_LINE_HEX = Buffer.from("0d", "hex");
const UTF_8_ENCODE = new TextEncoder();

//
// SERIAL
//

let isSerialOpen: undefined | boolean = undefined;

const serial = new SerialPort({
    path: SERIAL_PATH,
    baudRate: BAUD_RATE,
    dataBits: 8,
    parity: "none",
});

serial.on("open", (err) => {
    isSerialOpen = true;

    if (err) {
        isSerialOpen = false;
        console.log("Error while opening serial port:");
        console.error(err);
        return;
    }

    console.log("serial port is opened");
});

//
// LINE READER
//

if (isSerialOpen) {
    const parser = serial.pipe(new ReadlineParser({ delimiter: END_OF_LINE_HEX }));
    parser.on("data", (data: string) => parseAndSendData(data));
}


//
// READ LOOP
//

if (isSerialOpen) {
    // If serial port is open, read from it
    setInterval(() => writeStringToSerial(READ_COMMAND), READ_INTERVAL);
} else {
    // Else simulate connection
    setInterval(() => {
        const data = getRandomExample();
        parseAndSendData(data);
    }, READ_INTERVAL)
}



//
// HELPERS
//

function parseAndSendData(data: string): void {
    const parsedTimer = parseData(data);
    if (!parsedTimer) {
        return;
    }

    // send to KV store
    axios.post("http://localhost:3000/api/kv?key=stopwatch", parsedTimer)
}

function writeStringToSerial(str: string): void {
    writeBytesToSerial(makeByteCommand(str));
}

function writeBytesToSerial(bytes: Uint8Array): void {
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

//
// Types
//

type Empty = null | undefined;
type IsError = Error | Empty;
