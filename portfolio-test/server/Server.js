const express = require("express");
const fs = require("fs");
const mdp = require("@cmdlucas/markdown-metadata");
const md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
});
//var cors = require('cors');
const app = express();
const port = 3001;

app.listen(port, () =>
  console.log(`Server is running and listening on port ${port}!`)
);

app.get("/essays", (req, res) => {
  const essayDir = "../_Essays";
  const essayArr = fs.readdirSync(essayDir);
  let metaArr = new Array(essayArr.length).fill(null);
  if (essayArr.length > 0) {
    for (let i = 0; i < essayArr.length; i++) {
      const readFile = fs.readFileSync(essayDir + "/" + essayArr[i], "utf-8");
      const fileContent = mdp.parse(readFile);
      metaArr[i] = fileContent.metadata;
    }
    res.send(metaArr);
  } else {
    res.send("error: No essays to list");
  }
});

app.get("/essays/:essName", (req, res) => {
  const essayFile = "../_Essays/" + req.params.essName;
  if (fs.existsSync(essayFile)) {
    let fileContent = fs.readFileSync(essayFile, 'utf-8');
    let mdConv = md.render(fileContent);
    console.log(mdConv);
    res.send(mdConv);
  } else {
    res.send(`${req.params.essName} does not exist.`);
  }
});

app.get("/works", (req, res) => {
  const workDir = "../_Works";
  const workArr = fs.readdirSync(workDir);
  let metaArr = new Array(workArr.length).fill(null);
  if (workArr.length > 0) {
    for (let i = 0; i < workArr.length; i++) {
      const readFile = fs.readFileSync(workDir + "/" + workArr[i], "utf-8");
      const fileContent = mdp.parse(readFile);
      metaArr[i] = fileContent.metadata;
    }
    res.send(metaArr);
  } else {
    res.send("error: No essays to list");
  }
});

app.get("/essaysAsync", (req, res) => {
  const essayDir = "../_Essays";
  fs.readdir(essayDir, (err, files) => {
    if (err) throw err;
    else {
      let metaArr = new Array(files.length);
      for (let i = 0; i < files.length; i++) {
        fs.readFile(essayDir + "/" + files[i], "utf-8", (err, data) => {
          if (err) throw err;
          else {
            metaArr[i] = mdp.parse(data).metadata;
            if (i === files.length - 1) res.send(metaArr);
          }
        });
      }
    }
  });
});

app.get("/worksAsync", (req, res) => {
  const worksDir = "../_Works";
  fs.readdir(worksDir, (err, files) => {
    if (err) throw err;
    else {
      let metaArr = new Array(files.length);
      for (let i = 0; i < files.length; i++) {
        fs.readFile(worksDir + "/" + files[i], "utf-8", (err, data) => {
          if (err) throw err;
          else {
            metaArr[i] = mdp.parse(data).metadata;
            if (i === files.length - 1) res.send(metaArr);
          }
        });
      }
    }
  });
});