 const fetching_data_from_api=(dispath)=>{
    dispath({type:"loading"})
    fetch(`https://fakestoreapi.com/products`)
    .then(res=>res.json())
    .then(res=>{
        dispath({type:"data",payload:res})

    })
    .catch((error)=>{
        dispath({type:"erro"})
    })  
}

export default fetching_data_from_api