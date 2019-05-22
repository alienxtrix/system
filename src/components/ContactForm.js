import React from 'react';

class ContactForm extends React.Component {
	handleChange = (e) => {
		console.log({
			name  : e.target.name,
			value : e.target.value
		});
	};
	handleClick = (e) => {
		console.log('was clicked');
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log('was submited');
	};
	render() {
		return (
			<div>
				<h1>Contacto</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>Nombre</label>
						<input onChange={this.handleChange} className="form-control" type="text" name="firstname" />
					</div>
					<div className="form-group">
						<label>Agencia Aduanal</label>
						<input onChange={this.handleChange} className="form-control" type="text" name="agencyname" />
					</div>
					<div className="form-group">
						<label>Teléfono</label>
						<input onChange={this.handleChange} className="form-control" type="text" name="firstname" />
					</div>
					<div className="form-group">
						<label>Correo</label>
						<input onChange={this.handleChange} className="form-control" type="text" name="firstname" />
					</div>
					<div className="form-group">
						<label>Sistema</label>
						<input onChange={this.handleChange} className="form-control" type="text" name="firstname" />
					</div>
					<div className="form-group">
						<label>Preguntas y comentarios</label>
						<input onChange={this.handleChange} className="form-control" type="text" name="firstname" />
					</div>
					<button onClick={this.handleClick} className="btn btn-primary">
						Enviar
					</button>
				</form>
			</div>
		);
	}
}

export default ContactForm;
