import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDataById } from "../redux/actions/postAction";
function EditPostPage() {
    const {postId}=useParams()
    const id=Number(postId)
    const dispatch=useDispatch()  
    const navigate=useNavigate()
    const result=dispatch(getDataById(id))
    const res=result.payload.map((d)=> d)
    const tempTitle=res[0].title
    const tempCategory=res[0].category
    const tempContent=res[0].content

    const [title, setTitle] = useState(tempTitle);
    const [category, setCategory] = useState(tempCategory);
    const [content, setContent] = useState(tempContent);
    const handleUpdate=()=>{
        alert("Calling Update Button")
    }
    
    return ( 
      <div>
          <div
            className="m-1 p-1 pl-4"
            style={{ backgroundColor:"bisque", height: "40px" }}
          >
            <Link to="/">
              back to index
            </Link>
          </div>
          <ToastContainer/>
          <div className="container" style={{ marginTop: "30px", "backgroundColor":"#cafcfb" }}>
  
  
            <form onSubmit={handleUpdate}>
              <div className="form-group" style={{"paddingTop":"15px"}}>
                <b htmlFor="exampleInputEmail1">Title</b>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={title}
                  placeholder="Enter Title"
                  onChange={({target})=>setTitle(target.value)}
                />
              </div>
              <div className="form-group">
                <b htmlFor="exampleInputPassword1">Categories</b>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={category}
                  placeholder="Enter Category"
                  onChange={({target})=>setCategory(target.value)}
                />
              </div>
              <div className="form-group">
                <b htmlFor="exampleFormControlTextarea1">Content</b>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="4"
                  value={content}
                  placeholder="Enter Content"
                  onChange={({target})=>setContent(target.value)}
                ></textarea>
              </div>
  
              <button type="submit" className="btn btn-warning">
                Update
              </button>
            </form>
          </div>
        </div>
)}

export default EditPostPage;