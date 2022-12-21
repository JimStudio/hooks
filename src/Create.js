import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuhor] = useState('mario');
    const [isPending, setisPending] = useState(false);
    const history = useHistory();
    
    const handleSumbit =  (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setisPending(true);

        fetch('http://localhost:8000/blogs', {
            method : 'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(blog),

        }).then(() => {
            console.log('new blog');
            setisPending(false);
            history.push('/');
        });
        
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSumbit}>
            <label>Blog title:</label>
            <input
               type="text"
               required
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
            <label>Blog Body:</label>
            <textarea 
               required
               value={body}
               onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog author:</label>
            <select
               value={author}
               onChange={(e) => setAuhor(e.target.value)}           
            >
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            {!isPending && <button>Add Blog</button>}
            {isPending && <button disabled>Addinf blog....</button>}
            </form>
        </div>
    );
}
 
export default Create;