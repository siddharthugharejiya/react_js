function TodoList({data,del,up}){
    return(
      <div>
        {
            <div className="r">
               <h2>{data.work}-{data.status ? "Completed" : "not Completed" }</h2>
               <div>

                <button className="btn btn-primary m-1" onClick={()=>up(data.id)}>Edit</button>
                <button className="btn btn-danger m-1" onClick={()=>del(data.id)}>Delete</button>
               </div>
            </div>

        }
    
      </div>
    )
}
export default TodoList