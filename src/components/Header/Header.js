
export function Header(
    {user = {firstName: "Guest" }}
)
{   
    return (
        <h1>hello {user.firstName} </h1>
    )
}
