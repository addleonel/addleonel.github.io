import { useState, useEffect, useMemo, useRef } from 'react';
import '../styles/personal.scss';

const SECTIONS = [
	{ id: 'indicadores', label: 'Indicadores', code: '01' },
	{ id: 'dimensiones', label: 'Dimensiones', code: '02' },
	{ id: 'conocido', label: 'Cómo ser conocido', code: '03' },
	{ id: 'inteligencia', label: 'Tipo de Inteligencia', code: '04' },
	{ id: 'capital', label: 'Capital Intelectual', code: '05' },
];

type IndStatus = 'active' | 'done' | 'paused';
type Indicador = {
	id: string;
	name: string;
	value: number;
	target: number;
	unit: string;
	deadline?: string;
	status: IndStatus;
};
type Dimension = { id: string; name: string; value: number };
type Stage = { name: string; value: number; desc: string };
type Intel = { name: string; value: number };



function usePersistedState<T>(key: string, initial: T) {
	const [state, setState] = useState<T>(initial);
	const hydrated = useRef(false);

	useEffect(() => {
		try {
			const stored = localStorage.getItem(key);
			if (stored !== null) setState(JSON.parse(stored));
		} catch {
			/* noop */
		}
		hydrated.current = true;
	}, [key]);

	useEffect(() => {
		if (!hydrated.current) return;
		try {
			localStorage.setItem(key, JSON.stringify(state));
		} catch {
			/* noop */
		}
	}, [key, state]);

	return [state, setState] as const;
}

function polygonPoints(values: number[], radius: (v: number) => number): string {
	const n = values.length;
	return values
		.map((v, i) => {
			const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
			const r = radius(v);
			return `${(Math.cos(angle) * r).toFixed(2)},${(Math.sin(angle) * r).toFixed(2)}`;
		})
		.join(' ');
}

const DEFAULT_INDICADORES: Indicador[] = [
	{ id: 'ind-sueno', name: 'Sueño', value: 7, target: 8, unit: 'h/día', status: 'active' },
	{ id: 'ind-ejer', name: 'Ejercicio', value: 30, target: 60, unit: 'min/día', status: 'active' },
	{ id: 'ind-lect', name: 'Lectura', value: 30, target: 60, unit: 'min/día', status: 'active' },
	{ id: 'ind-foco', name: 'Foco profundo', value: 2, target: 4, unit: 'h/día', status: 'active' },
	{ id: 'ind-hab', name: 'Hábitos consistentes', value: 70, target: 100, unit: '%', status: 'active' },
	{ id: 'ind-alim', name: 'Alimentación', value: 75, target: 100, unit: '%', status: 'active' },
];

const DEFAULT_DIMENSIONES: Dimension[] = [
	{ id: 'dim-salud-f', name: 'Salud física', value: 7 },
	{ id: 'dim-salud-m', name: 'Salud mental', value: 8 },
	{ id: 'dim-fam', name: 'Familia', value: 9 },
	{ id: 'dim-rel', name: 'Relaciones sociales', value: 6 },
	{ id: 'dim-car', name: 'Carrera', value: 8 },
	{ id: 'dim-fin', name: 'Finanzas', value: 5 },
	{ id: 'dim-con', name: 'Conocimiento', value: 9 },
	{ id: 'dim-cre', name: 'Creatividad', value: 7 },
	{ id: 'dim-pro', name: 'Propósito', value: 8 },
	{ id: 'dim-hob', name: 'Hobbies', value: 6 },
];

function isPastDeadline(d?: string): boolean {
	if (!d) return false;
	const t = Date.parse(d);
	if (Number.isNaN(t)) return false;
	return t < Date.now() - 86400000;
}

