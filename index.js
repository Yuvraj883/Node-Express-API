import express from 'express'; 
import bodyParser from 'body-parser'; 
import send from 'send';
import usersRoute from './Routes/users.js'


const app = express(); 
const PORT = 8000; 

app.use(bodyParser.json()); 
app.get('/', (req, res)=>{
    res.send("Hello from Home Page");
})

app.use('/users', usersRoute)

app.listen(PORT, ()=>console.log(`Server running on port: http://localhost:${PORT}`)); 