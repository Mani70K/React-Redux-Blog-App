import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteData, getDataById,editData } from "../redux/actions/postAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SinglePostPage() {
    const {postId}=useParams()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const id=Number(postId)
    const result=dispatch(getDataById(id))
    console.log("Single Page Result",result)
    const res=result.payload.map((d)=>d)
    let isLike=res[0].isLike
    let [likeBtnColor,setLikeColor]=useState(isLike?"#3a58e8":"yellow")
    
    useEffect(()=>{

    })
    return ( 
        <>
        <ToastContainer/>
        <div
          className="m-1 p-1 pl-4"
          style={{ backgroundColor: "bisque", height: "40px" }}
        >
          <a href="/">back to index</a>
          <button
          className="btn btn-sm"
          style={{"marginLeft":"920px","backgroundColor":likeBtnColor}}
          onClick={() => {
            isLike=isLike?false:true
            setLikeColor(isLike?"#3a58e8":"yellow")
            dispatch(editData(id))
          }}
          
        >
          Like
        </button>
        <button
          className="btn btn-sm btn-info ml-2"

          onClick={() => {
            const nextLoc="/post/edit/"+id
            navigate(nextLoc)
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-danger ml-2"
          onClick={() => {
           dispatch(deleteData(Number(postId)))
            navigate("/")
          }}
        >
          Delete
        </button>
        </div>
        <div>
            {result.payload.map((res)=>
            <>
            <div >
            <div><h3>{res.title}</h3></div> 
            
            <div><h5>{res.category}</h5></div> 
            <br /><br />
            {isLike=res.isLike}
            <div><b>{res.content}</b></div> 
            </div>
            </>
            )}
        </div>
        </>
     );
}

export default SinglePostPage;