let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let jwt = require('jsonwebtoken');
let _ = require('lodash');
const bcrypt = require('bcryptjs');

process.env.SECRET_KEY = "secretssshy";


let UserSchema = new Schema({
    firstName:{
        type:String,
        // required:true
    },
    lastName:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true,
    },
    profileImage:{
        image: Buffer, contentType: String,path:String
    },
    userdocument:{
        type:Object
    },
    password:{
        type:String,
        // required:true
    },
    job:{
        type:String,
    },
    age:{
        type:String,
    },
    city:{
        type:String,
    },
    usInvestor:{
        type:String,
    },
    investorType:{
        type:String,
    },
    accredited:{
        type:String,
    },
    hearabout:{
        type:String,
    },
    capital:{
        type:String,
    },
    fundsType:{
        type:String,
    },
    liketoKnow:{
        type:String,
    },
    bitaddress:{
        type:String,
    },
    photo:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    },
    tokens:[{
        access:{
            type:String,
            required:true
        },
        token:{
            type:String,
            required:true
        }
    }],
    admin:Boolean
})

UserSchema.methods.toJSON = function (){
    let user = this;
    let userObject = user.toObject();

    return _.pick(userObject,['_id','email']);
}

UserSchema.methods.generateAuthToken = function(){
    let user = this;
    let access = 'auth';
    let token = jwt.sign({_id:user._id.toHexString(), access},process.env.SECRET_KEY).toString();

    user.tokens = user.tokens.concat([{access, token}]);
    return user.save()
    .then(() => {
        return token;
    })
};

UserSchema.methods.removeToken = function(token){
    let user = this;
    return user.update({
        $pull : {
            tokens:{token}
        }
    })
}

UserSchema.statics.findByToken = function(token){
    let User = this;
    let decoded;

    try{
        decoded = jwt.verify(token, process.env.SECRET_KEY)
    } catch (e){
        return new Promise((resolve, reject) => {
            reject();
        });
    }
    return User.findOne({
        '_id':decoded._id,
        'tokens.token':token,
        'tokens.access':'auth'
    })
}

UserSchema.statics.findByCredentials = function(email,password){
    let User = this;
    return User.findOne({email}).then((user) => {
        if(!user){
            return Promise.reject();
        }
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                if(res){
                    resolve(user)
                }else{
                    reject()
                }
            })                                    
        })
    })
}

UserSchema.pre('save',function(next){
    let user = this;
    if(user.isModified('password')){
        bcrypt.genSalt(10,(err, salt ) => {
            bcrypt.hash(user.password, salt, (err,hash) => {
                user.password = hash;
                next();
            })
        });
    }else{
        next();
    }
})

let User = mongoose.model('User',UserSchema);
module.exports = User;