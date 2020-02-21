import React from 'react';
import axios from 'axios';

export const register = (newUser) => {
    return axios
    .post('users/register',newUser
    // {
    //     first_name:newUser.first_name,
    //     last_name:newUser.last_name,
    //     email:newUser.email,
    //     password:newUser.password,
    //     job:newUser.job,
    //     age:newUser.age,
    //     phone:newUser.phone,
    //     city:newUser.city,
    //     usInvestor:newUser.usInvestor,
    //     investorType:newUser.investorType,
    //     accredited:newUser.accredited,
    //     hearabout:newUser.hearabout,
    //     capital:newUser.capital,
    //     fundsType:newUser.fundsType,
    //     liketoKnow:newUser.liketoKnow,
    //     bitaddress:newUser.bitaddress,
    //     photo:newUser.photo,
    //     documents:newUser.documents,
    // }
    )
    .then(res=> {
        console.log(newUser)
    })
}

export const login = (user) => {
    return axios
    .post('users/login',{
        email:user.email,
        password:user.password
    })
    .then(res => {
        // localStorage.setItem('usertoken',res.data)
        // console.log(res.data);
        // console.log(res.headers)
        return res
    })
    .catch(err => {
        console.log(err)
    })

}
export const profile = (token) => {
    return axios.get('/users/me',{headers:{"x-auth":token}})
    .then((res) => {
        return res.data
        // console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

export const logout = (token) => {
    return axios.delete('/users/me/logout',{headers:{"x-auth":token}})
    .then(res => {
        console.log('deleted')
    })
    .catch(err => {
        console.log('not deleted')
    })
}
