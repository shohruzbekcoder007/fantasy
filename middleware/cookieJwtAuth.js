const jwt = require('jsonwebtoken')
const config = require('config')

const cookieJwtAuth = (req, res, next) => {

    const token = req.cookies.token

    try{
        const user = jwt.verify(token, config.get('jwtPrivateKey'))
        req.user = user;
        next()
    }catch(ex){
        res.clearCookie("token")
        return res.render('login', {

        });
    }
    
}

module.exports.cookieJwtAuth = cookieJwtAuth