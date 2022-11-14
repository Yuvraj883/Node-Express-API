import express from 'express'; 
import {createBlog, getBlogs, deleteBlog, updateBlog, getBlogWithId} from '../Controllers/blogs.js'
const router = express.Router(); 

 

router.get('/',getBlogs)

router.post('/',createBlog)


router.get('/:id',getBlogWithId)

router.delete('/:id',deleteBlog)

router.patch('/:id',updateBlog)


export default router; 