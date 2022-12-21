import { Link } from "react-router-dom";

const MotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That Page Cannot Be Found</p>
            <Link to="/">Back to The Home Page.....</Link>
        </div>
     );
}
 
export default MotFound;