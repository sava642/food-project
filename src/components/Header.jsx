import { Link } from 'react-router-dom'

function Header() {
	return <nav className="teal accent-4">
		<div className="nav-wrapper">
			<Link to="/" className="brand-logo">React Router</Link>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li><Link to="/">Categories</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/contact" >Contact</Link></li>
			</ul>
		</div>
	</nav>

}

export { Header }