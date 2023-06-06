import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadData } from "../redux/actions/postAction";
import ErrorPage from "./Error404Page";
import LoadAllDataPage from "./LoadAllData";
import NoDataFound from "./NoDataFoundPage";

function PostList() {
  const dispatch=useDispatch()
  const records=useSelector((state)=>state.datas)
  const size=Object.keys(records).length
  const errorOccured=false
  useEffect(()=>{
    dispatch(loadData())
  })
    return ( 
      !errorOccured?
        <>
        <div
          className="m-1 p-1 pr-3"
          style={{ backgroundColor:"bisque", height: "40px",textAlign:"end" }}
        >
          <a className="btn btn-primary btn-sm" href="/post">
            New Post
          </a>
        </div>

        {/* Check Any Data Present Or Not */}
        {size?
        <LoadAllDataPage key="unique" allData={records}/>
        : <NoDataFound/>
        }
        </>
        :<ErrorPage/>
     );
}

export default PostList;