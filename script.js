const fs = require("node:fs/promises"); //common js import

//creating server
const express = require("express");


//creating file with current date and time as file name
const date = new Date();
const name = `${date.getFullYear()}-${
  date.getMonth() + 1
}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}`;



//function to create files dynamically
async function writefilewithName(filename = "", content = "") {
  try {
    await fs.writeFile(`./files/${filename}.txt`, `${content}`, "utf8", (
      console.log("file creation sucessfull"))
    );
  } catch(error)  {
    console.log(error);
  }
}
writefilewithName(name, name),
      writefilewithName("message-0", "file creation task -1"),
      writefilewithName("message-1", "file creation task -2"),
      writefilewithName("message-2", "file creation task -3")




//readin text files from directory
async function readfileFrompath(dirname = "") {
  try {
    const files = await fs.readdir(`./${dirname}`);
    console.log(files);
  } catch(error)  {
    console.log(error);
  }
}
readfileFrompath("files")


