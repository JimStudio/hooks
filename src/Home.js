import { useState, useEffect} from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setblogs] = useState(null);
    const [isPadding, setpadding] = useState(true);
    const [error, serError] = useState(null);
   

    useEffect(() => {
      setTimeout(() => {
        fetch('http://localhost:8000/blogs')
      .then(res =>{
        if(!res.ok){
          throw Error('could not fetch the data for that rsource');
        }
        return res.json();
      })
      .then(data => {
        setblogs(data);
        setpadding(false);
        serError(null);
      })
      .catch(err => {
        setpadding(false);
        serError(err.message);
      })
      }, 1000);
    },[]);
    return (
      <div className="home">
        {error && <div> { error } </div>}
        {isPadding && <div>Lodding....</div>}
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