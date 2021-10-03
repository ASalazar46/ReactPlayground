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
  const readFile = fs.readFileSync(essayDir+'/'+essayArr[0], 'utf-8');
  const fileContent = mdp.parse(readFile);
  console.log(fileContent.metadata);
  res.json({fileMeta: fileContent.metadata});
});
