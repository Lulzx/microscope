import express from "express";

const app = express();

app.get("*", (req, res) => {
  const title = "Microscope";

  res.status(200).send(title);
});

export default app;