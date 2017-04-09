import React from "react";
import express from "express";
import { StaticRouter } from "react-router-dom";

import renderPage from "./templates/index";
import App from "./app/App";

const app = express();

app.use("*", (req, res) => {
  const title = "Microscope";
  res.status(200).send(renderPage(title, (
    <StaticRouter context={{}} location={req.url}>
      <App />
    </StaticRouter>
  )));
});

export default app;