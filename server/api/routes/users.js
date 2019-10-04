const User = require('../../model/user')
const cors = require('cors')
//clear cors middleware in routes for uploading on the server
module.exports = function (router){

    router.get('/user/:email',function(req,res){
        User.find({'email':req.param.email}).exec()
        .then(docs => res.status(200).json(docs))
        .catch(err=>res.status(500).json({
            message:'ok is not defined',
            error: err
        }))
    })
    router.post('/user',function(req,res){
        let user = new User(req.body)
        console.log(req.body);
        user.save(function(err,user){
            if(err) {
                res.sendStatus(400)
                console.log(`this is the err : ${err}`)}
            else res.status(200).json(user)
        })
    })
}

