// ============================================
// OficiosYa — Jáchal, San Juan (2026)
// Lógica Frontend, Persistencia y Experiencia de Usuario
// ============================================

// --------------------------------------------
// 1. Constantes y Catálogo de Oficios en Jáchal
// --------------------------------------------
const OFICIOS = [
  { id: 'electricista', label: 'Electricidad', icon: '⚡', keywords: ['luz', 'tablero', 'termica', 'disyuntor', 'enchufe', 'cable'] },
  { id: 'plomero', label: 'Plomería y Sanitarios', icon: '🔧', keywords: ['agua', 'caño', 'perdida', 'canilla', 'inodoro', 'tanque', 'bomba'] },
  { id: 'gasista', label: 'Gasista Matriculado', icon: '🔥', keywords: ['gas', 'calefon', 'termotanque', 'estufa', 'cocina', 'rejilla', 'matricula'] },
  { id: 'albanil', label: 'Albañilería y Obras', icon: '🧱', keywords: ['construccion', 'pared', 'revoque', 'piso', 'ceramico', 'ampliacion', 'techo'] },
  { id: 'pintor', label: 'Pintura y Revestimientos', icon: '🎨', keywords: ['pintura', 'latex', 'frente', 'humedad', 'enduido', 'impermeabilizante'] },
  { id: 'tecnico', label: 'Cámaras, Redes y Soporte ', icon: '💻', keywords: ['camara', 'seguridad', 'wifi', 'internet', 'red', 'computadora', 'tecnico'] },
  { id: 'refrigeracion', label: 'Climatización y A/A', icon: '❄️', keywords: ['aire', 'split', 'frio', 'calor', 'gas refrigerante', 'mantenimiento'] },
  { id: 'herrero', label: 'Herrería y Carpintería Metálica', icon: '⚒️', keywords: ['rejas', 'porton', 'soldadura', 'hierro', 'tinglado', 'alambre'] },
  { id: 'cerrajero', label: 'Cerrajería y Guardias', icon: '🔑', keywords: ['cerradura', 'llave', 'candado', 'puerta', 'cerrojo', 'urgencia'] },
  { id: 'jardinero', label: 'Parques y Poda', icon: '🌿', keywords: ['pasto', 'jardin', 'poda', 'plantas', 'riego', 'limpieza de terreno'] },
];

const DISTRITOS_JACHAL = [
  'San José (Centro)',
  'Pampa Vieja',
  'Villa Mercedes',
  'Huaco',
  'Mogna',
  'Niquivil',
  'El Rincón',
  'Gran China',
  'Otra Banda',
];

// Imágenes de muestra en alta definición para portfolios de oficios
const MOCK_PHOTOS = {
  electricista: [
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1558441719-f2c9ff5d7543?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=80',
  ],
  plomero: [
    'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&auto=format&fit=crop&q=80',
  ],
  gasista: [
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&auto=format&fit=crop&q=80',
  ],
  albanil: [
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&auto=format&fit=crop&q=80',
  ],
  pintor: [
    'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&auto=format&fit=crop&q=80',
  ],
  tecnico: [
    'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=500&auto=format&fit=crop&q=80',
  ],
  refrigeracion: [
    'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&auto=format&fit=crop&q=80',
  ],
  herrero: [
    'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=500&auto=format&fit=crop&q=80',
  ],
  cerrajero: [
    'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=500&auto=format&fit=crop&q=80',
  ],
  jardinero: [
    'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?w=500&auto=format&fit=crop&q=80',
  ],
};

