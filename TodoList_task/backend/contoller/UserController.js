const UserModel = require("../Model/UserSchema");
const bcrypt = require('bcrypt')

const register = async(req,res) =>{
    try {
        const {username , email , password } = req.body
        // console.log(req.body);


        const hash = await bcrypt.hash(password,10)
        // console.log(hash);

        const data = await UserModel.create({
          ...req.body,
          password : hash
        })
        // console.log(data);
        
        res.send({msg : "User Aded"})
        
    } catch (error) {
        res.send({msg : error.massage})
    }  
}
const Login = async(req,res) =>{
     const {email , password} = req.body
     const data = await UserModel.findOne({email : email})
     if(!data)
     {
      return res.send({data : "User Not register"})
     }
     console.log(data);
     
  let matching_pass = await bcrypt.compare(password,data.password)
  console.log(matching_pass);
  if(!matching_pass)
  {
   return res.send({miss : "User password not matched"})
  }
  if(matching_pass)
  {
    return res.send({data : "User Loggin Successfully"})
  }
  
}
module.exports = {register , Login}