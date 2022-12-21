import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetalis = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handeClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
   
    return (  
        <div className="blog-detalis">
             {isPending && <div> Loding.....</div>}
             {error && <div> { error } </div>}
             { blog &&
              <article>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
              <div>{ blog.body }</div>
              <button onClick={handeClick}>Delete</button>
            </article>
             }
        </div>
    );
}
 
export default BlogDetalis;