const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());
app.use(express.json());

app.post("/kidney", function (req, res) {
  const kidneys = req.body.kidneys;
  const response = schema.safeparse(kidneys);
  response.send({
    response,
  });
}),
  app.listen(3000);
