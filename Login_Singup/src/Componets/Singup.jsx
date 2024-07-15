import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [sing, setsing] = useState({
        user: "",
        email: "",
        pass: ""
    });
    const nav = useNavigate();

    const change = (e) => {
        const { name, value } = e.target;
        setsing({ ...sing, [name]: value });
    };

    const sub = (e) => {
        e.preventDefault();
        useEffect(()=>{
            fetch('http://localhost:3000/User', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sing)
            
            })
            .then(res => res.json())
            .then(res => {
                nav("/login");
                alert("successfully")
               
            })
            .catch(err => {
                console.error("Error:", err);
            });
        },[])
       
    };

    return (
        <>
            <form onSubmit={sub}>
                <input type="text" name="user" placeholder="Username" onChange={change} />
                <input type="email" name="email" placeholder="Email" onChange={change} />
                <input type="password" name="pass" placeholder="Password" onChange={change} />
                <input type="submit" value="Submit" className="btn border border-1" />
            </form>
        </>
    );
};

export default Signup;
