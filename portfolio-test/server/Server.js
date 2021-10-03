const express = require("express");
const fs = require("fs");
const mdp = require("@cmdlucas/markdown-metadata");
//var cors = require('cors');
const app = express();
const port = 3001;

app.listen(port, () =>
  console.log(`Server is running and listening on port ${port}!`)
);

app.get("/essays", (req, res) => {
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

app.get("/works", (req, res) => {
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