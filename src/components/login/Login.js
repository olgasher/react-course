import { useState } from 'react';

export function Login() {

    const [user, setUser] = useState(null)

    const loginSubmit= async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email:'yariv@nerdeez.com', password:'12345678'})
        };
        const response = await fetch('https://academeez-login-ex.herokuapp.com/api/users/login', requestOptions);
        const data = await response.json()
        console.log(data);
        setUser (data);
        //setUser ({firstName:'',lastName:'',email:''})
        
    } 

    return (
        <form onSubmit={loginSubmit} >
            <input name="user" type="email" placeholder="Enter your email: "/>
            <input name="password" type="password" placeholder="Enter your password: "/>
            <button type="submit">Login</button>
            <h1> hello {user?.firstName}, you are now logged in </h1>
        </form>
    )
}