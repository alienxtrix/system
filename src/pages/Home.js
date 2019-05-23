import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import LogoImage from '../images/logocasaTransparencia.png';
import astronautsImage from '../images/astronauts.svg';

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
				<div className="container">
					<div className="row">
						<div className="Home__col col-12 col-md-4">
							<img src={LogoImage} alt="Platzi Conf Logo" className="img-fluid mb-2" />

							<h1>Website SISTEMAS CASA</h1>
							<Link className="btn btn-primary" to="/badges">
								Inicio
							</Link>
						</div>

						<div className="Home__col d-none d-md-block col-md-8">
							<img src={astronautsImage} alt="Astronauts" className="img-fluid p-4" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
