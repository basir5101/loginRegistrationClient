import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';

const Login = () => {

    const history = useHistory()
    const [user, setUser] = useState({
        email:'',
        password: '',
    })
    const handleChange = (e) =>{
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
        console.log(user)
    }

    const handleSubmit = (e) =>{
        fetch('https://infinite-beach-29063.herokuapp.com/user/login',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(result => {
            if(result.token){
                history.replace('/welcome')
            }
        })
        .catch(error => console.log(error))

        e.preventDefault();
    }

    return (
        <div>
            <form>
                <input onChange = {handleChange} placeholder = 'email' name="email" className = 'form-control mb-2'/>
                <input onChange = {handleChange} placeholder = 'password' name="password" className = 'form-control' />
                
                <button onClick = {handleSubmit} className = 'form-control btn btn-success mt-3' type="submit">Submit</button>
            </form>
            <Link to = '/user/signup'>
                <p>Already Have an account ? </p>
            </Link>
        </div>
    );
};

export default Login;