import express from 'express'; 
import {createUser, getUsers, deleteUser, updateUser, getUserWithId} from '../Controllers/users.js'
const router = express.Router(); 

 

router.get('/',getUsers)

router.post('/',createUser)


router.get('/:id',getUserWithId)

router.delete('/:id',deleteUser)

router.patch('/:id',updateUser)


export default router; 