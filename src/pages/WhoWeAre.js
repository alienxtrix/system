import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class WhoWeAre extends React.Component {
	render() {
		console.log('ee');
		return (
			<div className="container-fluid">
				<section className="p-5 bg-secondary " bg data-section="history">
					<div className="overlay-darker border border-success p-3 mb-2 bg-secondary text-white">
						<h5>
							<h4 claasName="mx-auto">Formalmente establecida en 1995.</h4>
							<p>
								Nos ubicamos en el Sector Industrial de Software especializado en sistemas aduanales de
								nuestro país.
							</p>
							<p>
								Con doce años de experiencia en el medio informático y aduanal nos ubicamos en la
								clasificación de Pequeña empresa mexicana. Nuestro mercado principal son empresas
								usuarias del comercio exterior de nuestro país. específicamente empresas denominadas
								como: Agencias aduanales, importadoras/Exportadoras con apoderado aduanal y, Almacenes
								Generales de Depósito. ... Afiliados p la Asociación de Mexicana de la Industria de
								Tecnologías de Información, A.C. (AMITI).
							</p>
						</h5>

						<h6>
							<p>
								La firma del Tratado de Libre Comercio de América del Norte (TLCAN) que México celebró
								con Canadá y Estados Unidos el 17 de diciembre de 1992 y que entró en vigor el 1 de
								enero de 1994, significó el inicio de la apertura comercial del país. Esta apertura
								comercial enmarcada por una tendencia internacional hacia la globalización económica
								propició cambios en materia de comercio exterior, no sólo en cuestión de política y
								negociación comercial, sino también, en la reestructuración del Sistema Aduanero
								Mexicano. Pues para responder a la aplicación del TLCAN, el estado debía poner especial
								énfasis en la eficiencia de la operación aduanera a fin de favorecer el flujo comercial
								y el control de las aduanas del país. Una de las primeras medidas para la
								reestructuración del Sistema Aduanero fue el uso de la Tecnología de la información [1]
								, por lo que en 1993, la Secretaría de Hacienda y Crédito Público a través de la
								Subsecretaría de Ingresos instrumentó un proyecto nacional denominado “Sistema
								Automatizado Aduanero Integral (S.A.A.I.)” y que actualmente está bajo la coordinación
								del órgano de Servicios de Administración Tributaria de la misma secretaría. El nuevo
								sistema aduanero propició el surgimiento de empresas privadas en el ámbito del
								desarrollo de software [2] para participar activamente en la automatización de los
								procesos operativos aduanales denominados “despacho aduanal” [3] especificados por la
								normatividad correspondiente en la materia. Ante tal panorama, la empresa Computación y
								Asesoría en Sistemas Aduanales, S.A. de C.V. (establecida en 1992 y que ya desarrollaba
								sistemas de cómputo para operaciones aduanales bajo el Sistema de Captura Desconcentrada
								del Pedimento Aduanal CADEPA) en 1995 con una mejor organización de empresa cambia su
								razón social por la de SISTEMAS CASA, S.A. de C.V. con el propósito de apoyar en las
								necesidades de automatización de las agencias aduanales ante los requerimientos del
								proyecto nacional S.A.A.I. El S.A.A.I. fue diseñado para desarrollarse en fases, esto ha
								implicado una constante modernización del sistema aduanal no solo en aspectos
								legislativos, de facilitación, competitividad, armonización o simplificación de
								procedimientos, sino también, en aspectos de mejoras informáticas, automatización,
								actualización tecnológica, infraestructura y equipamiento. Esto ha ubicado a nuestra
								empresa en una relación constante y directa con los diferentes usuarios y actores del
								comercio exterior participantes en el Sistema Aduanero Mexicano.
							</p>
						</h6>
					</div>
				</section>
				<section className="p-5 bg-info" data-section="culture">
					<div claasName="p-3 mb-2 bg-info text-white">
						<div claasName="p-3 mb-2 bg-info text-white">
							<h3>Misión</h3> ... Nuestra razón de ser y propósito. Automatizar la operación de la agencia
							aduanal, almacenes generales de depósito, empresas de mensajería, importadores, exportadores
							y demás actores del comercio exterior en México, con esquemas de atención personalizada.
						</div>
						<div>
							<h3>Visión</h3> ￼ ￼ ... Donde queremos llegar. Ser reconocidos en México como líderes de
							soluciones de software para el comercio exterior, con un equipo de profesionales y procesos
							confiables.
						</div>
						<div>
							<h3>Valores</h3> ￼ ￼ ... Guía para conducirnos a cumplir con nuestra misión y alcanzar la
							visión. Nuestros colaboradores son la parte fundamental de nuestra empresa, y basan su
							conducta en los valores: Compromiso, Confianza y Servicio. ￼ ￼ Compromiso: Con el país, con
							nuestros socios comerciales, con la empresa, con nuestro trabajo y con uno mismo, en el
							cumplimiento de las metas. ￼ ￼ ￼ Confianza: Creemos en el negocio y respetamos el equipo de
							trabajo para poder compartir y delegar los objetivos de la empresa. ￼ ￼ ￼ Servicio: Estamos
							en la mejor disposición de apoyar a nuestros clientes en la totalidad de sus requerimientos.
						</div>
					</div>
				</section>
				<section claasName="p-5">
					<div className="p-3 mb-2 bg-dark text-white">
						<div>
							<h3>Política de seguridad</h3> de la información Nuestro compromiso es implementar
							soluciones informáticas para la automatización de la operación del comercio exterior, en
							cumplimiento con los requisitos de la seguridad de la información, para preservar su
							confidencialidad, integridad y disponibilidad, garantizando el cumplimiento de la
							normatividad vigente y la mejora continua.
						</div>
						<div>
							<h3>Política de calidad</h3> Nuestro compromiso es satisfacer las necesidades de nuestros
							clientes, ser su mejor aliado de negocios, brindar soluciones de software eficientes,
							garantizar la mejora continua y mantener nuestros productos y servicios con estándares de
							calidad.
						</div>
					</div>
				</section>
			</div>
		);
	}
}
export default WhoWeAre;
