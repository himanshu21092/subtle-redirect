const express = require("express");
const app = express();
const port = 7001; // You can use any port you prefer

app.get("/", (req, res) => {
  // Redirect the client's browser to google.com
  res.redirect("https://www.subtlecontrols.com");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
