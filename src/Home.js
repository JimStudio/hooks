import { useState, useEffect} from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
   
    return (
      <div className="home">
        {error && <div> { error } </div>}
        {isPending && <div>Lodding....</div>}
         {blogs && <Bloglist blogs={blogs} title="All Blogs!"/> }
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