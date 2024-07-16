import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import '../App.css'; 

const Signup = () => {
    const [sing, setsing] = useState({
        user: "",
        email: "",
        pass: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const nav = useNavigate();

    const change = (e) => {
        const { name, value } = e.target;
        setsing({ ...sing, [name]: value });
    };

    const sub = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        fetch('http://localhost:3000/User', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sing)
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            nav("/login");
            // alert("Successfully signed up!");
            Swal.fire({
                title: "Successfully signed up!",
                text: "You clicked the button!",
                icon: "success"
              });
        })
        .catch(err => { 
            console.error("Error:", err);
            setError("Signup failed. Please try again.");
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
  <div className="box">
            <div className="form">
                <h2>Signup</h2>
                <form onSubmit={sub}>
                    <div className="inputBox">
                        <input 
                            type="text" 
                            name="user" 
                            required="required" 
                            onChange={change} 
                        />
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input 
                            type="email" 
                            name="email" 
                            required="required" 
                            onChange={change} 
                        />
                        <span>Email</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input 
                            type="password" 
                            name="pass" 
                            required="required" 
                            onChange={change} 
                        />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className="links">
                        <p>Forgot password?</p>
                        <span>Signup</span>
                    </div>
                    <button 
                        type="submit" 
                        className="btn border border-1 text-light" 
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            </div>
        </div>
        </div>
      
    );
};

export default Signup;
