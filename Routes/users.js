import express from 'express'; 
import {v4 as uuidv4} from 'uuid';
const router = express.Router(); 
let users=[
    // {
    //     "firstName":"God",
    //     "lastName":"Yuvi",
    //     "age":99999999999
    // },
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

export default router; 