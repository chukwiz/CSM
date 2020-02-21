const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const fs = require('fs');
const _ = require('lodash');
const sendMail = require('../mail')

// var {authenticate} = require('../middleware/authenticate');

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null,'./uploads/');
    },filename:function(req, file, cb){
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})
const upload = multer({storage:storage});
// const upload = multer({dest:'uploads/'});
const User = require("../models/User");
users.use(cors());

// process.env.SECRET_KEY = "secretssshy";

users.post('/register',upload.fields([{name:"documents", maxCount:1},{name:"photo", maxCount:1}]), (req, res) => {
    
    const files = req.files
    const body = req.body
    
    let documents = fs.readFileSync(files.documents[0].path)
    let photo = fs.readFileSync(files.photo[0].path)

    let encoded_image = photo.toString('base64')
    let encoded_documents = documents.toString('base64')

    let final_image = {
        contentType:req.files.photo[0].mimetype,
        path:req.files.photo[0].path,
        image:new Buffer(encoded_image, 'base64')
    }

    let final_document = {
        contentType:req.files.documents[0].mimetype,
        path:req.files.documents[0].path,
        image:new Buffer(encoded_documents, 'base64')
    }

    // yourSchema.findById(id, function (err, doc) {
    //     if (err)console.log(err);

    //     var base64 = doc.img.data.toString('base64');
    //     res.send('data:'+doc.img.contentType+';base64,' + base64);

    //   });

    let first_name = req.body.firstName;
    let email = req.body.email;
    const today = new Date();
    const userData = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        job:req.body.job,
        age:req.body.age,
        phone:req.body.phone,
        city:req.body.city,
        usInvestor:req.body.usInvestor,
        investorType:req.body.investorType,
        accredited:req.body.accredited,
        hearabout:req.body.hearabout,
        capital:req.body.capital,
        fundsType:req.body.fundsType,
        liketoKnow:req.body.liketoKnow,
        bitaddress:req.body.bitaddress,
        profileImage:final_image,
        userdocument:final_document,
        created:today
    }
    // console.log(userData)
    let user = new User(userData)
    user.save()
    .then(() => {
        
        return user.generateAuthToken();
        
    })
    .then((token) => {
        // sendMail(email, first_name, function(err, data){
        //     if(err){
        //         // console.log(err)
        //         res.status(500).json({message:'Internal Error'})
        //     }else{
        //         res.json({message:'email sent'})
        //     }
        // })
        // sendMail(email, first_name)
        res.header('x-auth', token).send(user)
    })
    .catch((err) => {
        res.status(400).send(err)
    })

    // User.findOne({
    //     email:req.body.email
    // })
    // .then(user => {
    //     if(!user){
    //         bcrypt.hash(req.body.password,10,(err,hash) => {
    //             userData.password = hash
    //             User.create(userData)
    //             .then(user => {
    //                 res.json({status:user.email + ' registered'})
    //             })
    //             .catch(err => {
    //                 res.send('error:' +err)
    //             })
    //         })
    //     }else{
    //         res.json({error:'User already exists'})
    //     }
    // })
    // .catch(err => {
    //     res.send('error:' + err)
    // })
})

let authenticate = (req, res, next) => {
    let token = req.header('x-auth');
    User.findByToken(token)
    .then((user) => {
        if(!user){
            return Promise.reject()
        }
        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        res.status(401).send({})
    })
}

users.get('/me',authenticate,(req, res) => {
    let body = _.pick(req.user, ['email','firstName','lastName', 'job','age','city','investorType','accredited','capital','fundsType','bitaddress','profileImage']);
    // console.log(body)
    res.send(body)
})

users.delete('/me/logout', authenticate, (req, res) => {
    req.user.removeToken(req.token)
    .then(() => {
        res.status(200).send()
    }, () => {
        res.status(400).send()
    }); 
})


// users.post('/login', (req, res) => {
//     User.findOne({
//         email:req.body.email
//     })
//     .then(user => {
//         if(user){
//             if(bcrypt.compareSync(req.body.password,user.password)){
//                 const payload = {
//                     _id:user.id,
//                     first_name:user.first_name,
//                     last_name:user.last_name,
//                     email:user.email
//                 }
//                 let token = jwt.sign(payload, process.env.SECRET_KEY,{
//                     expiresIn:3600
//                 })
//                 // res.send(token)
//                 res.send(user)
//             }else{
//                 res.json({error:'User does not exist'})
//             }
//         }else{
//             res.json({error:'User does not exist'})
//         }
//     })
//     .catch(err => {
//         res.send('error'+ err)
//     })
// })

users.post('/login', (req,res) => {
    let body = _.pick(req.body, ['email', 'password']);
    User.findByCredentials(body.email, body.password)
    .then((user) => {
       return user.generateAuthToken()
        .then((token) => {
            res.header('x-auth', token).send(user)
        })
    }).catch((e) => {
        res.status(400).send();
    })
})

users.post('/profile',(req, res) => {
    let decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    User.findOne({
        _id:decoded._id
    })
    .then(user => {
        if(user){
            res.json(user)
        }else{
            res.send('User does not exist')
        }
    })
    .catch(err => {
        res.send('error:' + err)
    })
})

module.exports = users;