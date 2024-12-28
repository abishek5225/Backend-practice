import express from "express"
const app = express.Router()
import connection from "../models/index.js"
import userModel from "../models/userModel.js"
import { Op } from "sequelize"



//create


// app.post("/add", async (req , res)=>{
//     const {name,location, email} = req.body

//  const data = await userModel.create({
//         name: name,
//         location: location,
//         email: email
//     })

// })

//using  bulkCreate for inserting many data at a time
app.post("/adduser", async (req, res)=>{
    

    const data = await userModel.bulkCreate(req.body);

    console.log(data)
    res.status(200).json(data)

})

//read
app.post("/:id", async(req, res)=>{
    const { id } = req.params
    if(id){
        const data = await userModel.findByPk(id)
        res.json(data)
        console.log(data)
    }
})

//update
app.post("/update/:id", async(req, res)=>{
    const {id} = req.params

    if(id){
        const {name, location, email} = req.body
 const data = await  userModel.update({
        name,
        location,
        email},
         {
            where:{
                id,
            },

         })
         
         console.log(data)
        }else{
            res.status(400).json({message: "id is required"})
        }
})

//delete
app.delete("/deleteuser/:id", async(req, res)=>{

    const { id }= req.params
try{
    if(id){

     const data = await userModel.destroy({
        where:{
            id,
        }
     })
     console.log(data)

    }else{
        res.status(200).send("id is required")
    }
}catch(err){
    console.log("because of", err)
}
})

app.get("/search/by", async(req, res)=>{
    const { location } = req.query

  const data= await userModel.findAll({
        where:{
            location : {
                [Op.like] : `%${location}%`,
            }
        }
    })
    res.json(data)
})

export default app