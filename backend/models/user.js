var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var userSchema = mongoose.Schema({
    contact: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true,
        unique: true
    },
    name : {
        type : String,
        required : true
    },
    password : {
        type: String,
        required : true,
    },
    role: {
       type : String,
    },
    blocked : {
        type : Boolean,
        default: false
    }
},
{ timestamp: true }
);
userSchema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
};

userSchema.methods.isValid = function(hashPassword) {
    return bcrypt.compareSync(hashPassword, this.password);
}

module.exports = mongoose.model('user',userSchema);