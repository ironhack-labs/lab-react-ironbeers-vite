import { Link } from 'react-router-dom'
import homeIcon from './../assets/home-icon.png'

const Navbar = () => {
	return (
		<nav className='Navbar mb-5'>
			<Link to={'/'}>
				<img src={homeIcon} alt='' />
			</Link>
		</nav>
	)
}

export default Navbar
