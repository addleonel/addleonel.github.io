import { useState } from 'react';
import ReactKatex from 'react-katex';
const { InlineMath } = ReactKatex;
import 'katex/dist/katex.min.css';
import '../styles/cipersonal.css';

export default function Cipersonal() {
	// Capital Humano
	const [cursosAprobados, setCursosAprobados] = useState<number>(4);
	const [certificaciones, setCertificaciones] = useState<number>(15);
	const [autoevaluacionTeorica, setAutoevaluacionTeorica] = useState<number>(7);

	const conocimiento =
		((cursosAprobados / 5) * 100 + autoevaluacionTeorica * 10) / 2;

	const [proyectosTecnicos, setProyectosTecnicos] = useState<number>(3);
	const [experienciaAnios, setExperienciaAnios] = useState<number>(1);
	const [evaluacionTecnica, setEvaluacionTecnica] = useState<number>(8);

	const habilidades =
		((proyectosTecnicos / 5) * 100 +
			(experienciaAnios / 5) * 100 +
			evaluacionTecnica * 10) /
		3;

	const [tiempoResolucion, setTiempoResolucion] = useState<number>(30);
	const [calidadResultado, setCalidadResultado] = useState<number>(8);
	const [feedback, setFeedback] = useState<number>(8);

	const destrezas =
		(100 - tiempoResolucion * 2 + calidadResultado * 10 + feedback * 10) / 3;

	const capitalHumano = ((conocimiento + habilidades + destrezas) / 3).toFixed(
		2
	);

	// Capital Relacional
	const [contactosRelevantes, setContactosRelevantes] = useState<number>(10);
	const [interaccionesMensuales, setInteraccionesMensuales] =
		useState<number>(10);
	const [gruposProfesionales, setGruposProfesionales] = useState<number>(2);

	const redes =
		((contactosRelevantes / 200) * 100 +
			interaccionesMensuales * 5 +
			gruposProfesionales * 10) /
		3;

	const [proyectosColaborativos, setProyectosColaborativos] =
		useState<number>(3);
	const [aporteSignificativo, setAporteSignificativo] = useState<number>(3);
	const [impactoPerceptible, setImpactoPerceptible] = useState<number>(3);

	const colaboraciones =
		((proyectosColaborativos / 5) * 100 +
			(aporteSignificativo / 5) * 100 +
			(impactoPerceptible / 5) * 100) /
		3;

	const [recomendacionesEscritas, setRecomendacionesEscritas] =
		useState<number>(2);
	const [testimonios, setTestimonios] = useState<number>(1);
	const [reconocimientosPublicos, setReconocimientosPublicos] =
		useState<number>(1);

	const recomendaciones =
		((recomendacionesEscritas / 5) * 100 +
			(testimonios / 5) * 100 +
			(reconocimientosPublicos / 5) * 100) /
		3;

	const capitalRelacional = (
		(redes + colaboraciones + recomendaciones) /
		3
	).toFixed(2);

	// Capital Estructural
	const [velocidadAprendizaje, setVelocidadAprendizaje] = useState<number>(4);
	const [resiliencia, setResiliencia] = useState<number>(3);
	const [flexibilidad, setFlexibilidad] = useState<number>(3);

	const adaptabilidad =
		((velocidadAprendizaje / 5) * 100 +
			(resiliencia / 5) * 100 +
			(flexibilidad / 5) * 100) /
		3;

	const [usoMetodologias, setUsoMetodologias] = useState<number>(3);
	const [productividadDiaria, setProductividadDiaria] = useState<number>(7);
	const [metasAlcanzadas, setMetasAlcanzadas] = useState<number>(80);

	const organizacion =
		((usoMetodologias / 3) * 100 + productividadDiaria * 10 + metasAlcanzadas) /
		3;

	const [analisisPrevio, setAnalisisPrevio] = useState<number>(4);
	const [creatividadSolucion, setCreatividadSolucion] = useState<number>(4);
	const [eficaciaSolucion, setEficaciaSolucion] = useState<number>(4);

	const resolucion =
		((analisisPrevio / 5) * 100 +
			(creatividadSolucion / 5) * 100 +
			(eficaciaSolucion / 5) * 100) /
		3;

	const capitalEstructural = (
		(adaptabilidad + organizacion + resolucion) /
		3
	).toFixed(2);

	// Capital Intelectual General
	const capitalIntelectualTotal = (
		parseFloat(capitalHumano) * 0.4 +
		parseFloat(capitalRelacional) * 0.3 +
		parseFloat(capitalEstructural) * 0.3
	).toFixed(2);

	return (
		<div className="ci-container">
			<h1>Capital Intelectual Personal</h1>
			<p>Leunel Aquino Davila</p>

			{/* Capital Humano */}
			<section className="ci-section">
				<h2>🧠 Capital Humano</h2>
				<p>
					<strong>Formula:</strong>{' '}
					<InlineMath math="(Conocimiento + Habilidades + Destrezas) / 3" />
				</p>

				<div className="ci-indicator">
					<h3>📘 Conocimiento</h3>
					<p>% de dominio teorico en areas clave.</p>
					<p>
						<strong>Formula:</strong>{' '}
						<InlineMath math="(\frac{\text{Cursos aprobados}}{5} \times 100 + \text{Autoevaluacion} \times 10) / 2" />
					</p>
					<div className="ci-input-group">
						<label>Cursos tecnicos aprobados (de 0 a 5):</label>
						<input
							type="number"
							min="0"
							max="5"
							value={cursosAprobados}
							onChange={(e) => setCursosAprobados(parseInt(e.target.value))}
						/>
					</div>
					<div className="ci-input-group">
						<label>Certificaciones tecnicas:</label>
						<input
							type="number"
							min="0"
							max="10"
							value={certificaciones}
							onChange={(e) => setCertificaciones(parseInt(e.target.value))}
						/>
					</div>
					<div className="ci-input-group">
						<label>Autoevaluacion teorica (1-10):</label>
						<input
							type="number"
							min="1"
							max="10"
							value={autoevaluacionTeorica}
							onChange={(e) =>
								setAutoevaluacionTeorica(parseInt(e.target.value))
							}
						/>
					</div>
					<div className="ci-result">
						Conocimiento: {conocimiento.toFixed(2)}%
					</div>
				</div>

				<div className="ci-indicator">
					<h3>🛠️ Habilidades</h3>
					<p>Dominio tecnico aplicable a herramientas o metodologias.</p>
					<p>
						<strong>Formula:</strong>{' '}
						<InlineMath math="(\frac{\text{Proyectos tecnicos}}{5} \times 100 + \frac{\text{Anios experiencia}}{5} \times 100 + \text{Evaluacion tecnica} \times 10) / 3" />
					</p>
					<div className="ci-input-group">
						<label>Proyectos tecnicos realizados:</label>
						<input
							type="number"
							min="0"
							max="20"
							value={proyectosTecnicos}
							onChange={(e) => setProyectosTecnicos(parseInt(e.target.value))}
						/>
					</div>
					<div className="ci-input-group">
						<label>Anios de experiencia tecnica:</label>
						<input
							type="number"
							min="0"
							max="10"
							value={experienciaAnios}
							onChange={(e) => setExperienciaAnios(parseInt(e.target.value))}
						/>
					</div>
					<div className="ci-input-group">
						<label>Evaluacion tecnica (1-10):</label>
						<input
							type="number"
							min="1"
							max="10"
							value={evaluacionTecnica}
							onChange={(e) => setEvaluacionTecnica(parseInt(e.target.value))}
						/>
					</div>
					<div className="ci-result">
						Habilidades: {habilidades.toFixed(2)}%
					</div>
				</div>

				<div className="ci-indicator">
					<h3>🔧 Destrezas</h3>
					<p>Aplicacion practica con precision y rapidez.</p>
					<p>
						<strong>Formula:</strong>{' '}
						<InlineMath math="((100 - \text{Tiempo} \times 2) + \text{Calidad} \times 10 + \text{Feedback} \times 10) / 3" />
					</p>
					<div className="ci-input-group">
						<label>Tiempo promedio de resolucion (minutos):</label>
						<input
							type="number"
							min="1"
							max="120"
							value={tiempoResolucion}
							onChange={(e) => setTiempoResolucion(parseInt(e.target.value))}
						/>
					</div>
					<div className="ci-input-group">
						<label>Calidad del resultado (1-10):</label>
						<input
							type="number"
							min="1"
							max="10"
							value={calidadResultado}
							onChange={(e) => setCalidadResultado(parseInt(e.target.value))}
						/>
					</div>
					<div className="ci-input-group">
						<label>Feedback recibido (1-10):</label>
						<input
							type="number"
							min="1"
							max="10"
							value={feedback}
							onChange={(e) => setFeedback(parseInt(e.target.value))}
						/>
					</div>
					<div className="ci-result">Destrezas: {destrezas.toFixed(2)}%</div>
				</div>

				<div className="ci-average">
					Promedio Capital Humano: <strong>{capitalHumano}%</strong>
				</div>
			</section>

			{/* Capital Relacional */}
			<section className="ci-section">
				<h2>🤝 Capital Relacional</h2>
				<p>
					<strong>Formula:</strong>{' '}
					<InlineMath math="(\text{Redes} + \text{Colaboraciones} + \text{Recomendaciones}) / 3" />
				</p>

				<div className="ci-indicator">
					<h3>👥 Redes</h3>
					<p>Contactos profesionales activos y relevantes.</p>
					<p>
						<strong>Formula:</strong>{' '}
						<InlineMath math="(\frac{\text{Contactos relevantes}}{200} \times 100 + \text{Interacciones mensuales} \times 5 + \text{Grupos profesionales} \times 10) / 3" />
					</p>
					<div className="ci-input-group">
						<label>Contactos profesionales relevantes:</label>
						<input
							type="number"
							min="0"
							max="200"
							value={contactosRelevantes}
							onChange={(e) =>
								setContactosRelevantes(parseInt(e.target.value))
							}
						/>
					</div>
					<div className="ci-input-group">
						<label>Interacciones mensuales:</label>
						<input
							type="number"
							min="0"
							max="30"
							value={interaccionesMensuales}
							onChange={(e) =>
								setInteraccionesMensuales(parseInt(e.target.value))
							}
						/>
					</div>
					<div className="ci-input-group">
						<label>Grupos profesionales:</label>
						<input
							type="number"
							min="0"
							max="10"
							value={gruposProfesionales}
							onChange={(e) =>
								setGruposProfesionales(parseInt(e.target.value))
							}
						/>
					</div>
					<div className="ci-result">Redes: {redes.toFixed(2)}%</div>
				</div>

				<div className="ci-indicator">
					<h3>🤝 Colaboraciones</h3>
					<p>Sinergias activas en proyectos colaborativos.</p>
					<p>
						<strong>Formula:</strong>{' '}
						<InlineMath math="(\frac{\text{Proyectos colaborativos}}{5} \times 100 + \frac{\text{Aporte significativo}}{5} \times 100 + \frac{\text{Impacto perceptible}}{5} \times 100) / 3" />
					</p>
					<div className="ci-input-group">
						<label>Proyectos colaborativos:</label>
						<input
							type="number"
							min="0"
							max="10"
							value={proyectosColaborativos}
							onChange={(e) =>
								setProyectosColaborativos(parseInt(e.target.value))
							}
						/>
					</div>
					<div className="ci-input-group">
						<label>Aporte significativo:</label>
						<input
							type="number"
							min="0"
							max="5"
							value={aporteSignificativo}
							onChange={(e) =>
								setAporteSignificativo(parseInt(e.target.value))
							}
						/>
					</div>
					<div className="ci-input-group">
						<label>Impacto perceptible:</label>
						<input
							type="number"
							min="0"
							max="5"
							value={impactoPerceptible}
							onChange={(e) =>
								setImpactoPerceptible(parseInt(e.target.value))
							}
						/>
					</div>
					<div className="ci-result">
						Colaboraciones: {colaboraciones.toFixed(2)}%
					</div>
				</div>

				<div className="ci-indicator">
					<h3>📢 Recomendaciones</h3>
					<p>Confianza recibida por parte de otros.</p>
					<p>
						<strong>Formula:</strong>{' '}
						<InlineMath math="(\frac{\text{Recomendaciones escritas}}{5} \times 100 + \frac{\text{Testimonios}}{5} \times 100 + \frac{\text{Reconocimientos publicos}}{5} \times 100) / 3" />
					</p>
					<div className="ci-input-group">
						<label>Recomendaciones escritas:</label>
						<input
							type="number"
							min="0"
							max="5"
							value={recomendacionesEscritas}
							onChange={(e) =>
								setRecomendacionesEscritas(parseInt(e.target.value))
							}
						/>
					</div>
					<div className="ci-input-group">
						<label>Testimonios:</label>
						<input
							type="number"
							min="0"
							max="5"
							value={testimonios}
							onChange={(e) => setTestimonios(parseInt(e.target.value))}
						/>
					</div>
					<div className="ci-input-group">
						<label>Reconocimientos publicos:</label>
						<input
							type="number"
							min="0"
							max="5"
							value={reconocimientosPublicos}
							onChange={(e) =>
								setReconocimientosPublicos(parseInt(e.target.value))
							}
						/>
					</div>
					<div className="ci-result">
						Recomendaciones: {recomendaciones.toFixed(2)}%
					</div>
				</div>

				<div className="ci-average">
					Promedio Capital Relacional: <strong>{capitalRelacional}%</strong>
				</div>
			</section>

			{/* Capital Estructural */}
			<section className="ci-section">
				<h2>⚙️ Capital Estructural</h2>
				<p>
					<strong>Formula:</strong>{' '}
					<InlineMath math="(\text{Adaptabilidad} + \text{Organizacion} + \text{Resolucion}) / 3" />
				</p>

				<div className="ci-indicator">
					<h3>🔄 Adaptabilidad</h3>
					<p>Capacidad de ajustarse a nuevas situaciones.</p>
					<p>
						<strong>Formula:</strong>{' '}
						<InlineMath math="(\frac{\text{Velocidad aprendizaje}}{5} \times 100 + \frac{\text{Resiliencia}}{5} \times 100 + \frac{\text{Flexibilidad}}{5} \times 100) / 3" />
					</p>
					<div className="ci-input-group">
						<label>Velocidad de aprendizaje (1-5):</label>
						<input
							type="number"
							min="1"
							max="5"
							value={velocidadAprendizaje}
							onChange={(e) =>
								setVelocidadAprendizaje(parseInt(e.target.value))
							}
						/>
					</div>
					<div className="ci-input-group">
						<label>Resiliencia ante cambios (1-5):</label>
						<input
							type="number"
							min="1"
							max="5"
							value={resiliencia}
							onChange={(e) => setResiliencia(parseInt(e.target.value))}
						/>
					</div>
					<div className="ci-input-group">
						<label>Flexibilidad funcional (1-5):</label>
						<input
							type="number"
							min="1"
							max="5"
							value={flexibilidad}
							onChange={(e) => setFlexibilidad(parseInt(e.target.value))}
						/>
					</div>
					<div className="ci-result">
						Adaptabilidad: {adaptabilidad.toFixed(2)}%
					</div>
				</div>

				<div className="ci-indicator">
					<h3>🗂️ Organizacion</h3>
					<p>Metodos internos para gestionar recursos y tareas.</p>
					<p>
						<strong>Formula:</strong>{' '}
						<InlineMath math="(\frac{\text{Uso de metodologias}}{3} \times 100 + \text{Productividad diaria} \times 10 + \text{Metas alcanzadas}) / 3" />
					</p>
					<div className="ci-input-group">
						<label>Uso de metodologias (1-3):</label>
						<input
							type="number"
							min="1"
							max="3"
							value={usoMetodologias}
							onChange={(e) => setUsoMetodologias(parseInt(e.target.value))}
						/>
					</div>
					<div className="ci-input-group">
						<label>Productividad diaria (1-10):</label>
						<input
							type="number"
							min="1"
							max="10"
							value={productividadDiaria}
							onChange={(e) =>
								setProductividadDiaria(parseInt(e.target.value))
							}
						/>
					</div>
					<div className="ci-input-group">
						<label>Metas alcanzadas (%):</label>
						<input
							type="number"
							min="0"
							max="100"
							value={metasAlcanzadas}
							onChange={(e) => setMetasAlcanzadas(parseInt(e.target.value))}
						/>
					</div>
					<div className="ci-result">
						Organizacion: {organizacion.toFixed(2)}%
					</div>
				</div>

				<div className="ci-indicator">
					<h3>🔍 Resolucion</h3>
					<p>Capacidad analitica y creativa para resolver problemas.</p>
					<p>
						<strong>Formula:</strong>{' '}
						<InlineMath math="(\frac{\text{Analisis previo}}{5} \times 100 + \frac{\text{Creatividad solucion}}{5} \times 100 + \frac{\text{Eficacia solucion}}{5} \times 100) / 3" />
					</p>
					<div className="ci-input-group">
						<label>Analisis previo (1-5):</label>
						<input
							type="number"
							min="1"
							max="5"
							value={analisisPrevio}
							onChange={(e) => setAnalisisPrevio(parseInt(e.target.value))}
						/>
					</div>
					<div className="ci-input-group">
						<label>Creatividad solucion (1-5):</label>
						<input
							type="number"
							min="1"
							max="5"
							value={creatividadSolucion}
							onChange={(e) =>
								setCreatividadSolucion(parseInt(e.target.value))
							}
						/>
					</div>
					<div className="ci-input-group">
						<label>Eficacia solucion (1-5):</label>
						<input
							type="number"
							min="1"
							max="5"
							value={eficaciaSolucion}
							onChange={(e) => setEficaciaSolucion(parseInt(e.target.value))}
						/>
					</div>
					<div className="ci-result">
						Resolucion: {resolucion.toFixed(2)}%
					</div>
				</div>

				<div className="ci-average">
					Promedio Capital Estructural: <strong>{capitalEstructural}%</strong>
				</div>
			</section>

			{/* Resultado Final - Capital Intelectual Total */}
			<section className="ci-result">
				<h2>📊 Capital Intelectual Total</h2>
				<p>
					<strong>Formula:</strong>{' '}
					<InlineMath math="(CH \times 0.4) + (CR \times 0.3) + (CE \times 0.3)" />
				</p>
				<p className="total-score">{capitalIntelectualTotal}%</p>
				<div className="ci-progress-bar">
					<div
						className="ci-progress-fill"
						style={{ width: `${capitalIntelectualTotal}%` }}
					></div>
				</div>
				<p>Escala: 0% (minimo) - 100% (maximo)</p>
			</section>
		</div>
	);
}
