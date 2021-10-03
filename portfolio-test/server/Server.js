const express = require("express");
const fs = require("fs");
const mdp = require("@cmdlucas/markdown-metadata");
//var cors = require('cors');
const app = express();
const port = 3001;

app.listen(port, () =>
  console.log(`Server is running and listening on port ${port}!`)
);
app.get("/essaysOld", (req, res) => {
  const essaysDir = "../Essays";
  let fc = fs.readdirSync(essaysDir).length;
  res.json({ count: fc });
});
app.get("/essays", (req, res) => {
  const essayDir = "../Essays";
  const essayArr = fs.readdirSync(essayDir);
  let metaArr = new Array(essayArr.length).fill(null);
  if (essayArr.length > 0) {
    for (let i = 0; i < essayArr.length; i++) {
      const readFile = fs.readFileSync(essayDir + "/" + essayArr[i], "utf-8");
      const fileContent = mdp.parse(readFile);
      metaArr[i] = fileContent.metadata;
    }
    res.json({fileMeta: metaArr});
  } else {
    res.json({ error: "No essays to list" });
  }
});
