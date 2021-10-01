var express = require("express");
var fs = require("fs");
//var cors = require('cors');
var app = express();
var port = 3001;

app.listen(port, () =>
  console.log(`Server is running and listening on port ${port}!`)
);
app.get("/essays", (req, res) => {
  const essaysDir = "../Essays";
  let fc = fs.readdirSync(essaysDir).length;
  res.json({ count: fc });
});
