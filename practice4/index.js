import { log } from "console"
import express from "express"
import mysql from "mysql2/promise"
import { json } from "stream/consumers"
import userRouter from "./Routes/userRoutes.js"
import bookRoutes from "./Routes/bookRoutes.js"
import connection from "./models/index.js"


const app= express()
app.use(express.json())

app.use("/books", bookRoutes)
app.use("/user", userRouter)



app.listen(8000, async()=>{
    console.log("server has been started")

    await connection.authenticate()
    connection.sync()
})