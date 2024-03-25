import "./NavBar.css"

function NavBar() {
    return (
        <nav>
        <h1>Yo, this is a NavBar!</h1>
        <ul>
        <a href="#"><input type="button" value="What is Pursuit?"/></a>
        <a href="#"><input type="button" value="Create an account"/></a>
        <a href="#"><input type="button" value="Sign in"/></a>
        </ul>
        </nav>
    )
}

export default NavBar;