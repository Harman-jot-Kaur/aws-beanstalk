const express = require("express");
const app = express();

// IMPORTANT: Use the system port variable or fallback to 3000
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello! This is a flower app.</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
