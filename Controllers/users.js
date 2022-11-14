import {v4 as uuidv4} from 'uuid';
let blogs=[
    {
      "title":"Maharaja Surajmal Institute of Technology",
      "body": "Maharaja Surajmal is ranked India's 3rd best private Engineering cllg, only behind IIIT Hyderabad and BITS PILANI, it is situated in New Delhi.",
      "writter": "Yuvraj Singh",
      "id":"1"
    },
    {
        "title": "Skyware Automations",
        "body":"Lorem lipsum lorem lipsum lorem lipsum lorem lipsum",
        "writter": "Kanishq Singh Vishwa",
        "id":"2"

    }
    // { 
    //  "firstName":"Aami",
    // "lastName":"KKR",
    // "age":7

    // }
];
export const createUser =  (req, res)=>{
    const user = req.body; 
    let userId=uuidv4();
    const userWithId = {...user, id:userId}; 
    users.push(userWithId); 
    console.log(user);
     res.send(`User with the name ${req.body.firstName} has been registered to the database`);
    //console.log("Posted successfully!", req.body); 
    // res.send("Posted Successfully!");
}

export const getUsers = (req, res)=>{
    res.set('Access-Control-Allow-Origin','*');
    res.send(users); 
    // console.log(uuidv4())
}

export const deleteUser =  (req, res)=>{
    const { id } = req.params; 
    const user = users.find((user)=>user.id===id); 
    if(user){
   users = users.filter((user)=>user.id !== id);
    res.send(`User with the id of ${id} has been deleted from the database.`)

    }
    else{
        res.send(`User with the id ${id} not found` )
    }
}

export const updateUser =  (req, res)=>{
    const {id}= req.params; 
    const { firstName, lastName, age } = req.body;
    let user = users.find((user)=>user.id===id); 
   if(user){
    if(firstName) user.firstName = firstName; 
    if(lastName) user.lastName = lastName; 
    if(age) user.age = age; 

    //users.push(user); 
    res.send(`User with the id of ${id} has been updated`); 
   }
    else{
        res.send(`User with the id ${id} not found` ); 
    }
}

export const getUserWithId = (req, res)=>{
    // res.send("Get request with UserId")
    const { id }= req.params;
    const foundUser = users.find((user) => user.id ===id); 
    if(foundUser) res.send(foundUser); 
    else res.send(`User with the  id ${id} not found`); 
    console.log(foundUser);
}