// --------------------------------------------
// 2. Base de Datos Inicial de Trabajadores Fundadores (Jáchal)
// --------------------------------------------
const TRABAJADORES_INICIALES = [
  {
    id: 1,
    nombre: 'Facundo Santana (JaTech)',
    oficio: 'electricista',
    zona: 'Centro',
    telefono: '2645123401',
    matriculado: false,
    urgencias: true,
    destacado: true,
    precioRef: 'Presupuesto sin cargo en San José',
    bio: 'Electricidad domiciliaria, armado de tableros, cámaras de seguridad IP y redes Wi-Fi. 4 años de experiencia en Jáchal.',
    fotos: MOCK_PHOTOS.electricista,
    resenas: 3,
    promedio: null, // Regla de 5 reseñas: aún no muestra promedio
    reviews: [
      { autor: 'Carlos M.', calificacion: 5, fecha: '2026-02-10', texto: 'Instaló las cámaras de mi negocio y configuró todo en el celular. Impecable atención.' },
      { autor: 'Graciela V.', calificacion: 5, fecha: '2026-02-28', texto: 'Resolvió un cortocircuito en el tablero principal un sábado por la tarde. Muy recomendable.' },
      { autor: 'Jorge R.', calificacion: 4, fecha: '2026-03-02', texto: 'Puntual y prolijo con el cableado de la cocina.' },
    ]
  },
  {
    id: 2,
    nombre: 'Diego Aguilar',
    oficio: 'gasista',
    zona: 'Pampa Vieja',
    telefono: '2645123402',
    matriculado: true,
    urgencias: false,
    destacado: true,
    precioRef: 'Visita de diagnóstico: $15.000',
    bio: 'Gasista matriculado y técnico electricista con más de 8 años en obras domiciliarias e instalaciones de gas envasado y natural.',
    fotos: MOCK_PHOTOS.gasista,
    resenas: 8,
    promedio: 4.8,
    reviews: [
      { autor: 'Mariano Gonzalez', calificacion: 5, fecha: '2026-01-14', texto: 'Instaló el calefón rápido y muy prolijo. Hizo la prueba de hermeticidad con certificado.' },
      { autor: 'Juan Pedro Quiroga', calificacion: 5, fecha: '2026-01-29', texto: 'Cumplió el horario acordado y me explicó todo con claridad. Excelente profesional.' },
      { autor: 'Lucía P.', calificacion: 5, fecha: '2026-02-05', texto: 'Revisó la instalación completa antes del invierno. Da mucha tranquilidad.' },
      { autor: 'Martín T.', calificacion: 4, fecha: '2026-02-18', texto: 'Buen trabajo, materiales de calidad.' },
      { autor: 'Estela S.', calificacion: 5, fecha: '2026-02-25', texto: 'Totalmente de confianza, muy recomendable para todo Pampa Vieja y Centro.' },
    ]
  },
  {
    id: 3,
    nombre: 'Rubén Molina',
    oficio: 'plomero',
    zona: 'Centro',
    telefono: '2645123403',
    matriculado: false,
    urgencias: true,
    destacado: false,
    precioRef: 'A convenir según arreglo',
    bio: 'Plomería en general, termofusión, destapes de cañerías urgentes y cambio de griferías.',
    fotos: MOCK_PHOTOS.plomero,
    resenas: 6,
    promedio: 4.2,
    reviews: [
      { autor: 'Ana Laura', calificacion: 5, fecha: '2026-01-10', texto: 'Resolvió una pérdida bajo la mesada que otro plomero no pudo encontrar.' },
      { autor: 'Gustavo B.', calificacion: 4, fecha: '2026-02-01', texto: 'Vino rápido ante una emergencia con la bomba de agua.' },
      { autor: 'Pedro M.', calificacion: 4, fecha: '2026-02-12', texto: 'Buen precio y prolijo.' },
    ]
  },
  {
    id: 4,
    nombre: 'Marcelo Ríos',
    oficio: 'albanil',
    zona: 'Huaco',
    telefono: '2645123404',
    matriculado: false,
    urgencias: false,
    destacado: false,
    precioRef: 'Presupuestos por metro cuadrado',
    bio: 'Albañilería tradicional, revoques finos y gruesos, colocación de cerámicos y ampliaciones de casas.',
    fotos: MOCK_PHOTOS.albanil,
    resenas: 2,
    promedio: null, // Regla de 5
    reviews: [
      { autor: 'Mariano G.', calificacion: 5, fecha: '2026-02-04', texto: 'Hizo la base para la galería en Huaco, quedó excelente.' }
    ]
  },
  {
    id: 5,
    nombre: 'Silvina Toro',
    oficio: 'pintor',
    zona: 'Mogna',
    telefono: '2645123405',
    matriculado: false,
    urgencias: false,
    destacado: true,
    precioRef: 'Presupuesto sin cargo',
    bio: 'Pintura de interiores y exteriores, tratamiento de humedad de cimientos y terminaciones decorativas.',
    fotos: MOCK_PHOTOS.pintor,
    resenas: 5,
    promedio: 4.6,
    reviews: [
      { autor: 'Carla Morales', calificacion: 5, fecha: '2026-01-20', texto: 'Dejó las paredes impecables y cuidó todos los muebles. Muy limpia para trabajar.' },
      { autor: 'Rosa F.', calificacion: 4, fecha: '2026-02-11', texto: 'Excelente mano de obra en el frente de la casa.' },
      { autor: 'Daniel C.', calificacion: 5, fecha: '2026-02-19', texto: 'Súper detallista, muy conforme con el resultado.' },
    ]
  },
  {
    id: 6,
    nombre: 'Carlos "Tato" Balmaceda',
    oficio: 'herrero',
    zona: 'Villa Mercedes',
    telefono: '2645123406',
    matriculado: false,
    urgencias: false,
    destacado: false,
    precioRef: 'Presupuesto a medida con materiales incluidos',
    bio: 'Herrería artesanal y de obra: rejas de seguridad, portones corredizos, estructuras para techos y tinglados.',
    fotos: MOCK_PHOTOS.herrero,
    resenas: 7,
    promedio: 4.9,
    reviews: [
      { autor: 'Oscar D.', calificacion: 5, fecha: '2026-01-18', texto: 'Hizo el portón corredizo para la finca en Villa Mercedes. Muy robusto y bien terminado.' },
      { autor: 'Claudia M.', calificacion: 5, fecha: '2026-02-08', texto: 'Cumplió exactamente en la fecha prometida. 10 puntos.' },
    ]
  },
  {
    id: 7,
    nombre: 'Nadia Ponce',
    oficio: 'plomero',
    zona: 'Niquivil',
    telefono: '2645123407',
    matriculado: false,
    urgencias: true,
    destacado: false,
    precioRef: 'Consultas por WhatsApp',
    bio: 'Instalaciones sanitarias, colocación de tanques de reserva, grifería mono-comando y mantenimiento general.',
    fotos: MOCK_PHOTOS.plomero,
    resenas: 1,
    promedio: null,
    reviews: [
      { autor: 'Fabiana Z.', calificacion: 5, fecha: '2026-03-01', texto: 'Muy atenta y rápida respuesta para Niquivil.' }
    ]
  },
  {
    id: 8,
    nombre: 'Hugo Farías',
    oficio: 'electricista',
    zona: 'Pampa Vieja',
    telefono: '2645123408',
    matriculado: true,
    urgencias: true,
    destacado: false,
    precioRef: 'Visita técnica $12.000',
    bio: 'Instalaciones monofásicas y trifásicas, bombas sumergibles para fincas y pozos, tableros con protección térmica.',
    fotos: MOCK_PHOTOS.electricista,
    resenas: 3,
    promedio: null,
    reviews: []
  },
  {
    id: 9,
    nombre: 'Roberto Carrizo',
    oficio: 'cerrajero',
    zona: 'Centro',
    telefono: '2645123409',
    matriculado: false,
    urgencias: true,
    destacado: true,
    precioRef: 'Guardias de urgencia 24hs',
    bio: 'Apertura de casas y autos sin rotura, cambio de combinaciones, instalación de cerrojos de alta seguridad.',
    fotos: MOCK_PHOTOS.cerrajero,
    resenas: 9,
    promedio: 4.7,
    reviews: [
      { autor: 'Gonzalo P.', calificacion: 5, fecha: '2026-01-05', texto: 'Me salvó a las 23hs un domingo que me quedé afuera. Llegó en 15 minutos.' },
      { autor: 'Mirta L.', calificacion: 4, fecha: '2026-02-14', texto: 'Cambió la cerradura de entrada con rapidez y prolijidad.' },
    ]
  },
  {
    id: 10,
    nombre: 'Andrea Morales (ClimaJáchal)',
    oficio: 'refrigeracion',
    zona: 'Centro',
    telefono: '2645123410',
    matriculado: true,
    urgencias: false,
    destacado: true,
    precioRef: 'Instalación básica desde $65.000',
    bio: 'Técnica matriculada en refrigeración. Instalación, service preventivo, carga de gas R410 y limpieza química de splits.',
    fotos: MOCK_PHOTOS.refrigeracion,
    resenas: 5,
    promedio: 5.0,
    reviews: [
      { autor: 'Lucas M.', calificacion: 5, fecha: '2026-01-22', texto: 'Instaló dos aires en mi casa. Hace vacío con bomba y deja todo perfecto.' },
      { autor: 'Valeria S.', calificacion: 5, fecha: '2026-02-15', texto: 'Super profesional y muy prolija con las canaletas y caños.' },
    ]
  },
  {
    id: 11,
    nombre: 'Gonzalo Heredia',
    oficio: 'albanil',
    zona: 'El Rincón',
    telefono: '2645123411',
    matriculado: false,
    urgencias: false,
    destacado: false,
    precioRef: 'Presupuestos en el día',
    bio: 'Trabajos de albañilería general, veredas, contrapisos, colocación de membranas asfálticas y pintura impermeabilizante.',
    fotos: MOCK_PHOTOS.albanil,
    resenas: 0,
    promedio: null,
    reviews: []
  },
  {
    id: 12,
    nombre: 'Esteban Gómez',
    oficio: 'jardinero',
    zona: 'Gran China',
    telefono: '2645123412',
    matriculado: false,
    urgencias: false,
    destacado: false,
    precioRef: 'Mantenimiento mensual o por corte',
    bio: 'Corte de césped con motoguadaña, poda de árboles frutales y ornamentales, desmalezado y limpieza de acequias.',
    fotos: MOCK_PHOTOS.jardinero,
    resenas: 6,
    promedio: 4.5,
    reviews: [
      { autor: 'Matías B.', calificacion: 5, fecha: '2026-01-30', texto: 'Limpia el terreno de la finca cada mes, muy responsable.' },
      { autor: 'Elena R.', calificacion: 4, fecha: '2026-02-20', texto: 'Buen trabajo con la poda de los olivos.' },
    ]
  }
];

