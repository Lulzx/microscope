import app from "./server.jsx";

// import {createStore} from "redux";
// import {Provider} from "react-redux";

const PORT = process.env.PORT || 2112;

app.listen(PORT, function() {
  console.log("Server listening on", PORT);
});
