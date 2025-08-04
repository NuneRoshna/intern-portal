const express = require("express");
const cors = require("cors");
const app = express();

const DUMMY = {
  internName: "Your Name",
  referralCode: "yourname2025",
  totalRaised: 4200
};

app.use(cors());

app.get("/api/intern", (req, res) => {
  res.json(DUMMY);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
