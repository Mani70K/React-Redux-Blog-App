import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addData } from "../redux/actions/postAction";

function AddPostPage() {
    const dispatch=useDispatch()  
    const navigate=useNavigate()
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");

    const canSubmit=[title.trim(),category.trim(),content.trim()].every(Boolean)


    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addData({title,category,content}))
        setTitle("")
        setContent("")
        setCategory("")
        navigate("/")
        toast.success("Data Added Successfully")
      
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
  
  
            <form onSubmit={handleSubmit}>
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
  
              <button type="submit" className="btn btn-primary" disabled={!canSubmit}>
                Submit
              </button>
              <Link className="btn btn-danger m-3" to="/">
              Cancel
            </Link>
            </form>
          </div>
        </div>
)}

export default AddPostPage;