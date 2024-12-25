const UserModel = require("../Model/UserSchema");
const bcrypt = require('bcrypt')

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body
    console.log(req.body);
    

    const hash = await bcrypt.hash(password, 10)


    const data = await UserModel.create({
      ...req.body,
      password: hash
    })


    res.send({ data : data })

  } catch (error) {
    res.send({ msg: error.massage })
  }
}
const Login = async (req, res) => {
  const { email, password } = req.body
  const data = await UserModel.findOne({ email: email })
  if (!data) {
    return res.send({ miss: "User Not register" })
  }
  const matching_pass = await bcrypt.compare(password, data.password)
  console.log("Password Match:", matching_pass)
  if (!matching_pass)
     {
    return res.send({ password : "Invalid Password" })
  }
  if (matching_pass) {
    return res.send({ data : "User Loggin Successfully" })
  }

}
module.exports = { register, Login }