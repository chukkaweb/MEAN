
var User = require('../models/user');
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();

exports.register = async (req, res) => {
    var user = new User({
        contact: req.body.phone,
        email: req.body.email,
        name: req.body.name,
        role: "user",
        password: User.hashPassword(req.body.p1),
    });
    User.find({ email: req.body.email }, (err, users) => {

        if(err) {
            console.log("error in finding email ");
            res.json({ msg: "some error!" });
        }
        if(users && users.length != 0) {
            console.log("already user with this email");
            res.json({ msg: "already user exist with this email!" });
        }
        else {
            user.save((error, registeredUser) => {
                if (error) {
                    console.log("some error");
                    res.json({ msg: "some error!" });
                }
                else {
                    console.log("successfully user registered!");
                    res.status(200).json({ message: "successfully user registered!" })
                }
            })
        }
    })
}

exports.login = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
    if(err) {
        console.log(err);
        res.json({msg:'something went wrong login failed'});
    } 
    else {
        if(!user) {
           req.json({msg:'Invalid email'})
        }
        else {
          bcrypt.hashPassword(req.body.p, user.password).then(match=>{
            if(match) {
                let payload = {subject:user._id,email:user.email};
                let token = jwt.sign(payload,process.env.SECRETKEY,{
                    expiresIn:"24h"
                });
                res.status(200).json({token:token,role:user.role,blocked:user.blocked});
            }
            else {
                res.json({msg:'Incorrect password'});
            }
          }).catch(err=>{
            res.json({ msg: 'Something went wrong' })
          })
        }
    }
});
}
