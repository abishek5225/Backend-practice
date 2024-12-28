import bookModel from "../models/bookModel.js"
import { Op } from "sequelize"

export default class bookcontroller {
  async addbook(req, res, imagename) {
    const data = await bookModel.create({ ...req.body, image: imagename });
    console.log(data);

    if (data) {
      res.json(data);
    } else {
      res.json({ message: "Error while adding book" });
    }
  }

  async getBookByID(req, res) {
    const { id } = req.params;
    const data = await bookModel.findByPk(id);
    if (id) {
      if (id) {
        res.json(data);
      } else {
        res.send("no such user exist");
      }

      console.log(data);
    } else {
      res.json({ success: false, message: "book id not found" });
    }
  }

  async updatebook(req, res) {
    const { id } = req.params;
    const data = await bookModel.findByPk(id);

    if (id) {
      const data = await bookModel.update(req.body, {
        where: {
          id,
        },
      });

      console.log(data);
    } else {
      res.send("no such user exist");
    }

    console.log(data);
  }

  async deletebook(req, res) {
    const { id } = req.params;
    const data = await bookModel.findByPk(id);

    if (id) {
      const data = await bookModel.destroy({
        where: {
          id,
        },
      });

      console.log("book deleted")
      res.json({message: "book deleted successfully"})
    } else {
      res.send("no such user exist");
    }

    console.log(data);
  }

 async searchbook(req, res){
    const { q } = req.query

    if(q){
        const data = await bookModel.findAll({
            where:{
                [Op.or]: {
                    name:{
                        [Op.like]: `%${q}%`,
                    },
                    author:{
                        [Op.like]: `%${q}%`,
                    },
                },
            },
        })
        res.json(data)
    }else{
        res.send("no query")
    }
  }

  async getbook(req, res){
    let { limit } = req.query
    if(!limit) limit = 20
   const data = await bookModel.findAll({
        limit,
    })
    res.json(data)
  }

}

