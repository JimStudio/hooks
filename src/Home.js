import { useState, useEffect} from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setblogs] = useState([
      { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
      { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete =(id) =>{
        const newBlogs = blogs.filter(blog => blog.id != id);
        setblogs(newBlogs);
    }

    useEffect(() => {
      
    });
    return (
      <div className="home">
         <Bloglist blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
        {/* // <Bloglist blogs={blogs.filter((blog) => blog.author === "mario" )} title="Mario's blos"/> */}
      </div>
    );
    
}
 
export default Home;

  //let name = 'mario';
  // const [name, setName] = useState('mario');
  // const [age, setage] = useState(25);
  // const handleClick = () => {
  //   setName('lugi');
  //   setage(30);
  // }
{/* <p> { name } is { age } years old</p>
         <button onClick={handleClick}>Click Me</button> */}