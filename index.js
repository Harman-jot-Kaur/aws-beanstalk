const express = require("express");
const app = express();

// IMPORTANT: Use the system port variable or fallback to 3000
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello! This is a flower app.</h1>");
});

app.get("/flower", (req, res) => {
  res.json({
    name: "Rose",
    color: "Red",
    fragrance: "Sweet",
    image_url: "https://flower-harman.s3.us-east-1.amazonaws.com/download.jpg"
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
