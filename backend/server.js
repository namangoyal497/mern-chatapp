
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connectTomongodb from "./db/connectTomongodb.js";

const app=express();
const PORT=process.env.PORT || 5000;

dotenv.config()
// app.get("/",(req,res)=>{
//     res.send("Hello world")
// })

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.listen(PORT,()=>{
    connectTomongodb();
    console.log(`Server running on the port ${PORT}`)
});