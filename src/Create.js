import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('Hallo');
    
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form action="">
            <label>Blog title:</label>
            <input
               type="text"
               required
               value={title}
            />
            <label>Blog Body:</label>
            <textarea 
               required
            ></textarea>
            <label>Blog author:</label>
            <select>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default Create;