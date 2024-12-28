const express = require("express");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req,res, next){
   return new(new Error("not implemented"))
   next()
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000); 