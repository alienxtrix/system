import React from 'react';

import ContactForm from '../components/ContactForm';
class Contact extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-6">
						<h3>Información de contacto</h3>
						<p className="container">
							Dada la firmeza que sustentamos de dar a nuestros clientes un servicio personalizado,
							estamos a su permanente disposición para visitarlo y proporcionarle cualquier información
							adicional que sobre nuestros servicios y productos requiera. Favor de establecer contacto
							con el Departamento de Ventas vía telefónica: 01 (55) 5368 6826 con 10 líneas, E-mail:
							ventas@sistemascasa.com.mx y nuestro agente le programará una demostración de los mismos, ya
							sea en sus instalaciones o en Sistemas CASA. O si lo prefiere con el fin de darle una mejor
							atención, le solicitamos que llene la siguiente forma electrónica, reiterándole nuestro
							compromiso de atenderle.
						</p>
					</div>
					<div className="col-6">
						<ContactForm />
					</div>
				</div>
			</div>
		);
	}
}
export default Contact;
