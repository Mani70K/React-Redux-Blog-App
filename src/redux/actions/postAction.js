import { addDataService,loadDataService,deleteDataService,getDataByIdService,changeLikeBtnByIdService,editDataService } from "../../services/postService"
export const LOAD_DATA="LOAD_DATA"
export const ADD_DATA="ADD_DATA"
export const DELETE_DATA="DELETE_DATA"
export const SINGLE_DATA="SINGLE_DATA"
export const EDIT_DATA="EDIT_DATA"
export const CHANGE_LIKE="CHANGE_LIKE"


export const loadData=()=>{
    const allData=loadDataService()
    return{
        type:LOAD_DATA,
        payload:allData
    }
}
export const addData=(obj)=>{
    addDataService(obj)
    return{
        type:ADD_DATA,
    }
}
export const getDataById=(id)=>{
    const data=getDataByIdService(id)
    console.log("At Action",data)
    return{
        type:SINGLE_DATA,
        payload:data
    }
}


export const deleteData=(id)=>{
    const records=deleteDataService(id)
    return{
        type:DELETE_DATA,
        payload:records
    }
}
export const changeLikeBtn=(id)=>{
    changeLikeBtnByIdService(id)
    return{
        type:CHANGE_LIKE,
    }
}
export const editData=(id,title,category,content)=>{
    editDataService(id)
    return{
        type:EDIT_DATA,
    }
}