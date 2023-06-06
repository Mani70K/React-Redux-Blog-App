import { mockData } from "../data/postData"
export const loadDataService=()=>{
    return mockData;
}
export const addDataService=(obj)=>{
    const temp={
        id:3,
        title:obj.title,
        category:obj.category,
        content:obj.content, //Id Should Be Auto Generated
        isLike:false //Initially Not Like
    }
    mockData.push(temp)
}

export const deleteDataService=(id)=>{
    const filterDatas=mockData.filter((data)=>data.id!==id)
    console.log("After Delete Filter",filterDatas)
    return filterDatas

}
export const getDataByIdService=(postId)=>{
    console.log("At Service Mock",mockData)
    const data=mockData.filter((res)=>res.id===postId)
    return data
}
export const changeLikeBtnByIdService=(postId)=>{
    // mockData.filter((data)=>data.id===postId)
}

export const editDataService=(id,title,category,content)=>{
    const d=mockData.filter((data)=>data.id!==id)
    const temp={
        id,
        title,
        category,
        content,
        isLike:d.isLike
    }
    
    mockData.push(temp)
}
