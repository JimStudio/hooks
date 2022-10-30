import { useState } from "react";

const Home = () => {

  //let name = 'mario';
  const [name, setName] = useState('mario');
  const [age, setage] = useState(25);

  const handleClick = () => {
    setName('lugi');
    setage(30);
  }

      
    return (
      <div className="home">
         <h2>Home Page</h2>
         <p> { name } is { age } years old</p>
         <button onClick={handleClick}>Click Me</button>
      </div>
    );
}
 
export default Home;