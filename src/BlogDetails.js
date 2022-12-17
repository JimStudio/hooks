import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetalis = () => {
    const {id} = useParams();
    const {data, error, isPending} = useFetch('http://localhost:8000/blogs/');
    return (  
        <div className="blog-detalis">
            <h2>Blog Detalis - { id }</h2>
        </div>
    );
}
 
export default BlogDetalis;