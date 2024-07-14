// Importing required modules
import fs from "node:fs/promises";
import express from "express";

// Creating server
const app = express();
const port = 5000;
app.use(express.json());

//creating file with current date and time as file name
app.post("/createfile", async (req, res) => {
  try {
    const date = new Date();
    const name = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}-${date.getHours()}-${date.getMinutes()}`;
    
    await fs.writeFile(`./files/${name}.txt`, `${name}`, "utf8");
    
    res.send("File creation successful");
  } catch (err) {
    res.status(500).send(err.toString());
  }
});


//readin text files from directory
app.get("/readfiles", async (req, res) => {
  try {
    const name = req.query.name;
    console.log(name)
    console.log(`GET /readfiles called with query parameter: ${name}`);
    
    const files = await fs.readdir(name);
      res.send(files);
    
  } catch (err) {
    console.error(`Error reading directory: ${err}`);
    res.status(500).send(err.toString());
  }
});


app.listen(port,()=>{console.log(`server starteed at at port,${port}`)})
