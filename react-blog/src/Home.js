import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title:"Hello World!", body:"Blah...blah...blah...", author: "Batman", id: 1},
    { title:"Happy New Year 2021!", body:"Blah...blah...blah...", author: "Wonder Woman", id: 2},
    { title:"React Blogs are the Best!", body:"Blah...blah...blah...", author: "Superman", id: 3}
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs)
  }

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
    </div>
  );
}
 
export default Home;