import express from 'express'
const router = express.Router()


router.get("/", (req, res) => {
  res.status(201).json({ name: "think and grow rich" });

});

router.get("/delete", (req, res) => {
  res.status(201).send("book deleted");
});

export default router