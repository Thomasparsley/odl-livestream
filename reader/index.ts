//
// Created on Fri Jun 30 2023
// Copyright (c) 2023 Tomáš Petržela (email@thomasparsley.cz)
//

import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";

import axios from "axios";

import { READ_COMMAND, parseData } from "./kocab";

const BAUD_RATE = 115200;
const SERIAL_PATH = "/dev/tty.usbserial-1140";

const READS_PER_SECOND = 15;
const READ_INTERVAL = 1000 / READS_PER_SECOND;

const END_OF_LINE_HEX = Buffer.from("0d", "hex");
const UTF_8_ENCODE = new TextEncoder();

//
// SERIAL
//

const serial = new SerialPort({
    path: SERIAL_PATH,
    baudRate: BAUD_RATE,
    dataBits: 8,
    parity: "none",
});

serial.on("open", (err) => {
    if (err) {
        console.log("Error while opening serial port:");
        console.error(err);
        return;
    }

    console.log("serial port is opened");
});

//
// LINE READER
//

const parser = serial.pipe(new ReadlineParser({ delimiter: END_OF_LINE_HEX }));
parser.on("data", (data: string) => {
    const parsedTimer = parseData(data);
    if (!parsedTimer) {
        return;
    }

    // send to API
    axios.post("http://localhost:3000/api/kv?key=stopwatch", parsedTimer)
});

//
// READ LOOP
//

setInterval(() => writeStringToSerial(READ_COMMAND), READ_INTERVAL);


//
// HELPERS
//

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