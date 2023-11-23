import { Link } from "react-router-dom"
import "/src/App.css"


const Navbar = () => {
    return (

        <nav className="pochi">
            <Link to="/" >
                <img src="/src/assets/home-icon.png" alt='iconito' />
            </Link>
        </nav>
    )

}

export default Navbar