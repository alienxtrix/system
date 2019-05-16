import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles/Navbar.css';

class SignedInLinks extends React.Component {
	render() {
		return (
			<ul className="right">
				<li>
					<NavLink to="/">Quiénes somos</NavLink>
				</li>
				<li>
					<NavLink to="/">Productos</NavLink>
				</li>
				<li>
					<NavLink to="/">En línea</NavLink>
				</li>
				<li>
					<NavLink to="/">Contacto</NavLink>
				</li>
			</ul>
		);
	}
}

export default SignedInLinks;
