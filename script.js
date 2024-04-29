const fs = require("node:fs/promises"); //common js import

fs.writeFile("./files/message.txt", "day-1 of nodejs", "utf8", () => {
  console.log("file creation sucessfull");
});
fs.writeFile("./files/message2.txt", " nodejs", "utf8", () => {
  console.log("file creation sucessfull");
});
//creating file with current date and time as file name

const date = new Date();
const filename = `${date.getFullYear()}-${
  date.getMonth() + 1
}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}`;
fs.writeFile(`./files/${filename}.txt`, `${filename}`, "utf8", () => {
  console.log("file creation sucessfull");
});
fs.readdir("./files", (error, files) => {
  if (error) console.log(error)
   else console.log(files); 
});
