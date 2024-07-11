import "./App.css"
function Sign(){
    
    return(
        <div>
          <div className="sign">
            <div className="sign-main">
                <div className="sign-head">
                    <h1>Sign In</h1>
                </div>
                <div className="sign-body">
                    <input type="text"  placeholder="Username" id="ii"/> <br />
                    <input type="text"  placeholder="Password" id="ii"/>
                    <p>Forgot Username / Password?</p>
                    <button id="btn1">SIGN IN</button>
                </div>
            </div>
          </div>
        </div>

    )
}
export default Sign