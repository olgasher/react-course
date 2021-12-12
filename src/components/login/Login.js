export function Login() {

    const loginSubmit= (e) => {
        console.log("Hello");
        e.preventDefault();
    } 

    return (
        <form onSubmit={loginSubmit}>
            <input name="user" type="email" type="text" placeholder="Enter your email: "/>
            <input name="password" type="password" placeholder="Enter your password: "/>
            <button type="submit">Login</button>
        </form>
    )
}