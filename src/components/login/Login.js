import { useState } from 'react';

export function Login() {

    const [user, setUser] = useState(null)

    const loginSubmit= (e) => {
        setUser("")
        e.preventDefault();

        //setUser ({firstName:'', lastName:'',email: ''})
    } 

    return (
        <form onSubmit={loginSubmit}>
            <input name="user" type="email" placeholder="Enter your email: "/>
            <input name="password" type="password" placeholder="Enter your password: "/>
            <button type="submit">Login</button>
            <h1> hello {user}, you are now logged in </h1>
        </form>
    )
}