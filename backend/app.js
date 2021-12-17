require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My routes
const authRoutes = require("./routes/auth");

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

  //Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);



//PORT
const port = process.env.PORT || 8000;
 
//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});

// const express=require("express");

// const app=express();

app.get("/",(req,res)=>{
  res.send("home");
});

// app.listen(3000,()=>{
//   console.log("listen to 3000");
// });

