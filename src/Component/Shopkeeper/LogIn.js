import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const LogIn = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        phone:'',
        password: '',
    })
    const handleChange = (e) =>{
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
        console.log(user)
    }

    const handleSubmit = (e) =>{
        fetch('https://infinite-beach-29063.herokuapp.comh-29063.herokuapp.com/vendor/login',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(user),
            redirect: 'follow',
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
            <div className = 'jumbotron bg-warning'>
                <form>
                    <input onChange = {handleChange} placeholder = 'phone' name="phone" className = 'form-control mb-2'/>
                    <input onChange = {handleChange} placeholder = 'password' name="password" className = 'form-control' />
                    
                    <button onClick = {handleSubmit} className = 'form-control btn btn-success mt-3' type="submit">Submit</button>
                </form>
            <Link to = '/vendor/signup'>
                <button className = 'text-white btn' >Create an account  </button>
            </Link>
        </div>
        </div>
    );
};

export default LogIn;