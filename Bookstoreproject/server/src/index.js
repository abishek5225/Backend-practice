import express from "express"
import connection from "./models/index.js"
import bookRoute from "./routes/bookRoutes.js"
import "dotenv/config"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.get("/", (req, res)=>{
    res.send("Hello, World!")
})

app.use("/books", bookRoute)

app.listen(process.env.PORT || 8000, async ()=>{
    console.log("Server is running on port 8000")

    try{
    await connection.authenticate()
    connection.sync()
    console.log("Database connected")
    }
    catch(err){
        console.error("error occured", err)
    }
})