// --------------------------------------------
// 3. Estado Global de la Aplicación
// --------------------------------------------
let trabajadores = [];
let filtroOficio = '';
let filtroZona = '';
let filtroKeyword = '';
let filtroMatriculado = false;
let filtroUrgencia = false;
let filtroPresupuestoSinCargo = false;
let ordenActivo = 'destacados';

let fotosEnRegistro = [];
let workerIdCounter = 100;

// --------------------------------------------
// 4. Inicialización y Eventos DOM
// --------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  inicializarTema();
  cargarTrabajadoresDesdeStorage();
  poblarSelects();
  renderChipsOficios();
  renderDirectorio();
  cablearHeader();
  cablearBuscador();
  cablearFiltrosToolbar();
  cablearQuickFiltersHero();
  cablearAsistentePresupuesto();
  cablearRegistroTrabajador();
  cablearModales();
  actualizarVistaPreviaRegistro();
});

// --------------------------------------------
// 5. Gestión del Modo Claro / Oscuro
// --------------------------------------------
function inicializarTema() {
  const guardado = localStorage.getItem('oficiosya_theme') || 'light';
  document.documentElement.setAttribute('data-theme', guardado);

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const actual = document.documentElement.getAttribute('data-theme') || 'light';
      const nuevo = actual === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', nuevo);
      localStorage.setItem('oficiosya_theme', nuevo);
      mostrarToast(nuevo === 'dark' ? 'Modo oscuro activado 🌙' : 'Modo claro activado ☀️');
    });
  }
}

// --------------------------------------------
// 6. Carga y Persistencia en LocalStorage
// --------------------------------------------
function cargarTrabajadoresDesdeStorage() {
  try {
    const raw = localStorage.getItem('oficiosya_trabajadores');
    if (raw) {
      trabajadores = JSON.parse(raw);
    } else {
      trabajadores = [...TRABAJADORES_INICIALES];
      guardarTrabajadoresEnStorage();
    }
  } catch (err) {
    console.error('Error al cargar datos locales:', err);
    trabajadores = [...TRABAJADORES_INICIALES];
  }
}

function guardarTrabajadoresEnStorage() {
  try {
    localStorage.setItem('oficiosya_trabajadores', JSON.stringify(trabajadores));
  } catch (err) {
    console.error('Error al guardar datos:', err);
  }
}

// --------------------------------------------
// 7. Población de Selects (Oficios y Zonas)
// --------------------------------------------
function poblarSelects() {
  const selectsOficios = [
    document.getElementById('oficioSelect'),
    document.getElementById('oficioInput'),
    document.getElementById('pOficio')
  ];

  selectsOficios.forEach(select => {
    if (!select) return;
    OFICIOS.forEach(of => {
      const opt = document.createElement('option');
      opt.value = of.id;
      opt.textContent = `${of.icon} ${of.label}`;
      select.appendChild(opt);
    });
  });
}

// --------------------------------------------
// 8. Navegación Header & Mobile
// --------------------------------------------
function cablearHeader() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// --------------------------------------------
// 9. Renderizado de Chips de Oficios
// --------------------------------------------
function renderChipsOficios() {
  const row = document.getElementById('chipRow');
  if (!row) return;
  row.innerHTML = '';

  // Botón "Todos"
  const totalCount = trabajadores.length;
  const chipTodos = document.createElement('button');
  chipTodos.className = `chip ${filtroOficio === '' ? 'active' : ''}`;
  chipTodos.innerHTML = `
    <span>🧰</span>
    <span>Todos los oficios</span>
    <span class="chip-count">${totalCount}</span>
  `;
  chipTodos.addEventListener('click', () => {
    filtroOficio = '';
    sincronizarFiltros();
  });
  row.appendChild(chipTodos);

  // Chips por oficio
  OFICIOS.forEach(of => {
    const count = trabajadores.filter(t => t.oficio === of.id).length;
    const chip = document.createElement('button');
    chip.className = `chip ${filtroOficio === of.id ? 'active' : ''}`;
    chip.innerHTML = `
      <span>${of.icon}</span>
      <span>${of.label}</span>
      <span class="chip-count">${count}</span>
    `;
    chip.addEventListener('click', () => {
      filtroOficio = (filtroOficio === of.id) ? '' : of.id;
      sincronizarFiltros();
    });
    row.appendChild(chip);
  });
}

