const jwt=require("jsonwebtoken")
const IsAuth = (req, res, next) => {
    let cookie = req.cookies
    if (cookie.token) {
        let decoded = jwt.verify(cookie.token, 'the');
        console.log(decoded);
        next()
    }
    else{
        res.send("you are not authorize")
    }
}
module.exports=IsAuth