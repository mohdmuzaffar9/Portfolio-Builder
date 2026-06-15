import {Link} from "react-router-dom"
import "./ComponentsStyles/index.css"


const Header =()=>{
 

    return(
        <>
            <nav className = "header-style">
                <ul className = "nav-links">
                <li>
                    <Link to = "/dashbord" className = "link-styles">Create Portfolio</Link>
                </li>
                <li>
                    <Link to = "/view" className = "link-styles" >View portfolio</Link>       
                </li>
                <li>
                    <Link to ="/" className = "link-styles">logout</Link>
                </li>
                </ul>
            </nav>
        </>
    )
}


export default Header