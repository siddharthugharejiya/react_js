
import "./App.css";
function Login(){
    return(
        <div>
            <div className="main">
                <div className="login">
                    <h1 style={{margin:"10px"}}>Login</h1>
                    <label htmlFor="">Email</label> <br />
                    <input type="text" placeholder="Please Enter Your E-mail" id="i"/> <br />

                    <label htmlFor="">Password</label> <br /> 
                    <input type="text" placeholder="Please Enter Your Password" id="i"/>
                    <br />
                    <br />
                    <button id="btn">LOGIN</button>
                </div>
            </div>
        </div>
    );

}
export default Login