import { log } from "console"

export default ( req, res, next) =>{
    const token = req.headers.token
    if(token && token == 'abc'){
        console.log('validated')
        next()
    }else{
        console.log('not validated')
    }
}