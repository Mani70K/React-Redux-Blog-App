function LoadAllDataPage(props) {
    const records=props.allData
    console.log("Recors Loading",records)
    return ( 
        <>
        <div style={{"textAlign":"center"}}><b>All Data Shown Below</b></div>
        
        <br />
        {console.log("Returning List",records)}
        {records.map((record)=>{
        const add="/post/"+record.id
         return <div
         style={{
           border: "2px solid",
           width: "400px",
           marginLeft: "450px",
           height: "40px",
           textAlign:"center",
           marginTop:"2px"
         }}
       >
         <a href={add} style={{textDecoration:"None"}}>{record.title}</a>
         <br />
       </div>;
        })}
        </>
     );
}

export default LoadAllDataPage;