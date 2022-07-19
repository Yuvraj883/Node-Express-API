import express from 'express'; 
import {v4 as uuidv4} from 'uuid';
const router = express.Router(); 
let users=[
    {
        "firstName":"God",
        "lastName":"Yuvi",
        "age":99999999999,
        "id":"1"
    }
    // { 
    //  "firstName":"Aami",
    // "lastName":"KKR",
    // "age":7

    // }
]
; 

router.get('/', (req, res)=>{
    res.send(users); 
    // console.log(uuidv4())
})

router.post('/', (req, res)=>{
    const user = req.body; 
    let userId=uuidv4();
    const userWithId = {...user, id:userId}; 
    users.push(userWithId); 
    console.log(user);
     res.send(`User with the name ${req.body.firstName} has been registered to the database`);
    //console.log("Posted successfully!", req.body); 
    // res.send("Posted Successfully!");
})


router.get('/:id',(req, res)=>{
    // res.send("Get request with UserId")
    const { id }= req.params;
    const foundUser = users.find((user) => user.id ===id); 
    if(foundUser) res.send(foundUser); 
    else res.send("User not found"); 
    console.log(foundUser);
})

router.delete('/:id', (req, res)=>{
    const { id } = req.params; 
    users = users.filter((user)=>user.id !== id); 
    res.send(`User with the id of ${id} has been deleted from the database.`)
})

router.patch('/:id', (req, res)=>{
    const {id}= req.params; 
    const { firstName, lastName, age } = req.body;
    let user = users.find((user)=>user.id===id); 
    if(firstName) user.firstName = firstName; 
    if(lastName) user.lastName = lastName; 
    if(age) user.age = age; 

    //users.push(user); 
    res.send(`User with the id of ${id} has been updated`); 
})


export default router; 