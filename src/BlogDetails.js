import { useParams } from "react-router-dom";

const BlogDetalis = () => {
    const {id} = useParams();
    return (  
        <div className="blog-detalis">
            <h2>Blog Detalis - { id }</h2>
        </div>
    );
}
 
export default BlogDetalis;