import express from "express"
const app = express.Router()
import connection from "../config/connection.js"


//insert route by using async

app.post('/add', async (req, res)=>{
    const {name , email} = req.body

    const [rows, fields] = await connection.query(
        `INSERT INTO users (name, email) VALUES (?,?)`,
        [name, email]
    )
    res.status(200).json(rows)

})

//retrive route
app.get("/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    connection.query(
      `SELECT * FROM users WHERE id = ${id}`,
      (err, result, fields) => {
        console.log(result);
        res.status(200).send(...result);
      }
    );
  } else {
    res.status(400).send("id is required");
  }
});

//update route
app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    const { name, email } = req.body;
    connection.query(
      `UPDATE users SET name='${name}', email= '${email}' WHERE id =${id}`,
      (err, result, fields) => {
        console.log(result);
      }
    );
  } else {
    res.status(400).send("id is required");
  }
});

//delete route

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  if (id) {
    connection.query(
      `DELETE FROM users WHERE id = ${id}`,
      (err, result, fields) => {
        if (result.affectedRows === 1) {
          res.status(200).send("user deleted successfully");
        }
      }
    );
  } else {
    res(403).json({ success: false, message: "user id not provided" });
  }
});

export default app