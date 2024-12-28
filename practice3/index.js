import express from "express"
import booksRouter from './Routes/books.route.js'
import validatetoken from './Tokenvalidate/validate.js'
import  rateLimit  from "express-rate-limit";

const app = express();


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});

// Apply the rate limiting middleware to all requests.
app.use(limiter);


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("images"))


// app.use((req,res,next)=>{
//    validatetoken(req, res , next)
// })

app.get('/', (req,res) => {

    res.status(200).send('running')
    
})

app.use('/books', booksRouter)

app.post('/addbooks', (req,res)=>{
    res.status(200).send("book added")
})

app.listen(8000, ()=>{
    console.log('running');
    
})

