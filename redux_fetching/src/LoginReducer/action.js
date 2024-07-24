export const LoginData=(dispath,obj)=>{
 fetch(`https://jsonplaceholder.typicode.com/users?email=${obj.email}`)
 .then(res=>res.json())
 .then(res=>{
    if(res[0].username==obj.username)
    {
        dispath({type:"Login",payload:red})

    }
    else{
        dispath({type:"wrongpass"})
    }
 })
}