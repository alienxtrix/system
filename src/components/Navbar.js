import React from 'react';
import { nav } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import header from '../images/logocasaTransparencia.png';

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
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-left nav-link" to="/">
					<img src={header} width="30" height="30" alt="ddd" />
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={this.handleClick}>
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
								onClick={this.handleClick}>
								Quiénes somos
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<Link className="dropdown-item" to="/whoweare">
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
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#7DCD40"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Productos
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="http://google.com">
									CTARwin
								</a>
								<a className="dropdown-item" href="#7DCD40">
									CTAR en línea
								</a>
								<a className="dropdown-item" href="#7DCD40">
									CTRAwin
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#7DCD40">
									CTRA en línea
								</a>
								<a className="dropdown-item" href="#7DCD40">
									CVALwin
								</a>
							</div>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#7DCD40"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								En línea
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="https://normativo.e-casa.com.mx/1L0">
									TIGIE
								</a>
								<a className="dropdown-item" href="#7DCD40">
									Legislación aduanal
								</a>
								<a className="dropdown-item" href="#7DCD40">
									Anexo 22
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#7DCD40">
									INCOTERMS
								</a>
							</div>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contact">
								Contacto
							</Link>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="Search"
							placeholder="¿Qué desea buscar?"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
							Buscar
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
