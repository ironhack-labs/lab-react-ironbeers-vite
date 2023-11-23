import { Link } from "react-router-dom"
import homeIcon from './../assets/home-icon.png'
const Navbar = () => {
    return (
        <div className="myNavbar">
            <nav style={{ height: '50px', backgroundColor: 'lightblue', textAlign: 'center' }}>
                <Link to={'/'}><img src={homeIcon} /></Link>
            </nav>
        </div>
    )
}

export default Navbar
