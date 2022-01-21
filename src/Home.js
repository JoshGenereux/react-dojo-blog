import React from "react";
import {useState, useEffect} from "react";
import BlogList from "./BlogList";

function Home(){
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome to new blog', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'yoshi', id: 3},
        {title: 'Growing new hair', body: 'lorem ipsum...', author: 'Josh', id: 4},
        {title: 'Hey Hey girls!!', body: 'lorem ipsum...', author: 'Amber', id: 5},
        {title: 'Creating a custom website', body: 'lorem ipsum...', author: 'yoshi', id: 6},
        {title: 'HTML for beginners', body: 'lorem ipsum...', author: 'mario', id: 7},
        {title: 'Yo Yo', body: 'lorem ipsum...', author: 'Josh', id: 8},
        {title: 'Stupid dogs', body: 'lorem ipsum...', author: 'Amber', id: 9}
    ])

    const [name, setName] = useState('mario')

    useEffect(() => {
        console.log('use effect ran')
    })

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter((blog)=>{
            return blog.id !== id;
        })
        setBlogs(newBlogs);
    }

    return (
        <div className='home'>
            <BlogList blogs={blogs} title='All blogs' handleDelete={handleDelete}/>
        </div>
    )
}

export default Home;