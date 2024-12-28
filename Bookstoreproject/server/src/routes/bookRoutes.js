import { Router} from "express"
import multer from "multer"
import { log } from "console"
import bookcontroller from "../controllers/bookcontroller.js"

const router = Router()
let imagename;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    imagename = Date.now() + "-" + 
    Math.round(Math.random() * 1e9)
    +"-"+file.originalname.trim();
    cb(null, imagename);
  },
});

const upload = multer({ storage })

//routes
const objbookcontroller =new bookcontroller()

router.post("/add",upload.single("image"), (req, res)=>{
  objbookcontroller.addbook(req, res, imagename)
})

router.get("/:id", objbookcontroller.getBookByID);

router.get("/", objbookcontroller.getbook)

router.put("/update/:id", objbookcontroller.updatebook)

router.delete("/delete/:id", objbookcontroller.deletebook)

router.get("/search/all", objbookcontroller.searchbook)

export default router