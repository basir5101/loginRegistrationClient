import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const SignUp = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        username: '',
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
        fetch('https://infinite-beach-29063.herokuapp.com/vendor/signup',{
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
                <input onChange = {handleChange} placeholder = 'phone' name="phone" className = 'form-control mb-2'/>
                <input onChange = {handleChange} placeholder = 'username' name="username" className = 'form-control mb-2'/>
                <input onChange = {handleChange} placeholder = 'email' name="email" className = 'form-control mb-2'/>
                <input onChange = {handleChange} placeholder = 'password' name="password" className = 'form-control' />
                
                <button onClick = {handleSubmit} className = 'form-control btn btn-success mt-3' type="submit">Submit</button>
            </form>
            <Link to = '/vendor/logIn'>
                <button className = 'text-white btn' > Already Have An Account  </button>
            </Link>
        </div>
    );
};

export default SignUp;