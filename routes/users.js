import express from 'express';
import {createUser,getUsers,getUser,deleteUser,Updateuser} from '../controllers/users.js';
const Router=express.Router();


// get user
Router.get('/users',getUsers)
// post user
Router.post('/users',createUser);

// get user with id
Router.get('/users/:id',getUser)

// delete user with id
Router.delete('/users/:id',deleteUser)

 // update user with id
Router.patch('/users/:id',Updateuser)
export default Router