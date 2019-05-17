import React from 'react';
import { nav } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// import './styles/Navbar.css';
// import logo from '../images/logo.svg';

class Navbar extends React.Component {
	handleChange = (e) => {
		console.log({ value: e.target.value });
	};
	handleClick = (e) => {
		console.log('the button was clicked');
	};
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#123456">
					SISTEMAS CASA
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={this.handleClick}
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="dropdown-menu"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								onClick={this.handleClick}
							>
								Quiénes somos
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<Link className="dropdown-item" to="/WhoWeAre">
									Nuestra historia
								</Link>
								<a className="dropdown-item" href="#7DCD40">
									Misión, visión y valores
								</a>
								<a className="dropdown-item" href="#7DCD40">
									Directorio
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#7DCD40">
									Políticas
								</a>
							</div>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#7DCD40">
								Productos
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#7DCD40"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								En línea
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="http://google.com">
									Nuestra historia
								</a>
								<a className="dropdown-item" href="#7DCD40">
									Misión, visión y valores
								</a>
								<a className="dropdown-item" href="#7DCD40">
									Directorio
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#7DCD40">
									Políticas
								</a>
							</div>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#7DCD40" tabindex="-1" aria-disabled="true">
								Contacto
							</a>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>
			// <div classNameName="Navbar">
			// 	<div classNameName="container-fluid">
			// 		<Link classNameName="Navbar__brand" to="/">
			// 			<img classNameName="Navbar__brand-logo" src={logo} alt="Logo" />
			// 			<span classNameName="font-weight-light">Platzi</span>
			// 			<span classNameName="font-weight-bold">Conf</span>
			// 		</Link>
			// 		<ul classNameName="right">
			// 			<li>
			// 				<Link to="/">Quiénes somos</Link>
			// 			</li>
			// 			<li>
			// 				<Link to="/">Productos</Link>
			// 			</li>
			// 			<li>
			// 				<Link to="/">En línea</Link>
			// 			</li>
			// 			<li>
			// 				<Link to="/">Contacto</Link>
			// 			</li>
			// 		</ul>
			// 	</div>
			// </div>
		);
	}
}

export default Navbar;
