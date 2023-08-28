 import{v4 as uuidv4} from 'uuid';
 let users=[{
    name: "jhon",
    lastName: "Doe",
    age: 30
},{
    name: "jane",
    lastName: "Doe",
    age: 24  
}]

 export const createUser=(req,res)=>{
   const user=(req.body)
    users.push({...user,id:uuidv4()});
    res.send(`user with name ${user.name} added`);
    console.log(users)
}

export const getUsers=(req,res)=>{
    res.send('Hello World');
    console.log(users)
}
 
export const getUser=(req,res)=>{
    const {id}=req.params;
   const foundUser = users.find((users)=>{
    return users.id===id}); 
     res.send(foundUser)
}

export const deleteUser=(req,res)=>{
     const {id}=req.params;
     users=users.filter((user)=>{
         return user.id!==id
    
     })
      res.send(`user with id ${id} deleted`);
}

export const Updateuser=(req,res)=>{
    const {id}=req.params;
    const {name,lastName,age}=req.body
    
    const userTobeUpdated=users.find((user)=>{
        user.id===id
    })
    if (name)users.name= name ;
    
     if (lastName) users.lastName= lastName ;
     
     if (age)  users.age= age ; 
     res.send(`user with id ${id} updated`);
}