// --------------------------------------------
// 10. Buscador y Filtros
// --------------------------------------------
function cablearBuscador() {
  const form = document.getElementById('searchForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    filtroKeyword = document.getElementById('searchKeyword').value.trim();
    filtroOficio = document.getElementById('oficioSelect').value;
    filtroZona = document.getElementById('zonaSelect').value;

    sincronizarFiltros();
    document.getElementById('trabajadores').scrollIntoView({ behavior: 'smooth' });
  });

  // Búsqueda en vivo al tipear con debounce
  let debounceTimeout;
  const inputKeyword = document.getElementById('searchKeyword');
  if (inputKeyword) {
    inputKeyword.addEventListener('input', (e) => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        filtroKeyword = e.target.value.trim();
        renderDirectorio();
      }, 250);
    });
  }
}

function cablearFiltrosToolbar() {
  const chkMatricula = document.getElementById('filterMatricula');
  const chkUrgencia = document.getElementById('filterUrgencia');
  const chkPresupuesto = document.getElementById('filterPresupuesto');
  const sortSelect = document.getElementById('sortSelect');
  const btnClear = document.getElementById('btnClearFilters');
  const btnReset = document.getElementById('btnResetFilters');

  if (chkMatricula) {
    chkMatricula.addEventListener('change', (e) => {
      filtroMatriculado = e.target.checked;
      renderDirectorio();
    });
  }

  if (chkUrgencia) {
    chkUrgencia.addEventListener('change', (e) => {
      filtroUrgencia = e.target.checked;
      renderDirectorio();
    });
  }

  if (chkPresupuesto) {
    chkPresupuesto.addEventListener('change', (e) => {
      filtroPresupuestoSinCargo = e.target.checked;
      renderDirectorio();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      ordenActivo = e.target.value;
      renderDirectorio();
    });
  }

  if (btnClear) btnClear.addEventListener('click', resetearTodosLosFiltros);
  if (btnReset) btnReset.addEventListener('click', resetearTodosLosFiltros);
}