export default function PersonalDashboard() {
	const [active, setActive] = useState<string>('indicadores');
	const forceUntil = useRef<number>(0);

	// 01 — Indicadores (temporales)
	const [indicadores, setIndicadores] = useState<Indicador[]>(DEFAULT_INDICADORES);

	const updateIndicador = (id: string, patch: Partial<Indicador>) =>
		setIndicadores((prev) => prev.map((i) => (i.id === id ? { ...i, ...patch } : i)));

	const resetIndicadores = () => {
		setIndicadores([...DEFAULT_INDICADORES.map((d) => ({ ...d }))]);
	};

	const indicadoresActivos = indicadores.filter((i) => i.status !== 'paused');
	const indicadoresAvg =
		indicadoresActivos.length === 0
			? 0
			: indicadoresActivos.reduce(
					(acc, i) => acc + Math.min(100, (i.value / Math.max(1, i.target)) * 100),
					0
				) / indicadoresActivos.length;

	// 02 — Dimensiones (temporales)
	const [dimensiones, setDimensiones] = useState<Dimension[]>(DEFAULT_DIMENSIONES);

	const updateDimension = (id: string, patch: Partial<Dimension>) =>
		setDimensiones((prev) => prev.map((d) => (d.id === id ? { ...d, ...patch } : d)));

	const resetDimensiones = () => {
		setDimensiones([...DEFAULT_DIMENSIONES.map((d) => ({ ...d }))]);
	};
	const [umbral, setUmbral] = usePersistedState<number>('personal:umbral', 8);

	const excelentes = dimensiones.filter((d) => d.value >= umbral).length;

	// 03 — Cómo ser conocido
	const [stages, setStages] = useState<Stage[]>([
		{ name: 'Visibilidad', value: 60, desc: 'Presencia online + contenido publicado' },
		{ name: 'Reputación', value: 40, desc: 'Consistencia + calidad sostenida' },
		{ name: 'Autoridad', value: 25, desc: 'Contribución única reconocida' },
		{ name: 'Reconocimiento', value: 10, desc: 'Citas, invitaciones, oportunidades inbound' },
	]);

	// 04 — Tipo de Inteligencia
	const [intelligences, setIntelligences] = useState<Intel[]>([
		{ name: 'Lingüística', value: 7 },
		{ name: 'Lógico-Matemática', value: 9 },
		{ name: 'Espacial', value: 6 },
		{ name: 'Musical', value: 5 },
		{ name: 'Kinestésica', value: 4 },
		{ name: 'Interpersonal', value: 6 },
		{ name: 'Intrapersonal', value: 8 },
		{ name: 'Naturalista', value: 5 },
	]);

	const dominante = useMemo(
		() =>
			intelligences.reduce((max, i) => (i.value > max.value ? i : max), intelligences[0]),
		[intelligences]
	);

	// 05 — Capital Intelectual
	const [cursosAprobados, setCursosAprobados] = useState(4);
	const [autoevaluacionTeorica, setAutoevaluacionTeorica] = useState(7);
	const [proyectosTecnicos, setProyectosTecnicos] = useState(3);
	const [experienciaAnios, setExperienciaAnios] = useState(1);
	const [evaluacionTecnica, setEvaluacionTecnica] = useState(8);
	const [tiempoResolucion, setTiempoResolucion] = useState(30);
	const [calidadResultado, setCalidadResultado] = useState(8);
	const [feedback, setFeedback] = useState(8);

	const conocimiento = ((cursosAprobados / 5) * 100 + autoevaluacionTeorica * 10) / 2;
	const habilidades =
		((proyectosTecnicos / 5) * 100 +
			(experienciaAnios / 5) * 100 +
			evaluacionTecnica * 10) /
		3;
	const destrezas =
		(100 - tiempoResolucion * 2 + calidadResultado * 10 + feedback * 10) / 3;
	const capitalHumano = (conocimiento + habilidades + destrezas) / 3;

	const [contactosRelevantes, setContactosRelevantes] = useState(10);
	const [interaccionesMensuales, setInteraccionesMensuales] = useState(10);
	const [gruposProfesionales, setGruposProfesionales] = useState(2);
	const [proyectosColaborativos, setProyectosColaborativos] = useState(3);
	const [aporteSignificativo, setAporteSignificativo] = useState(3);
	const [impactoPerceptible, setImpactoPerceptible] = useState(3);
	const [recomendacionesEscritas, setRecomendacionesEscritas] = useState(2);
	const [testimonios, setTestimonios] = useState(1);
	const [reconocimientosPublicos, setReconocimientosPublicos] = useState(1);

	const redes =
		((contactosRelevantes / 200) * 100 +
			interaccionesMensuales * 5 +
			gruposProfesionales * 10) /
		3;
	const colaboraciones =
		((proyectosColaborativos / 5) * 100 +
			(aporteSignificativo / 5) * 100 +
			(impactoPerceptible / 5) * 100) /
		3;
	const recomendaciones =
		((recomendacionesEscritas / 5) * 100 +
			(testimonios / 5) * 100 +
			(reconocimientosPublicos / 5) * 100) /
		3;
	const capitalRelacional = (redes + colaboraciones + recomendaciones) / 3;

	const [velocidadAprendizaje, setVelocidadAprendizaje] = useState(4);
	const [resiliencia, setResiliencia] = useState(3);
	const [flexibilidad, setFlexibilidad] = useState(3);
	const [usoMetodologias, setUsoMetodologias] = useState(3);
	const [productividadDiaria, setProductividadDiaria] = useState(7);
	const [metasAlcanzadas, setMetasAlcanzadas] = useState(80);
	const [analisisPrevio, setAnalisisPrevio] = useState(4);
	const [creatividadSolucion, setCreatividadSolucion] = useState(4);
	const [eficaciaSolucion, setEficaciaSolucion] = useState(4);

	const adaptabilidad =
		((velocidadAprendizaje / 5) * 100 +
			(resiliencia / 5) * 100 +
			(flexibilidad / 5) * 100) /
		3;
	const organizacion =
		((usoMetodologias / 3) * 100 + productividadDiaria * 10 + metasAlcanzadas) / 3;
	const resolucion =
		((analisisPrevio / 5) * 100 +
			(creatividadSolucion / 5) * 100 +
			(eficaciaSolucion / 5) * 100) /
		3;
	const capitalEstructural = (adaptabilidad + organizacion + resolucion) / 3;

	const capitalIntelectualTotal =
		capitalHumano * 0.4 + capitalRelacional * 0.3 + capitalEstructural * 0.3;

	// Scroll spy (paused right after a click so the click selection wins)
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (Date.now() < forceUntil.current) return;
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
				if (visible[0]) setActive(visible[0].target.id);
			},
			{ rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
		);
		SECTIONS.forEach((s) => {
			const el = document.getElementById(s.id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
		e.preventDefault();
		setActive(id);
		forceUntil.current = Date.now() + 900;
		const el = document.getElementById(id);
		if (el) {
			const top = el.getBoundingClientRect().top + window.scrollY - 90;
			window.scrollTo({ top, behavior: 'smooth' });
		}
		if (history.replaceState) history.replaceState(null, '', `#${id}`);
	};

	return (
		<div className="dash">
			<aside className="dash-sidebar">
				<div className="dash-sidebar-title">
					<span className="dash-brand">MI</span>
					<span>Dashboard</span>
				</div>
				<nav className="dash-nav">
					{SECTIONS.map((s) => (
						<a
							key={s.id}
							href={`#${s.id}`}
							className={`dash-nav-item ${active === s.id ? 'is-active' : ''}`}
							onClick={(e) => handleNavClick(e, s.id)}
						>
							<span className="dash-nav-code">{s.code}</span>
							<span>{s.label}</span>
						</a>
					))}
				</nav>
				<div className="dash-sidebar-foot">
					<div className="dash-kpi">
						<span>Indicadores</span>
						<strong>{indicadoresAvg.toFixed(0)}%</strong>
					</div>
					<div className="dash-kpi">
						<span>Excelencia</span>
						<strong>
							{excelentes}/{dimensiones.length}
						</strong>
					</div>
					<div className="dash-kpi">
						<span>Capital Int.</span>
						<strong>{capitalIntelectualTotal.toFixed(0)}%</strong>
					</div>
				</div>
			</aside>

			<main className="dash-main">
				<header className="dash-header">
					<h1>Personal Dashboard</h1>
					<p>Leunel Aquino Davila — sistema de gestión integral</p>
				</header>

				{/* 01 — Indicadores */}
				<section id="indicadores" className="dash-section">
					<h2 className="dash-section-title">
						<span className="dash-section-code">01</span> Indicadores · Objetivos dinámicos
					</h2>
					<p className="dash-section-desc">
						Los indicadores miden objetivos puntuales — no son fijos. Edítalos, fíjales una
						fecha límite y archívalos cuando dejen de ser relevantes para tomar decisiones
						informadas.
					</p>

					<div className="dash-ind-list">
						{indicadores.map((ind) => {
							const pct = Math.min(100, (ind.value / Math.max(1, ind.target)) * 100);
							const overdue = isPastDeadline(ind.deadline) && ind.status === 'active';
							const done = ind.status === 'done' || pct >= 100;
							return (
								<div
									key={ind.id}
									className={`dash-ind-card ${done ? 'is-done' : ''} ${
										overdue ? 'is-overdue' : ''
									} ${ind.status === 'paused' ? 'is-paused' : ''}`}
								>
									<div className="dash-ind-head">
										<input
											type="text"
											className="dash-ind-name"
											value={ind.name}
											readOnly
											aria-label="Nombre del indicador"
										/>
									</div>

									<div className="dash-ind-body">
										<input
											type="number"
											className="dash-ind-num"
											value={ind.value}
											onChange={(e) =>
												updateIndicador(ind.id, {
													value: parseFloat(e.target.value) || 0,
												})
											}
											aria-label="Valor actual"
										/>
										<span className="dash-ind-sep">/</span>
										<input
											type="number"
											className="dash-ind-num"
											value={ind.target}
											onChange={(e) =>
												updateIndicador(ind.id, {
													target: parseFloat(e.target.value) || 1,
												})
											}
											aria-label="Objetivo"
										/>
										<input
											type="text"
											className="dash-ind-unit"
											value={ind.unit}
											readOnly
											aria-label="Unidad"
										/>
										<input
											type="date"
											className="dash-ind-deadline"
											value={ind.deadline ?? ''}
											readOnly
											aria-label="Fecha límite"
										/>
										<span className="dash-ind-pct">{pct.toFixed(0)}%</span>
									</div>

									<svg
										viewBox="0 0 100 6"
										preserveAspectRatio="none"
										className="dash-ind-bar"
									>
										<rect x="0" y="0" width="100" height="6" className="dash-bar-bg" />
										<rect
											x="0"
											y="0"
											width={pct}
											height="6"
											className="dash-bar-fill"
										/>
									</svg>

									<div className="dash-ind-tags">
										{done && <span className="dash-tag dash-tag-done">Completado</span>}
										{overdue && (
											<span className="dash-tag dash-tag-overdue">Vencido</span>
										)}
										{ind.status === 'paused' && (
											<span className="dash-tag dash-tag-paused">Pausado</span>
										)}
									</div>
								</div>
							);
						})}


						<div className="dash-ind-actions">
							<button
								className="dash-reset"
								onClick={resetIndicadores}
								title="Restaurar a los valores por defecto"
							>
								↺ Valores por defecto
							</button>
						</div>
					</div>

					<div className="dash-summary">
						Promedio activos: <strong>{indicadoresAvg.toFixed(1)}%</strong>{' '}
						<span className="dash-summary-meta">
							· {indicadoresActivos.length} activos / {indicadores.length} totales
						</span>
					</div>
				</section>

				{/* 02 — Dimensiones */}
				<section id="dimensiones" className="dash-section">
					<h2 className="dash-section-title">
						<span className="dash-section-code">02</span> Dimensiones · Excelencia
					</h2>
					<p className="dash-section-desc">
						¿En cuántas dimensiones de la vida soy excelente? Define tu umbral y autocalifica
						cada dimensión (0–10). Sólo las que alcancen el umbral cuentan como excelencia.
					</p>

					<div className="dash-dim-stat">
						<div className="dash-dim-stat-num">
							<strong>{excelentes}</strong>
							<span>/ {dimensiones.length}</span>
						</div>
						<div className="dash-dim-stat-label">
							dimensiones en
							<br />
							<em>excelencia</em>
						</div>
						<div className="dash-dim-blocks" aria-hidden>
							{dimensiones.map((d) => (
								<span
									key={d.id}
									className={`dash-dim-block ${d.value >= umbral ? 'is-on' : ''}`}
									title={`${d.name}: ${d.value}/10`}
								/>
							))}
						</div>
						<div className="dash-dim-thresh">
							<label>Umbral</label>
							<input
								type="number"
								min={1}
								max={10}
								value={umbral}
								onChange={(e) =>
									setUmbral(Math.max(1, Math.min(10, parseInt(e.target.value) || 8)))
								}
							/>
							<span>/ 10</span>
						</div>
					</div>

					<div className="dash-dim-grid">
						{dimensiones.map((d) => {
							const isExcellent = d.value >= umbral;
							return (
								<div
									key={d.id}
									className={`dash-dim-card ${isExcellent ? 'is-excellent' : ''}`}
								>
									<div className="dash-dim-head">
										<input
											type="text"
											value={d.name}
											readOnly
											aria-label="Nombre de la dimensión"
										/>
									</div>
									<div className="dash-dim-score">
										<span className="dash-dim-num">{d.value}</span>
										<span className="dash-dim-max">/10</span>
									</div>
									<input
										type="range"
										min={0}
										max={10}
										value={d.value}
										onChange={(e) =>
											updateDimension(d.id, { value: parseInt(e.target.value) })
										}
									/>
									{isExcellent && <div className="dash-dim-badge">EXCELENCIA</div>}
								</div>
							);
						})}
					</div>

					<div className="dash-ind-actions">
						<button
							className="dash-reset"
							onClick={resetDimensiones}
							title="Restaurar a los valores por defecto"
						>
							↺ Valores por defecto
						</button>
					</div>
				</section>

				{/* 03 — Cómo ser conocido */}
				<section id="conocido" className="dash-section">
					<h2 className="dash-section-title">
						<span className="dash-section-code">03</span> Cómo ser conocido
					</h2>
					<p className="dash-section-desc">
						El embudo del reconocimiento: pocos pasan de la visibilidad al reconocimiento
						real. Cada nivel exige el anterior.
					</p>

					<div className="dash-funnel-wrap">
						<svg
							viewBox="0 0 400 280"
							className="dash-funnel"
							preserveAspectRatio="xMidYMid meet"
						>
							{stages.map((s, i) => {
								const maxW = 360 - i * 70;
								const x = (400 - maxW) / 2;
								const y = i * 64 + 6;
								const fillW = maxW * (s.value / 100);
								return (
									<g key={i}>
										<rect
											x={x}
											y={y}
											width={maxW}
											height="56"
											className="dash-funnel-bg"
										/>
										<rect
											x={x}
											y={y}
											width={fillW}
											height="56"
											className="dash-funnel-fill"
										/>
										<text x="200" y={y + 33} textAnchor="middle" className="dash-funnel-label">
											{s.name.toUpperCase()} — {s.value}%
										</text>
									</g>
								);
							})}
						</svg>

						<div className="dash-funnel-controls">
							{stages.map((s, i) => (
								<div key={i} className="dash-funnel-row">
									<div className="dash-funnel-row-head">
										<span className="dash-funnel-row-name">{s.name}</span>
										<span className="dash-funnel-row-val">{s.value}%</span>
									</div>
									<p className="dash-funnel-row-desc">{s.desc}</p>
									<input
										type="range"
										min={0}
										max={100}
										value={s.value}
										onChange={(e) =>
											setStages((prev) => {
												const next = [...prev];
												next[i] = { ...next[i], value: parseInt(e.target.value) };
												return next;
											})
										}
									/>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* 04 — Tipo de Inteligencia */}
				<section id="inteligencia" className="dash-section">
					<h2 className="dash-section-title">
						<span className="dash-section-code">04</span> Tipo de Inteligencia
					</h2>
					<p className="dash-section-desc">
						Las 8 inteligencias múltiples de Howard Gardner. Ajusta cada eje (0–10) y observa
						el polígono de tu perfil cognitivo.
					</p>

					<div className="dash-radar-wrap">
						<svg
							viewBox="-160 -160 320 320"
							className="dash-radar"
							preserveAspectRatio="xMidYMid meet"
						>
							{[2, 4, 6, 8, 10].map((r) => (
								<polygon
									key={r}
									points={polygonPoints(new Array(8).fill(r), () => r * 12)}
									className="dash-radar-grid"
								/>
							))}
							{intelligences.map((_, i) => {
								const angle = (i / 8) * 2 * Math.PI - Math.PI / 2;
								const x = Math.cos(angle) * 120;
								const y = Math.sin(angle) * 120;
								return (
									<line
										key={i}
										x1={0}
										y1={0}
										x2={x.toFixed(2)}
										y2={y.toFixed(2)}
										className="dash-radar-axis"
									/>
								);
							})}
							<polygon
								points={polygonPoints(
									intelligences.map((it) => it.value),
									(v) => v * 12
								)}
								className="dash-radar-data"
							/>
							{intelligences.map((it, i) => {
								const angle = (i / 8) * 2 * Math.PI - Math.PI / 2;
								const cx = Math.cos(angle) * (it.value * 12);
								const cy = Math.sin(angle) * (it.value * 12);
								return (
									<circle
										key={`pt-${i}`}
										cx={cx.toFixed(2)}
										cy={cy.toFixed(2)}
										r={3}
										className="dash-radar-point"
									/>
								);
							})}
							{intelligences.map((it, i) => {
								const angle = (i / 8) * 2 * Math.PI - Math.PI / 2;
								const x = Math.cos(angle) * 142;
								const y = Math.sin(angle) * 142;
								return (
									<text
										key={`lbl-${i}`}
										x={x.toFixed(2)}
										y={y.toFixed(2)}
										textAnchor="middle"
										dominantBaseline="middle"
										className="dash-radar-label"
									>
										{it.name}
									</text>
								);
							})}
						</svg>

						<div className="dash-radar-controls">
							{intelligences.map((it, i) => (
								<div key={i} className="dash-radar-row">
									<label>{it.name}</label>
									<input
										type="range"
										min={0}
										max={10}
										value={it.value}
										onChange={(e) =>
											setIntelligences((prev) => {
												const next = [...prev];
												next[i] = { ...next[i], value: parseInt(e.target.value) };
												return next;
											})
										}
									/>
									<span>{it.value}/10</span>
								</div>
							))}
						</div>
					</div>

					<div className="dash-summary">
						Inteligencia dominante: <strong>{dominante.name}</strong> ({dominante.value}/10)
					</div>
				</section>

				{/* 05 — Capital Intelectual */}
				<section id="capital" className="dash-section">
					<h2 className="dash-section-title">
						<span className="dash-section-code">05</span> Capital Intelectual
					</h2>
					<p className="dash-section-desc" style={{ fontFamily: 'monospace', fontSize: '1.05em' }}>
						CI = (CH × 0.4) + (CR × 0.3) + (CE × 0.3)
					</p>

					<div className="dash-ci-block">
						<div className="dash-ci-block-head">
							<h3>Capital Humano</h3>
							<span className="dash-ci-block-val">{capitalHumano.toFixed(1)}%</span>
						</div>

						<div className="dash-ci-grid">
							<div className="dash-ci-input">
								<label>Cursos aprobados (0-5)</label>
								<input
									type="number"
									min={0}
									max={5}
									value={cursosAprobados}
									onChange={(e) => setCursosAprobados(parseInt(e.target.value) || 0)}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Autoevaluación teórica (1-10)</label>
								<input
									type="number"
									min={1}
									max={10}
									value={autoevaluacionTeorica}
									onChange={(e) =>
										setAutoevaluacionTeorica(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Proyectos técnicos (0-20)</label>
								<input
									type="number"
									min={0}
									max={20}
									value={proyectosTecnicos}
									onChange={(e) =>
										setProyectosTecnicos(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Años de experiencia</label>
								<input
									type="number"
									min={0}
									max={10}
									value={experienciaAnios}
									onChange={(e) =>
										setExperienciaAnios(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Evaluación técnica (1-10)</label>
								<input
									type="number"
									min={1}
									max={10}
									value={evaluacionTecnica}
									onChange={(e) =>
										setEvaluacionTecnica(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Tiempo resolución (min)</label>
								<input
									type="number"
									min={1}
									max={120}
									value={tiempoResolucion}
									onChange={(e) =>
										setTiempoResolucion(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Calidad resultado (1-10)</label>
								<input
									type="number"
									min={1}
									max={10}
									value={calidadResultado}
									onChange={(e) =>
										setCalidadResultado(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Feedback (1-10)</label>
								<input
									type="number"
									min={1}
									max={10}
									value={feedback}
									onChange={(e) => setFeedback(parseInt(e.target.value) || 0)}
								/>
							</div>
						</div>

						<div className="dash-ci-cats">
							<div className="dash-ci-cat">
								<span>Conocimiento</span>
								<strong>{conocimiento.toFixed(0)}%</strong>
							</div>
							<div className="dash-ci-cat">
								<span>Habilidades</span>
								<strong>{habilidades.toFixed(0)}%</strong>
							</div>
							<div className="dash-ci-cat">
								<span>Destrezas</span>
								<strong>{destrezas.toFixed(0)}%</strong>
							</div>
						</div>
					</div>

					<div className="dash-ci-block">
						<div className="dash-ci-block-head">
							<h3>Capital Relacional</h3>
							<span className="dash-ci-block-val">{capitalRelacional.toFixed(1)}%</span>
						</div>

						<div className="dash-ci-grid">
							<div className="dash-ci-input">
								<label>Contactos relevantes</label>
								<input
									type="number"
									min={0}
									max={200}
									value={contactosRelevantes}
									onChange={(e) =>
										setContactosRelevantes(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Interacciones mensuales</label>
								<input
									type="number"
									min={0}
									max={30}
									value={interaccionesMensuales}
									onChange={(e) =>
										setInteraccionesMensuales(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Grupos profesionales</label>
								<input
									type="number"
									min={0}
									max={10}
									value={gruposProfesionales}
									onChange={(e) =>
										setGruposProfesionales(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Proyectos colaborativos</label>
								<input
									type="number"
									min={0}
									max={10}
									value={proyectosColaborativos}
									onChange={(e) =>
										setProyectosColaborativos(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Aporte significativo (0-5)</label>
								<input
									type="number"
									min={0}
									max={5}
									value={aporteSignificativo}
									onChange={(e) =>
										setAporteSignificativo(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Impacto perceptible (0-5)</label>
								<input
									type="number"
									min={0}
									max={5}
									value={impactoPerceptible}
									onChange={(e) =>
										setImpactoPerceptible(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Recomendaciones escritas</label>
								<input
									type="number"
									min={0}
									max={5}
									value={recomendacionesEscritas}
									onChange={(e) =>
										setRecomendacionesEscritas(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Testimonios</label>
								<input
									type="number"
									min={0}
									max={5}
									value={testimonios}
									onChange={(e) => setTestimonios(parseInt(e.target.value) || 0)}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Reconocimientos públicos</label>
								<input
									type="number"
									min={0}
									max={5}
									value={reconocimientosPublicos}
									onChange={(e) =>
										setReconocimientosPublicos(parseInt(e.target.value) || 0)
									}
								/>
							</div>
						</div>

						<div className="dash-ci-cats">
							<div className="dash-ci-cat">
								<span>Redes</span>
								<strong>{redes.toFixed(0)}%</strong>
							</div>
							<div className="dash-ci-cat">
								<span>Colaboraciones</span>
								<strong>{colaboraciones.toFixed(0)}%</strong>
							</div>
							<div className="dash-ci-cat">
								<span>Recomendaciones</span>
								<strong>{recomendaciones.toFixed(0)}%</strong>
							</div>
						</div>
					</div>

					<div className="dash-ci-block">
						<div className="dash-ci-block-head">
							<h3>Capital Estructural</h3>
							<span className="dash-ci-block-val">{capitalEstructural.toFixed(1)}%</span>
						</div>

						<div className="dash-ci-grid">
							<div className="dash-ci-input">
								<label>Velocidad aprendizaje (1-5)</label>
								<input
									type="number"
									min={1}
									max={5}
									value={velocidadAprendizaje}
									onChange={(e) =>
										setVelocidadAprendizaje(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Resiliencia (1-5)</label>
								<input
									type="number"
									min={1}
									max={5}
									value={resiliencia}
									onChange={(e) => setResiliencia(parseInt(e.target.value) || 0)}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Flexibilidad (1-5)</label>
								<input
									type="number"
									min={1}
									max={5}
									value={flexibilidad}
									onChange={(e) => setFlexibilidad(parseInt(e.target.value) || 0)}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Uso metodologías (1-3)</label>
								<input
									type="number"
									min={1}
									max={3}
									value={usoMetodologias}
									onChange={(e) =>
										setUsoMetodologias(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Productividad diaria (1-10)</label>
								<input
									type="number"
									min={1}
									max={10}
									value={productividadDiaria}
									onChange={(e) =>
										setProductividadDiaria(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Metas alcanzadas (%)</label>
								<input
									type="number"
									min={0}
									max={100}
									value={metasAlcanzadas}
									onChange={(e) =>
										setMetasAlcanzadas(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Análisis previo (1-5)</label>
								<input
									type="number"
									min={1}
									max={5}
									value={analisisPrevio}
									onChange={(e) =>
										setAnalisisPrevio(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Creatividad solución (1-5)</label>
								<input
									type="number"
									min={1}
									max={5}
									value={creatividadSolucion}
									onChange={(e) =>
										setCreatividadSolucion(parseInt(e.target.value) || 0)
									}
								/>
							</div>
							<div className="dash-ci-input">
								<label>Eficacia solución (1-5)</label>
								<input
									type="number"
									min={1}
									max={5}
									value={eficaciaSolucion}
									onChange={(e) =>
										setEficaciaSolucion(parseInt(e.target.value) || 0)
									}
								/>
							</div>
						</div>

						<div className="dash-ci-cats">
							<div className="dash-ci-cat">
								<span>Adaptabilidad</span>
								<strong>{adaptabilidad.toFixed(0)}%</strong>
							</div>
							<div className="dash-ci-cat">
								<span>Organización</span>
								<strong>{organizacion.toFixed(0)}%</strong>
							</div>
							<div className="dash-ci-cat">
								<span>Resolución</span>
								<strong>{resolucion.toFixed(0)}%</strong>
							</div>
						</div>
					</div>

					<div className="dash-ci-total">
						<p className="dash-ci-total-label">Capital Intelectual Total</p>
						<p className="dash-ci-total-score">{capitalIntelectualTotal.toFixed(1)}%</p>
						<div className="dash-ci-progress">
							<div
								className="dash-ci-progress-fill"
								style={{ width: `${Math.min(100, capitalIntelectualTotal)}%` }}
							/>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
