import { useState } from 'react';

export function Login() {

    const [user, setUser] = useState(null)
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginSubmit= async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            //body: JSON.stringify({ email:'yariv@nerdeez.com', password:'12345678'})
            body: JSON.stringify({ email:userEmail, password:password})
        };
        const response = await fetch('https://academeez-login-ex.herokuapp.com/api/users/login', requestOptions);
        const data = await response.json()
        //console.log('user: ' + {userEmail});
        //console.log(data);
        setUser (data);
        //setUserEmail('');
        //setPassword('');
        //setUser ({firstName:'',lastName:'',email:''})
        
    } 

    const onUserChange = (e) => {
        e.preventDefault();
        setUserEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    return (
        <form onSubmit={loginSubmit} >
            <input name="user" type="email" placeholder="Enter your email: " onChange={onUserChange}/>
            <input name="password" type="password" placeholder="Enter your password: " onChange={onPasswordChange}/>
            <button type="submit">Login</button>
            <h1> hello {user?.firstName}, you are now logged in </h1>
        </form>
    )
}