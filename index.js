import express from 'express'; 
import bodyParser from 'body-parser'; 
import send from 'send';
import usersRoute from './Routes/blogs.js'


const app = express(); 
const PORT = process.env.PORT || 8000; 

app.use(bodyParser.json()); 
app.get('/', (req, res)=>{
    res.send("Hello from Home Page");
})

app.use('/blogs', usersRoute)

app.listen(PORT, ()=>console.log(`Server running on port: http://localhost:${PORT}`)); 