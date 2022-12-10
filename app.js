"use strict";

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const handlers = require("./handlers.js");
const argv = yargs(hideBin(process.argv)).argv;

yargs.version("1.0.0");

yargs.command({
  command: "add",
  describe: "Adds a new note",
  builder: {
    title: {
      describe: "The title of the note that you intend to add",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "The content of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => handlers.add(argv),
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "The title of the note that you intend to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => handlers.remove(argv),
});

yargs.command({
  command: "update",
  builder: {
    title: {
      describe: "The title of the note that you intend to update",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "The updated content of the note",
      demandOption: true,
      type: "string",
    },
  },
  describe: "Updates the content of a note",
  handler: () => handlers.update(argv),
});

yargs.command({
  command: "read",
  describe: "Reads a note",
  builder: {
    title: {
      describe: "The title of the note that you intend to read",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => handlers.read(argv),
});

yargs.parse();
