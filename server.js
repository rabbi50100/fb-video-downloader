const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/download", async (req, res) => {
  const videoUrl = req.body.url;
  // Dummy response for now
  if (videoUrl.includes("facebook.com")) {
    return res.json({
      success: true,
      downloadUrl: "https://example.com/sample-video.mp4",
    });
  }
  res.json({ success: false });
});

app.use(express.static("."));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on port " + port));