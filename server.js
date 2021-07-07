const express = require("express");
const connectDB = require("./config/database");

const app = express();

//Connect database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// ============== ROUTES DECLARATION & IMPORT ====================== //
const authRoute = require("./routes/api/auth");
app.use("/api/auth", authRoute);

const postRoute = require("./routes/api/posts");
app.use("/api/posts", postRoute);

const profileRoute = require("./routes/api/profile");
app.use("/api/profile", profileRoute);

const userRoute = require("./routes/api/users");
app.use("/api/users", userRoute);
// ============== END ROUTES DECLARATION & IMPORT ====================== //
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
