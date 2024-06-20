function Todoout({data,del,up}){
return(
    <div>         
        <h1>{data.work}{data.status ? "Completed " : "Not Completed"}</h1>
        <button className="btn btn-primary"onClick={()=>up(data.id)} >Edit</button>
        <button className="btn btn-danger" onClick={()=>del(data.id)}>Delete</button>
      
    </div>
)
}
export default Todoout