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
export const createBlog =  (req, res)=>{
    // res.setHeader('Access-Control-Allow-Origin','*');
    console.log("Posted successfully!", req); 

    const blog = req.body; 
    let blogId=uuidv4();
    const blogWithId = {...blog, id:blogId}; 
    blogs.push(blogWithId); 
    console.log(blog);
     res.send(`A new blog entry ${req.body.title} has been saved to database.`);
    //  res.send("Posted Successfully!");
}

export const getBlogs = (req, res)=>{
    // res.setHeader('Access-Control-Allow-Origin','*');
    res.send(JSON.stringify(blogs)); 
    // console.log(uuidv4())
}

export const deleteBlog =  (req, res)=>{
    const { id } = req.params; 
    const blog= blogs.find((blog)=>blog.id===id); 
    if(blog){
   blogs = blogs.filter((blog)=>blog.id !== id);
    res.send(`User with the id of ${id} has been deleted from the database.`)

    }
    else{
        res.send(`User with the id ${id} not found` )
    }
}

export const updateBlog=  (req, res)=>{
    const {id}= req.params; 
    const { title, body, writter } = req.body;
    let blog = blogs.find((blog)=>blog.id===id); 
   if(blog){
    if(title) blog.title = title; 
    if(lastName) blog.body = body; 
    if(age) blog.writter = writter; 

    //users.push(user); 
    res.send(`User with the id of ${id} has been updated`); 
   }
    else{
        res.send(`User with the id ${id} not found` ); 
    }
}

export const getBlogWithId = (req, res)=>{
    // res.send("Get request with UserId")
    const { id }= req.params;
    const foundBlog = blogs.find((blog) => blog.id ===id); 
    if(foundBlog) res.send(foundBlog); 
    else res.send(`User with the  id ${id} not found`); 
    console.log(foundBlog);
}