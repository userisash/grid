import { Link } from "react-router-dom";

export function MainNavBar(){
    return <header className="header">
        <nav className="nav">
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/Product"}>Product</Link></li>
            </ul>
        </nav>
    </header>
}