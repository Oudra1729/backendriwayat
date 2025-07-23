require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const novelRoutes = require("./routes/novel.routes");
const userRoutes = require("./routes/user.routes");
app.use("/api/novels", novelRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Welcome to the Riwayat API");   
// });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
