const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let port = process.env.PORT || 8000;

//app.get(route,callback)
app.use(bodyParser.urlencoded({ extended: true }));
// app.get("/", (req, res) => {
//   res.send("Hallow home page!");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  let w1 = Number(req.body.wk);
  let w2 = Number(req.body.wg);
  let h1 = Number(req.body.hf);
  let h2 = Number(req.body.hi);

  let weight = w1 + w2 / 1000;
  let hight = (h1 + h2 / 12) / 3.281;
  let bmi = weight / (hight * hight);

  res.send("<h1>BMI :</h1>" + bmi);
//   res.send("<h1>BMI :</h1>" + bmi);
// res.sendFile(__dirname + "/x.html");
});
app.listen(port, () => {
  console.log("listning port 8000");
});
