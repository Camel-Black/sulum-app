const User = require('../../model/user')
const cors = require('cors')
const bcrypt = require('bcryptjs')
//clear cors middleware in routes for uploading on the server
module.exports = function (router){
    router.post('/login',(req,res,next) =>{
        const {userName , mobileNumber , password } = req.body
       
        console.log(req.body)
    })
    router.post('/register',(req,res,next)=>{
        const {userName , mobileNumber , password , password2 } = req.body
        User.findOne({mobileNumber : mobileNumber})
        .then(user =>{
            if(user){
                res.status(409) //conflict;user exists
            } else {
                var newUser = new User({
                    userName,
                    mobileNumber,
                    password,
                })
                //hash pass
                bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(newUser.password,salt,(err,hash)=>{
                        if(err){
                            throw err
                        }

                        newUser.password = hash
                        newUser.save()
                        .then(user =>{
                            res.status(200)
                        })
                        .catch(err=> console.log(err))
                    })
                })
            }
        })
    })
}