function cablearQuickFiltersHero() {
  document.querySelectorAll('[data-quick-oficio]').forEach(btn => {
    btn.addEventListener('click', () => {
      filtroOficio = btn.getAttribute('data-quick-oficio');
      sincronizarFiltros();
      document.getElementById('trabajadores').scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.querySelectorAll('[data-quick-urgent]').forEach(btn => {
    btn.addEventListener('click', () => {
      filtroUrgencia = true;
      const chk = document.getElementById('filterUrgencia');
      if (chk) chk.checked = true;
      sincronizarFiltros();
      document.getElementById('trabajadores').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function sincronizarFiltros() {
  const selOficio = document.getElementById('oficioSelect');
  const selZona = document.getElementById('zonaSelect');
  const inpKeyword = document.getElementById('searchKeyword');

  if (selOficio) selOficio.value = filtroOficio;
  if (selZona) selZona.value = filtroZona;
  if (inpKeyword) inpKeyword.value = filtroKeyword;

  renderChipsOficios();
  renderDirectorio();
}

function resetearTodosLosFiltros() {
  filtroOficio = '';
  filtroZona = '';
  filtroKeyword = '';
  filtroMatriculado = false;
  filtroUrgencia = false;
  filtroPresupuestoSinCargo = false;
  ordenActivo = 'destacados';

  const chkMatricula = document.getElementById('filterMatricula');
  const chkUrgencia = document.getElementById('filterUrgencia');
  const chkPresupuesto = document.getElementById('filterPresupuesto');
  const sortSelect = document.getElementById('sortSelect');

  if (chkMatricula) chkMatricula.checked = false;
  if (chkUrgencia) chkUrgencia.checked = false;
  if (chkPresupuesto) chkPresupuesto.checked = false;
  if (sortSelect) sortSelect.value = 'destacados';

  sincronizarFiltros();
  mostrarToast('Filtros restablecidos');
}

// --------------------------------------------
// 11. Renderizado del Directorio de Trabajadores
// --------------------------------------------
function obtenerInfoOficio(id) {
  const of = OFICIOS.find(o => o.id === id);
  return of || { id, label: id, icon: '🧰', keywords: [] };
}

function filtrarYOrdenarTrabajadores() {
  let list = trabajadores.filter(t => {
    // Filtro Oficio
    if (filtroOficio && t.oficio !== filtroOficio) return false;

    // Filtro Zona
    if (filtroZona && t.zona !== filtroZona) return false;

    // Filtro Matriculado
    if (filtroMatriculado && !t.matriculado) return false;

    // Filtro Urgencia
    if (filtroUrgencia && !t.urgencias) return false;

    // Filtro Presupuesto sin cargo
    if (filtroPresupuestoSinCargo) {
      const textoRef = (t.precioRef || '').toLowerCase();
      if (!textoRef.includes('sin cargo') && !textoRef.includes('gratis')) return false;
    }

    // Filtro por palabra clave (busca en nombre, bio, oficio y keywords de oficio)
    if (filtroKeyword) {
      const q = filtroKeyword.toLowerCase();
      const ofData = obtenerInfoOficio(t.oficio);
      const matchNombre = t.nombre.toLowerCase().includes(q);
      const matchBio = (t.bio || '').toLowerCase().includes(q);
      const matchZona = (t.zona || '').toLowerCase().includes(q);
      const matchOficio = ofData.label.toLowerCase().includes(q);
      const matchKeywords = ofData.keywords.some(kw => kw.includes(q) || q.includes(kw));

      if (!matchNombre && !matchBio && !matchZona && !matchOficio && !matchKeywords) {
        return false;
      }
    }

    return true;
  });

  // Ordenamiento
  list.sort((a, b) => {
    if (ordenActivo === 'destacados') {
      if (a.destacado && !b.destacado) return -1;
      if (!a.destacado && b.destacado) return 1;
      return (b.promedio || 0) - (a.promedio || 0);
    }
    if (ordenActivo === 'calificacion') {
      const scoreA = a.resenas >= 5 && a.promedio ? a.promedio : 0;
      const scoreB = b.resenas >= 5 && b.promedio ? b.promedio : 0;
      return scoreB - scoreA;
    }
    if (ordenActivo === 'mas-resenas') {
      return (b.resenas || 0) - (a.resenas || 0);
    }
    if (ordenActivo === 'recientes') {
      return b.id - a.id;
    }
    return 0;
  });

  return list;
}

function renderDirectorio() {
  const grid = document.getElementById('workerGrid');
  const empty = document.getElementById('emptyState');
  const count = document.getElementById('resultCount');
  const activeBar = document.getElementById('activeFiltersBar');
  const activeList = document.getElementById('activeFiltersList');

  if (!grid) return;
  grid.innerHTML = '';

  const filtrados = filtrarYOrdenarTrabajadores();

  // Actualizar contador
  if (count) {
    count.textContent = filtrados.length === 1
      ? 'Mostrando 1 profesional disponible en Jáchal.'
      : `Mostrando ${filtrados.length} profesionales disponibles en Jáchal.`;
  }

  // Manejar estado vacío
  if (empty) {
    empty.hidden = filtrados.length !== 0;
  }

  // Barra de filtros activos
  renderBarraFiltrosActivos(activeBar, activeList);

  // Renderizar tarjetas
  filtrados.forEach(t => {
    grid.appendChild(crearTarjetaTrabajador(t));
  });
}

function renderBarraFiltrosActivos(bar, list) {
  if (!bar || !list) return;

  const tags = [];
  if (filtroOficio) {
    const of = obtenerInfoOficio(filtroOficio);
    tags.push({ label: `${of.icon} ${of.label}`, clear: () => { filtroOficio = ''; sincronizarFiltros(); } });
  }
  if (filtroZona) {
    tags.push({ label: `📍 ${filtroZona}`, clear: () => { filtroZona = ''; sincronizarFiltros(); } });
  }
  if (filtroKeyword) {
    tags.push({ label: `🔍 "${filtroKeyword}"`, clear: () => { filtroKeyword = ''; sincronizarFiltros(); } });
  }
  if (filtroMatriculado) {
    tags.push({ label: '✓ Matriculados', clear: () => { filtroMatriculado = false; document.getElementById('filterMatricula').checked = false; renderDirectorio(); } });
  }
  if (filtroUrgencia) {
    tags.push({ label: '🚨 Urgencias 24h', clear: () => { filtroUrgencia = false; document.getElementById('filterUrgencia').checked = false; renderDirectorio(); } });
  }
  if (filtroPresupuestoSinCargo) {
    tags.push({ label: '🏷️ Presupuesto sin cargo', clear: () => { filtroPresupuestoSinCargo = false; document.getElementById('filterPresupuesto').checked = false; renderDirectorio(); } });
  }

  if (tags.length === 0) {
    bar.hidden = true;
    list.innerHTML = '';
  } else {
    bar.hidden = false;
    list.innerHTML = '';
    tags.forEach(tag => {
      const tagEl = document.createElement('span');
      tagEl.className = 'active-tag';
      tagEl.innerHTML = `<span>${tag.label}</span> <button type="button" aria-label="Quitar filtro">✕</button>`;
      tagEl.querySelector('button').addEventListener('click', tag.clear);
      list.appendChild(tagEl);
    });
  }
}

function generarInitials(nombre) {
  const parts = nombre.trim().split(' ');
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  return (nombre.slice(0, 2) || 'OY').toUpperCase();
}

function crearTarjetaTrabajador(t) {
  const card = document.createElement('article');
  card.className = `worker-card ${t.destacado ? 'is-featured' : ''}`;
  card.setAttribute('aria-labelledby', `workerName-${t.id}`);

  const ofData = obtenerInfoOficio(t.oficio);

  // Calificación según la Regla de 5 Reseñas
  let ratingHTML = '';
  if (t.resenas >= 5 && t.promedio) {
    ratingHTML = `
      <div class="wc-rating-box">
        <span class="wc-rating-score">★ ${t.promedio.toFixed(1)}</span>
        <span class="wc-rating-count">(${t.resenas} opiniones verificadas)</span>
      </div>
    `;
  } else {
    const cantTexto = t.resenas > 0 ? `${t.resenas} calificación${t.resenas === 1 ? '' : 'es'}` : 'Perfil nuevo';
    ratingHTML = `
      <div class="wc-rating-box">
        <span class="wc-rating-new">⭐ ${cantTexto}</span>
        <span class="wc-rating-count" title="El promedio de estrellas se muestra a partir de las 5 reseñas">(Regla de 5 reseñas)</span>
      </div>
    `;
  }

  // Mini galería de fotos
  let fotosHTML = '';
  if (t.fotos && t.fotos.length > 0) {
    fotosHTML = t.fotos.slice(0, 3).map(src => `
      <div class="wc-photo-thumb">
        <img src="${src}" alt="Trabajo realizado por ${t.nombre}" loading="lazy">
      </div>
    `).join('');
  } else {
    fotosHTML = `
      <div class="wc-photo-thumb"><div class="wc-photo-placeholder">${ofData.icon}</div></div>
      <div class="wc-photo-thumb"><div class="wc-photo-placeholder">📷</div></div>
      <div class="wc-photo-thumb"><div class="wc-photo-placeholder">✓</div></div>
    `;
  }

  // Generador de mensaje de WhatsApp inteligente
  const mensajeWA = encodeURIComponent(
    `Hola ${t.nombre.split(' ')[0]}! Te contacto desde la plataforma OficiosYa Jáchal para consultar por un trabajo de ${ofData.label}. ¿Tendrás disponibilidad?`
  );

  card.innerHTML = `
    ${t.destacado ? '<span class="featured-ribbon">⭐ Recomendado</span>' : ''}
    <div class="wc-header">
      <div class="wc-avatar" aria-hidden="true">${generarInitials(t.nombre)}</div>
      <div class="wc-meta">
        <span class="wc-oficio">${ofData.icon} ${ofData.label}</span>
        <h3 class="wc-name" id="workerName-${t.id}">${t.nombre}</h3>
        <div class="wc-location-row">
          <span class="wc-zona-badge">📍 ${t.zona}</span>
          ${t.matriculado ? '<span class="wc-badge-matricula">✓ Matriculado</span>' : ''}
          ${t.urgencias ? '<span class="wc-badge-urgente">🚨 24hs</span>' : ''}
        </div>
      </div>
    </div>

    ${ratingHTML}

    <p class="wc-bio">${t.bio || 'Trabajador independiente en Jáchal. Contactá para presupuestos y coordinación.'}</p>

    <div class="wc-portfolio-row" aria-label="Muestra de trabajos">
      ${fotosHTML}
    </div>

    ${t.precioRef ? `<div class="wc-price-ref">🏷️ <span>${t.precioRef}</span></div>` : ''}

    <div class="wc-actions">
      <button type="button" class="btn btn-ghost" data-action="perfil" data-id="${t.id}">
        Ver Perfil
      </button>
      <a class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer"
         href="https://wa.me/54${t.telefono.replace(/\D/g, '')}?text=${mensajeWA}">
        <span>WhatsApp</span>
      </a>
    </div>
  `;

  // Abrir modal de perfil al hacer clic en "Ver Perfil" o en la tarjeta
  const btnPerfil = card.querySelector('[data-action="perfil"]');
  if (btnPerfil) {
    btnPerfil.addEventListener('click', (e) => {
      e.stopPropagation();
      abrirModalPerfil(t);
    });
  }

  card.addEventListener('click', (e) => {
    if (e.target.closest('a') || e.target.closest('button')) return;
    abrirModalPerfil(t);
  });

  return card;
}

// --------------------------------------------
// 12. Modal de Perfil Detallado & Sistema de Reseñas
// --------------------------------------------
function cablearModales() {
  // Modal de perfil
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = document.getElementById('modalOverlay');

  if (modalClose) modalClose.addEventListener('click', cerrarModalPerfil);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target.id === 'modalOverlay') cerrarModalPerfil();
    });
  }

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cerrarModalPerfil();
    }
  });
}

function abrirModalPerfil(t) {
  const overlay = document.getElementById('modalOverlay');
  const body = document.getElementById('modalBody');
  if (!overlay || !body) return;

  const ofData = obtenerInfoOficio(t.oficio);

  // Galería de fotos en modal
  let fotosHTML = '';
  if (t.fotos && t.fotos.length > 0) {
    fotosHTML = `
      <div class="mp-photos-gallery">
        <h4>📸 Trabajos realizados y portfolio</h4>
        <div class="mp-photo-grid">
          ${t.fotos.map(src => `
            <div class="mp-photo-item" onclick="window.open('${src}', '_blank')">
              <img src="${src}" alt="Foto de trabajo realizado">
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Lista de reseñas
  let reviewsHTML = '';
  if (t.reviews && t.reviews.length > 0) {
    reviewsHTML = `
      <div class="mp-reviews-list">
        ${t.reviews.map(r => `
          <div class="mp-review-card">
            <div class="mp-review-header">
              <span class="mp-review-author">${r.autor}</span>
              <span class="mp-review-stars">${'★'.repeat(r.calificacion || 5)}</span>
            </div>
            <p style="margin:0; font-size:0.85rem; color:var(--text-muted);">${r.texto}</p>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    reviewsHTML = '<p style="font-size:0.85rem; font-style:italic;">Aún no hay comentarios detallados para este trabajador.</p>';
  }

  // Explicación de la regla de 5 reseñas en el modal
  let statusResenasHTML = '';
  if (t.resenas >= 5 && t.promedio) {
    statusResenasHTML = `
      <div class="mp-rating-callout">
        <strong>★ Promedio: ${t.promedio.toFixed(1)} / 5.0</strong>
        <p style="margin:0; font-size:0.85rem;">Basado en ${t.resenas} calificaciones reales verificadas en el departamento de Jáchal.</p>
      </div>
    `;
  } else {
    statusResenasHTML = `
      <div class="mp-rating-callout">
        <strong>⭐ Perfil en validación inicial (${t.resenas} de 5 calificaciones)</strong>
        <p style="margin:0; font-size:0.85rem;">
          En OficiosYa, el promedio por estrellas se publica a partir de la <strong>5ta calificación</strong> para garantizar evaluaciones objetivas y representativas.
        </p>
      </div>
    `;
  }

  const mensajeWA = encodeURIComponent(
    `Hola ${t.nombre.split(' ')[0]}! Te contacto desde OficiosYa Jáchal para consultar por un trabajo de ${ofData.label}. ¿Me podrías brindar un presupuesto?`
  );

  body.innerHTML = `
    <div class="mp-header">
      <div class="mp-avatar" aria-hidden="true">${generarInitials(t.nombre)}</div>
      <div class="mp-title-group">
        <span class="wc-oficio">${ofData.icon} ${ofData.label}</span>
        <h2 id="modalWorkerName">${t.nombre}</h2>
        <div class="mp-badges">
          <span class="wc-zona-badge">📍 Cobertura: ${t.zona}</span>
          ${t.matriculado ? '<span class="wc-badge-matricula">✓ Matriculado</span>' : ''}
          ${t.urgencias ? '<span class="wc-badge-urgente">🚨 Atiende Urgencias 24h</span>' : ''}
        </div>
      </div>
    </div>

    ${statusResenasHTML}

    <div style="margin: 16px 0;">
      <h4>📋 Descripción y Servicios:</h4>
      <p style="font-size:0.92rem; color:var(--text-main);">${t.bio || 'Servicios profesionales en Jáchal.'}</p>
      ${t.precioRef ? `<p style="font-size:0.88rem; color:var(--ochre-deep); font-weight:600;">🏷️ Referencia: ${t.precioRef}</p>` : ''}
    </div>

    ${fotosHTML}

    <!-- Sección de Reseñas -->
    <div class="mp-reviews-section">
      <h4>💬 Opiniones de Vecinos de Jáchal</h4>
      ${reviewsHTML}

      <!-- Formulario para dejar una reseña -->
      <div class="add-review-box">
        <h4>Dejá tu opinión sobre este trabajador:</h4>
        <form id="addReviewForm">
          <div class="star-picker" id="modalStarPicker" role="radiogroup" aria-label="Calificación en estrellas">
            <span data-star="1" class="active">★</span>
            <span data-star="2" class="active">★</span>
            <span data-star="3" class="active">★</span>
            <span data-star="4" class="active">★</span>
            <span data-star="5" class="active">★</span>
          </div>
          <div class="field" style="margin-bottom:8px;">
            <label for="revNombre" style="font-size:0.75rem;">Tu Nombre y Apellido *</label>
            <input type="text" id="revNombre" placeholder="Ej: Mariano G." required style="padding:8px 12px; font-size:0.85rem;">
          </div>
          <div class="field" style="margin-bottom:8px;">
            <label for="revTexto" style="font-size:0.75rem;">Tu Experiencia / Comentario *</label>
            <textarea id="revTexto" rows="2" placeholder="¿Cómo fue el trabajo? ¿Cumplió con los tiempos y presupuesto?" required style="padding:8px 12px; font-size:0.85rem;"></textarea>
          </div>
          <button type="submit" class="btn btn-secondary btn-block" style="font-size:0.85rem; padding:8px 16px;">
            Publicar mi Calificación
          </button>
        </form>
      </div>
    </div>

    <div class="mp-bottom-actions">
      <a class="btn btn-whatsapp btn-block btn-lg" target="_blank" rel="noopener noreferrer"
         href="https://wa.me/54${t.telefono.replace(/\D/g, '')}?text=${mensajeWA}">
        <span>Contactar directo por WhatsApp</span>
      </a>
    </div>
  `;

  // Manejar estrellas interactivas en reseña
  let currentStars = 5;
  const stars = body.querySelectorAll('#modalStarPicker span');
  stars.forEach(s => {
    s.addEventListener('click', () => {
      currentStars = parseInt(s.getAttribute('data-star'), 10);
      stars.forEach(other => {
        const starVal = parseInt(other.getAttribute('data-star'), 10);
        if (starVal <= currentStars) {
          other.classList.add('active');
        } else {
          other.classList.remove('active');
        }
      });
    });
  });

  // Manejar envío de nueva reseña
  const formReview = body.querySelector('#addReviewForm');
  if (formReview) {
    formReview.addEventListener('submit', (e) => {
      e.preventDefault();
      const autor = body.querySelector('#revNombre').value.trim();
      const texto = body.querySelector('#revTexto').value.trim();

      if (!autor || !texto) return;

      agregarResenaATrabajador(t.id, autor, currentStars, texto);
      abrirModalPerfil(trabajadores.find(w => w.id === t.id)); // Recargar modal
      mostrarToast('¡Gracias! Tu reseña ha sido registrada correctamente.', 'success');
    });
  }

  overlay.hidden = false;
  document.body.style.overflow = 'hidden';
}

function cerrarModalPerfil() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.hidden = true;
  document.body.style.overflow = '';
}

function agregarResenaATrabajador(workerId, autor, calificacion, texto) {
  const worker = trabajadores.find(w => w.id === workerId);
  if (!worker) return;

  if (!worker.reviews) worker.reviews = [];
  worker.reviews.unshift({
    autor,
    calificacion,
    texto,
    fecha: new Date().toISOString().split('T')[0]
  });

  worker.resenas = (worker.resenas || 0) + 1;

  // Recalcular promedio
  const totalScore = worker.reviews.reduce((acc, r) => acc + (r.calificacion || 5), 0);
  const nuevoPromedio = totalScore / worker.reviews.length;

  if (worker.resenas >= 5) {
    worker.promedio = nuevoPromedio;
  } else {
    worker.promedio = null;
  }

  guardarTrabajadoresEnStorage();
  renderDirectorio();
}

// --------------------------------------------
// 13. Cotizador / Asistente Rápido de Presupuestos
// --------------------------------------------
function cablearAsistentePresupuesto() {
  const form = document.getElementById('presupuestoForm');
  const boxResults = document.getElementById('presupuestoResults');
  const listResults = document.getElementById('pResultsList');
  const btnClose = document.getElementById('btnClosePResults');

  if (!form || !boxResults || !listResults) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const oficio = document.getElementById('pOficio').value;
    const zona = document.getElementById('pZona').value;
    const urgencia = document.getElementById('pUrgencia').value;
    const descripcion = document.getElementById('pDescripcion').value.trim();

    if (!oficio || !zona || !descripcion) return;

    // Buscar trabajadores afines (mismo oficio, priorizando zona)
    let candidatos = trabajadores.filter(t => t.oficio === oficio);
    if (candidatos.length === 0) {
      candidatos = trabajadores.slice(0, 3); // Fallback
    }

    // Ordenar para que los de la misma zona salgan primero
    candidatos.sort((a, b) => {
      if (a.zona === zona && b.zona !== zona) return -1;
      if (a.zona !== zona && b.zona === zona) return 1;
      return 0;
    });

    const ofData = obtenerInfoOficio(oficio);
    listResults.innerHTML = '';

    candidatos.slice(0, 4).forEach(cand => {
      const card = document.createElement('div');
      card.className = 'p-result-card';

      const mensaje = encodeURIComponent(
        `Hola ${cand.nombre.split(' ')[0]}! Te contacto por OficiosYa Jáchal.\n` +
        `Necesito presupuesto para un trabajo de ${ofData.label} en ${zona}.\n` +
        `Detalle: "${descripcion}"\n` +
        `Urgencia: ${urgencia}.\n¿Cuándo podrías presupuestarlo?`
      );

      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="font-size:1rem; color:var(--text-main);">${cand.nombre}</strong>
          <span style="font-size:0.75rem; background:var(--navy-light); color:var(--navy); padding:2px 8px; border-radius:99px;">📍 ${cand.zona}</span>
        </div>
        <p style="font-size:0.8rem; margin:4px 0; color:var(--text-muted);">${cand.bio || 'Trabajador verificado en Jáchal.'}</p>
        <a class="btn btn-whatsapp btn-block" style="font-size:0.85rem; padding:8px 12px; margin-top:6px;"
           target="_blank" rel="noopener noreferrer"
           href="https://wa.me/54${cand.telefono.replace(/\D/g, '')}?text=${mensaje}">
          Enviar Solicitud por WhatsApp
        </a>
      `;
      listResults.appendChild(card);
    });

    boxResults.hidden = false;
    boxResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    mostrarToast('Asistente: encontramos profesionales listos para tu consulta');
  });

  if (btnClose) {
    btnClose.addEventListener('click', () => {
      boxResults.hidden = true;
    });
  }
}

// --------------------------------------------
// 14. Registro de Trabajadores con Vista Previa en Vivo
// --------------------------------------------
function cablearRegistroTrabajador() {
  const form = document.getElementById('signupForm');
  const fileInput = document.getElementById('fotos');
  const previewArea = document.getElementById('photoPreview');
  const feedback = document.getElementById('formFeedback');

  if (!form) return;

  // Carga de imágenes con FileReader para soporte offline / local
  if (fileInput && previewArea) {
    fileInput.addEventListener('change', () => {
      const files = Array.from(fileInput.files).slice(0, 3);
      if (files.length === 0) return;

      files.forEach(file => {
        if (fotosEnRegistro.length >= 3) return;
        const reader = new FileReader();
        reader.onload = (e) => {
          fotosEnRegistro.push(e.target.result);
          renderPreviewFotosRegistro(previewArea);
          actualizarVistaPreviaRegistro();
        };
        reader.readAsDataURL(file);
      });
    });
  }

  // Inputs en vivo para actualizar la tarjeta de vista previa
  const camposLive = ['nombre', 'oficioInput', 'zonaInput', 'precioRef', 'bioInput', 'checkMatricula', 'checkUrgencias'];
  camposLive.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', actualizarVistaPreviaRegistro);
      el.addEventListener('change', actualizarVistaPreviaRegistro);
    }
  });

  // Envío del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const oficio = document.getElementById('oficioInput').value;
    const zona = document.getElementById('zonaInput').value;
    const telefono = document.getElementById('telefono').value.trim().replace(/\D/g, '');
    const precioRef = document.getElementById('precioRef').value.trim();
    const bio = document.getElementById('bioInput').value.trim();
    const matriculado = document.getElementById('checkMatricula').checked;
    const urgencias = document.getElementById('checkUrgencias').checked;

    if (!nombre || !oficio || !zona || !telefono) {
      mostrarFeedback(feedback, 'Por favor, completá todos los campos obligatorios (*)', 'error');
      return;
    }

    if (telefono.length < 8) {
      mostrarFeedback(feedback, 'Por favor, ingresá un número de WhatsApp válido (mínimo 8 dígitos).', 'error');
      return;
    }

    // Si no subió fotos, asignamos fotos de ejemplo de la categoría
    const fotosFinales = fotosEnRegistro.length > 0 ? [...fotosEnRegistro] : (MOCK_PHOTOS[oficio] || []);

    const nuevoTrabajador = {
      id: ++workerIdCounter,
      nombre,
      oficio,
      zona,
      telefono,
      precioRef: precioRef || 'Presupuesto a convenir',
      bio: bio || `Servicios de ${obtenerInfoOficio(oficio).label} en Jáchal.`,
      matriculado,
      urgencias,
      destacado: true, // Nuevo trabajador destacado para incentivar
      fotos: fotosFinales,
      resenas: 0,
      promedio: null,
      reviews: []
    };

    trabajadores.unshift(nuevoTrabajador);
    guardarTrabajadoresEnStorage();

    // Resetear formulario
    form.reset();
    fotosEnRegistro = [];
    if (previewArea) previewArea.innerHTML = '';
    actualizarVistaPreviaRegistro();

    mostrarFeedback(feedback, '🎉 ¡Felicitaciones! Tu perfil ha sido creado y publicado con éxito en el directorio de Jáchal.', 'success');
    mostrarToast(`¡Bienvenido ${nombre}! Tu perfil ya está disponible en OficiosYa.`, 'success');

    // Sincronizar directorio y scroll
    filtroOficio = '';
    filtroZona = '';
    sincronizarFiltros();

    setTimeout(() => {
      const sectionTrabajadores = document.getElementById('trabajadores');
      if (sectionTrabajadores) sectionTrabajadores.scrollIntoView({ behavior: 'smooth' });
    }, 1200);
  });
}

function renderPreviewFotosRegistro(container) {
  container.innerHTML = '';
  fotosEnRegistro.forEach((src, idx) => {
    const wrap = document.createElement('div');
    wrap.className = 'preview-thumb-wrap';
    wrap.innerHTML = `
      <img src="${src}" alt="Foto ${idx + 1}">
      <button type="button" class="preview-remove-btn" title="Eliminar foto">✕</button>
    `;
    wrap.querySelector('.preview-remove-btn').addEventListener('click', () => {
      fotosEnRegistro.splice(idx, 1);
      renderPreviewFotosRegistro(container);
      actualizarVistaPreviaRegistro();
    });
    container.appendChild(wrap);
  });
}

function actualizarVistaPreviaRegistro() {
  const slot = document.getElementById('previewCardSlot');
  if (!slot) return;

  const nombre = (document.getElementById('nombre')?.value || '').trim() || 'Tu Nombre y Apellido';
  const oficio = document.getElementById('oficioInput')?.value || 'electricista';
  const zona = document.getElementById('zonaInput')?.value || 'Centro';
  const precioRef = (document.getElementById('precioRef')?.value || '').trim() || 'Presupuesto sin cargo';
  const bio = (document.getElementById('bioInput')?.value || '').trim() || 'Especialista en mantenimiento e instalaciones.';
  const matriculado = document.getElementById('checkMatricula')?.checked || false;
  const urgencias = document.getElementById('checkUrgencias')?.checked || false;

  const mockWorker = {
    id: 9999,
    nombre,
    oficio,
    zona,
    telefono: '2640000000',
    matriculado,
    urgencias,
    destacado: true,
    precioRef,
    bio,
    fotos: fotosEnRegistro.length > 0 ? fotosEnRegistro : (MOCK_PHOTOS[oficio] || []),
    resenas: 0,
    promedio: null,
    reviews: []
  };

  slot.innerHTML = '';
  const card = crearTarjetaTrabajador(mockWorker);
  // Desactivar botones en la vista previa
  card.querySelectorAll('a, button').forEach(b => {
    b.setAttribute('tabindex', '-1');
    b.style.pointerEvents = 'none';
  });
  slot.appendChild(card);
}

function mostrarFeedback(el, msg, type) {
  if (!el) return;
  el.className = `form-feedback is-${type}`;
  el.textContent = msg;
  el.hidden = false;
  setTimeout(() => {
    el.hidden = true;
  }, 6000);
}

// --------------------------------------------
// 15. Sistema de Notificaciones Toast
// --------------------------------------------
function mostrarToast(mensaje, tipo = 'normal') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${tipo === 'success' ? 'toast-success' : tipo === 'error' ? 'toast-error' : ''}`;
  toast.innerHTML = `
    <span>${tipo === 'success' ? '✓' : tipo === 'error' ? '⚠️' : 'ℹ️'}</span>
    <span>${mensaje}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
