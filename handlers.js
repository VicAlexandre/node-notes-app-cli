"use strict";

const chalk = require("chalk");
const fs = require("fs");

const errorMsg = () =>
  console.log(
    chalk.red.bold("ERROR: A note with the informed title has not been found")
  );

function addHandler(argv) {
  console.log(`==================================
        ${chalk.green.bold("Adding a new note!")}
        ${chalk.green("Title:")} ${argv.title}
        ${chalk.green("Content:")} ${argv.body}
==================================`);
  fs.writeFileSync(
    "./" + argv.title.toLowerCase() + ".json",
    JSON.stringify(argv)
  );
}

function readHandler(argv) {
  try {
    const { title, body } = JSON.parse(
      fs.readFileSync("./" + argv.title.toLowerCase() + ".json", "binary")
    );
    console.log(`==================================
      ${chalk.green("Title:")} ${title}
      ${chalk.green("Content:")} ${body}
==================================`);
  } catch (error) {
    errorMsg();
  }
}

function removeHandler(argv) {
  try {
    fs.rmSync("./" + argv.title.toLowerCase() + ".json");
    console.log(`==================================
    ${chalk.red.bold("Removing a new note!")}
    ${chalk.green("Title:")} ${argv.title}
  ==================================`);
  } catch (error) {
    errorMsg();
  }
}

function updateHandler(argv) {
  try {
    const note = JSON.parse(
      fs.readFileSync("./" + argv.title.toLowerCase() + ".json", "binary")
    );
    console.log(`==================================
  ${chalk.blue.bold("Updating a note!")}
  ${chalk.green("Title:")} ${note.title}
  ${chalk.green("Old content:")} ${note.body}
  ${chalk.green("New content:")} ${argv.body}
==================================`);
    note.body = argv.body;
    fs.writeFileSync(
      "./" + argv.title.toLowerCase() + ".json",
      JSON.stringify(note)
    );
  } catch (error) {
    errorMsg();
  }
}

exports.add = addHandler;
exports.read = readHandler;
exports.remove = removeHandler;
exports.update = updateHandler;
