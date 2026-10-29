/**
 * MI LIBRERO ISLEÑO 🌸📚
 * Lógica 100% real y reactiva
 * Tema: Lavandas, Rosa Pastel, Ardillas y Animal Crossing
 */

// ===================================================================
// DEFINICIÓN DE REPISAS (Solo para libros)
// ===================================================================
const SHELF_DEFINITIONS = {
  'col-izq-1': { name: 'Repisa 1 (Superior)', category: 'Romance' },
  'col-izq-2': { name: 'Repisa 2', category: 'Ciencia Ficción' },
  'col-izq-3': { name: 'Repisa 3', category: 'Manga' },
  'col-izq-4': { name: 'Repisa 4', category: 'Novelas' },
  'col-izq-5': { name: 'Repisa 5', category: 'Pendientes' },
  'col-izq-6': { name: 'Repisa 6 (Inferior)', category: 'Favoritos' },

  'puente-1':  { name: 'Puente 1 (Izquierdo)', category: 'Fantasía' },
  'puente-2':  { name: 'Puente 2 (Centro)', category: 'Clásicos' },
  'puente-3':  { name: 'Puente 3 (Derecho)', category: 'Desarrollo Personal' },

  'col-der-1': { name: 'Repisa 1 (Superior)', category: 'Misterio' },
  'col-der-2': { name: 'Repisa 2 (Colección)', category: 'Crecimiento' },
  'col-der-3': { name: 'Repisa 3', category: 'Recetas' },
  'col-der-4': { name: 'Repisa 4', category: 'Poesía & Arte' },
  'col-der-5': { name: 'Repisa 5', category: 'Libros en Inglés' },
  'col-der-6': { name: 'Repisa 6 (Inferior)', category: 'Por leer' }
};

// ===================================================================
// DEFINICIÓN DE LOS 4 CAJONES (2 de un lado y 2 del otro - No para libros)
// ===================================================================
const DEFAULT_DRAWERS = {
  'cajon-izq-1': {
    name: 'Papelería & Stickers',
    icon: '✏️',
    notes: 'Plumas pastel, stickers de Animal Crossing, clips dorados y post-its.'
  },
  'cajon-izq-2': {
    name: 'Archivos & Documentos',
    icon: '📁',
    notes: 'Carpetas, documentos importantes y garantías.'
  },
  'cajon-der-1': {
    name: 'Cuadernos & Libretas',
    icon: '📓',
    notes: 'Bullet journal, libreta de notas, agendas y separadores.'
  },
  'cajon-der-2': {
    name: 'Recuerdos & Varios',
    icon: '🌸',
    notes: 'Fotografías, cartas, recuerdos especiales y regalitos.'
  }
};

// ===================================================================
// COLECCIÓN INICIAL INSPIRADA EN PHOTO 1 (12 libros, 5 completados, 3 leyendo, 2,340 págs, 68% progreso)
// ===================================================================
const PHOTO_1_STARTER_BOOKS = [
  {
    id: 'b-rom-1',
    title: 'Orgullo y Prejuicio',
    author: 'Jane Austen',
    reader: 'Carolina Ornelas',
    shelfId: 'col-izq-1',
    totalPages: 420,
    currentPage: 420,
    status: 'completed',
    spineColor: '#f472b6',
    notes: 'Mi historia de amor favorita de todos los tiempos 💕'
  },
  {
    id: 'b-rom-2',
    title: 'La Hipótesis del Amor',
    author: 'Ali Hazelwood',
    reader: 'Carolina Ornelas',
    shelfId: 'col-izq-1',
    totalPages: 280,
    currentPage: 252,
    status: 'reading',
    spineColor: '#ec4899',
    notes: 'Adam Carlsen y Olive Smith en Stanford. Adorable fake dating!'
  },
  {
    id: 'b-sci-1',
    title: 'Dune',
    author: 'Frank Herbert',
    reader: 'Carolina Ornelas',
    shelfId: 'col-izq-2',
    totalPages: 420,
    currentPage: 378,
    status: 'reading',
    spineColor: '#2563eb',
    notes: 'El desierto de Arrakis, Paul Atreides y la especia melange.'
  },
  {
    id: 'b-sci-2',
    title: 'Fundación',
    author: 'Isaac Asimov',
    reader: 'Carolina Ornelas',
    shelfId: 'col-izq-2',
    totalPages: 256,
    currentPage: 256,
    status: 'completed',
    spineColor: '#1d4ed8',
    notes: 'La psicohistoria de Hari Seldon. Obra maestra de la ciencia ficción.'
  },
  {
    id: 'b-manga-1',
    title: "Frieren: Beyond Journey's End Vol. 1",
    author: 'Kanehito Yamada',
    reader: 'Carolina Ornelas',
    shelfId: 'col-izq-3',
    totalPages: 192,
    currentPage: 192,
    status: 'completed',
    spineColor: '#a855f7',
    notes: 'El viaje mágico tras derrotar al rey demonio con Fern y Stark.'
  },
  {
    id: 'b-manga-2',
    title: 'Spy x Family Vol. 1',
    author: 'Tatsuya Endo',
    reader: 'Carolina Ornelas',
    shelfId: 'col-izq-3',
    totalPages: 210,
    currentPage: 210,
    status: 'completed',
    spineColor: '#38bdf8',
    notes: 'Anya con cacahuates y cara traviesa 🥜'
  },
  {
    id: 'b-fant-1',
    title: 'El Nombre del Viento',
    author: 'Patrick Rothfuss',
    reader: 'Carolina Ornelas',
    shelfId: 'puente-1',
    totalPages: 232,
    currentPage: 215,
    status: 'reading',
    spineColor: '#7c3aed',
    notes: 'Crónica del Asesino de Reyes: Día 1. Kvothe el Arcano.'
  },
  {
    id: 'b-clas-1',
    title: 'Cien Años de Soledad',
    author: 'Gabriel García Márquez',
    reader: 'Carolina Ornelas',
    shelfId: 'puente-2',
    totalPages: 417,
    currentPage: 417,
    status: 'completed',
    spineColor: '#d97706',
    notes: 'Muchos años después, frente al pelotón de fusilamiento en Macondo.'
  },
  {
    id: 'b-des-1',
    title: 'Hábitos Atómicos',
    author: 'James Clear',
    reader: 'Carolina Ornelas',
    shelfId: 'puente-3',
    totalPages: 320,
    currentPage: 0,
    status: 'to_read',
    spineColor: '#10b981',
    notes: 'Cambios minúsculos, resultados extraordinarios.'
  },
  {
    id: 'b-mist-1',
    title: 'El Asesinato de Roger Ackroyd',
    author: 'Agatha Christie',
    reader: 'Carolina Ornelas',
    shelfId: 'col-der-1',
    totalPages: 280,
    currentPage: 0,
    status: 'to_read',
    spineColor: '#1e293b',
    notes: 'Hércules Poirot investiga en King\'s Abbot.'
  },
  {
    id: 'b-rec-1',
    title: 'Cocina & Repostería con Lavanda',
    author: 'Recetas de la Casa',
    reader: 'Carolina Ornelas',
    shelfId: 'col-der-3',
    totalPages: 240,
    currentPage: 0,
    status: 'to_read',
    spineColor: '#fb7185',
    notes: 'Tés herbales, galletas de miel y pasteles caseros.'
  },
  {
    id: 'b-ing-1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    reader: 'Carolina Ornelas',
    shelfId: 'col-der-5',
    totalPages: 304,
    currentPage: 0,
    status: 'to_read',
    spineColor: '#0284c7',
    notes: 'A novel about all the choices that go into a life well lived.'
  }
];

const SHELF_DECORATIVE_PALETTES = {
  'col-izq-1': ['#f472b6', '#ec4899', '#fbcfe8', '#d946ef', '#e879f9', '#f43f5e', '#fda4af'], // Romance
  'col-izq-2': ['#2563eb', '#1d4ed8', '#38bdf8', '#0284c7', '#1e40af', '#60a5fa'], // Ciencia Ficción
  'col-izq-3': ['#a855f7', '#c084fc', '#38bdf8', '#f472b6', '#e879f9', '#818cf8', '#cbd5e1'], // Manga
  'col-izq-4': ['#f59e0b', '#d97706', '#fbbf24', '#fcd34d', '#b45309', '#fed7aa'], // Novelas
  'col-izq-5': ['#d97706', '#b45309', '#f59e0b', '#78350f', '#fcd34d'], // Pendientes
  'col-izq-6': ['#ec4899', '#db2777', '#f472b6', '#c084fc', '#e879f9'], // Favoritos

  'puente-1':  ['#7c3aed', '#6d28d9', '#8b5cf6', '#a78bfa', '#5b21b6', '#c4b5fd'], // Fantasía
  'puente-2':  ['#b45309', '#92400e', '#d97706', '#78350f', '#e2d4c0', '#451a03'], // Clásicos
  'puente-3':  ['#059669', '#10b981', '#34d399', '#047857', '#d97706', '#84cc16'], // Desarrollo Personal

  'col-der-1': ['#1e293b', '#0f172a', '#334155', '#475569', '#1e1b4b', '#090e17'], // Misterio
  'col-der-2': ['#f472b6', '#fbcfe8', '#ec4899', '#fda4af', '#f43f5e', '#fb7185'], // Crecimiento
  'col-der-3': ['#fb7185', '#f43f5e', '#fda4af', '#f97316', '#ea580c', '#facc15'], // Recetas
  'col-der-4': ['#8b5cf6', '#a855f7', '#ec4899', '#f472b6', '#c084fc'], // Poesía & Arte
  'col-der-5': ['#0284c7', '#0369a1', '#38bdf8', '#0ea5e9', '#075985', '#bae6fd'], // Inglés
  'col-der-6': ['#f59e0b', '#d97706', '#fbbf24', '#fcd34d', '#b45309', '#fed7aa']  // Por leer
};

// ===================================================================
// ESTADO GLOBAL DE LA APLICACIÓN
// ===================================================================
let appState = {
  books: [...PHOTO_1_STARTER_BOOKS], // Precargado con la hermosa colección de Photo 1
  drawers: { ...DEFAULT_DRAWERS },
  readers: ['Carolina Ornelas'],
  shelfTitle: 'El Rincón de Lectura & Lavanda',
  activeShelfId: null,
  activeDrawerId: null,
  activeReaderFilter: 'Carolina Ornelas',
  searchQuery: '',
  selectedSpineColor: '#9575cd',
  blindHeight: 35, // Altura de persiana en porcentaje (10% a 88%)
  windowTimeMode: 'auto' // 'auto', 'morning', 'afternoon', 'sunset', 'night'
};

const STORAGE_KEY_BOOKS = 'mi_librero_books_v2';
const STORAGE_KEY_DRAWERS = 'mi_librero_drawers_v2';
const STORAGE_KEY_CONFIG = 'mi_librero_config_v2';
const STORAGE_KEY_BLIND = 'mi_librero_blind_v2';
const STORAGE_KEY_TIME_MODE = 'mi_librero_time_mode_v2';

// ===================================================================
// INICIALIZACIÓN
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  setupEventListeners();
  initBlindController();
  initZakiaTimeEngine();
  initBookshelfLightingEngine();
  renderApp();
});

// ===================================================================
// CARGA Y PERSISTENCIA (LocalStorage)
// ===================================================================
function loadData() {
  // Limpiar datos demo antiguos si existían de la versión anterior
  const oldData = localStorage.getItem('mi_librero_app_data_v1');
  if (oldData) {
    try {
      const parsed = JSON.parse(oldData);
      // Si solo tenía libros de demo, empezar desde cero
      const onlyDemos = Array.isArray(parsed) && parsed.every(b => String(b.id).startsWith('demo-'));
      if (onlyDemos) {
        localStorage.removeItem('mi_librero_app_data_v1');
      }
    } catch (e) {}
  }

  // 1. Cargar Libros (si está vacío, inicializar con la hermosa colección de Photo 1)
  const savedBooks = localStorage.getItem(STORAGE_KEY_BOOKS);
  if (savedBooks) {
    try {
      const parsed = JSON.parse(savedBooks);
      if (Array.isArray(parsed) && parsed.length > 0) {
        appState.books = parsed;
      } else {
        appState.books = [...PHOTO_1_STARTER_BOOKS];
        localStorage.setItem(STORAGE_KEY_BOOKS, JSON.stringify(appState.books));
      }
    } catch (e) {
      appState.books = [...PHOTO_1_STARTER_BOOKS];
      localStorage.setItem(STORAGE_KEY_BOOKS, JSON.stringify(appState.books));
    }
  } else {
    appState.books = [...PHOTO_1_STARTER_BOOKS];
    localStorage.setItem(STORAGE_KEY_BOOKS, JSON.stringify(appState.books));
  }

  // 2. Cargar Cajones
  const savedDrawers = localStorage.getItem(STORAGE_KEY_DRAWERS);
  if (savedDrawers) {
    try {
      appState.drawers = JSON.parse(savedDrawers);
    } catch (e) {
      appState.drawers = { ...DEFAULT_DRAWERS };
    }
  } else {
    appState.drawers = { ...DEFAULT_DRAWERS };
  }

  // 3. Cargar Configuración (Lectores y Título)
  const savedConfig = localStorage.getItem(STORAGE_KEY_CONFIG);
  if (savedConfig) {
    try {
      const cfg = JSON.parse(savedConfig);
      if (cfg.readers && Array.isArray(cfg.readers) && cfg.readers.length > 0) {
        // Migración automática si venían de la versión demo 'Ella' o 'Él'
        if (cfg.readers.includes('Ella') || cfg.readers.includes('Él')) {
          const others = cfg.readers.filter(r => r !== 'Ella' && r !== 'Él');
          appState.readers = ['Carolina Ornelas', ...others];
        } else {
          appState.readers = cfg.readers;
        }
      } else {
        appState.readers = ['Carolina Ornelas'];
      }
      if (cfg.shelfTitle) appState.shelfTitle = cfg.shelfTitle;
    } catch (e) {
      appState.readers = ['Carolina Ornelas'];
    }
  } else {
    appState.readers = ['Carolina Ornelas'];
  }

  // Migrar libros con 'Ella' o 'Él' hacia 'Carolina Ornelas'
  let booksMigrated = false;
  appState.books.forEach(b => {
    if (b.reader === 'Ella' || b.reader === 'Él' || !b.reader) {
      b.reader = 'Carolina Ornelas';
      booksMigrated = true;
    }
  });
  if (booksMigrated) {
    localStorage.setItem(STORAGE_KEY_BOOKS, JSON.stringify(appState.books));
  }

  // 4. Cargar Persiana y Modo de Tiempo de Zakia
  const savedBlind = localStorage.getItem(STORAGE_KEY_BLIND);
  if (savedBlind !== null) {
    appState.blindHeight = parseInt(savedBlind) || 35;
  }

  const savedTimeMode = localStorage.getItem(STORAGE_KEY_TIME_MODE);
  if (savedTimeMode) {
    appState.windowTimeMode = savedTimeMode;
  }

  // Si solo hay 1 lector, asegurar que el filtro activo sea ese lector
  if (appState.readers.length === 1) {
    appState.activeReaderFilter = appState.readers[0];
  } else if (appState.activeReaderFilter !== 'all' && !appState.readers.includes(appState.activeReaderFilter)) {
    appState.activeReaderFilter = appState.readers[0];
  }

  updateReadersDropdowns();
  updateShelfTitleUI();
  renderDrawersFace();
}

function saveData() {
  localStorage.setItem(STORAGE_KEY_BOOKS, JSON.stringify(appState.books));
  renderApp();
}

function saveDrawers() {
  localStorage.setItem(STORAGE_KEY_DRAWERS, JSON.stringify(appState.drawers));
  renderDrawersFace();
}

function saveConfig() {
  localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify({
    readers: appState.readers,
    shelfTitle: appState.shelfTitle
  }));
}

function updateShelfTitleUI() {
  const titleEl = document.getElementById('shelfTitle');
  if (titleEl) titleEl.textContent = appState.shelfTitle;
}

function updateReadersDropdowns() {
  const selectFilter = document.getElementById('readerSelect');
  const bookReaderInput = document.getElementById('bookReaderInput');
  if (!selectFilter) return;

  selectFilter.innerHTML = '';
  if (bookReaderInput) bookReaderInput.innerHTML = '';

  // Solo mostrar la opción "Todos los lectores" si hay más de 1 lector registrado
  if (appState.readers.length > 1) {
    const optAll = document.createElement('option');
    optAll.value = 'all';
    optAll.textContent = '👥 Todos los lectores';
    selectFilter.appendChild(optAll);
  }

  appState.readers.forEach((reader, index) => {
    const icon = index === 0 ? '🌸' : '☕';

    const optFilter = document.createElement('option');
    optFilter.value = reader;
    optFilter.textContent = `${icon} ${reader}`;
    selectFilter.appendChild(optFilter);

    if (bookReaderInput) {
      const optForm = document.createElement('option');
      optForm.value = reader;
      optForm.textContent = `${icon} ${reader}`;
      bookReaderInput.appendChild(optForm);
    }
  });

  // Validar selección actual
  if (appState.readers.length === 1) {
    appState.activeReaderFilter = appState.readers[0];
  } else if (appState.activeReaderFilter !== 'all' && !appState.readers.includes(appState.activeReaderFilter)) {
    appState.activeReaderFilter = appState.readers[0];
  }

  selectFilter.value = appState.activeReaderFilter;
}

// ===================================================================
// EVENT LISTENERS
// ===================================================================
function setupEventListeners() {
  // Clic en cualquier repisa del mueble (para adentrarse en la repisa)
  document.querySelectorAll('[data-shelf-id]').forEach(elem => {
    elem.addEventListener('click', () => {
      const shelfId = elem.getAttribute('data-shelf-id');
      openSectionModal(shelfId);
    });
  });

  // Clic en los 4 cajones (para organizar contenido de cada cajón)
  document.querySelectorAll('[data-drawer-id]').forEach(elem => {
    elem.addEventListener('click', () => {
      const drawerId = elem.getAttribute('data-drawer-id');
      openDrawerModal(drawerId);
    });
  });

  // Cerrar modal de repisa
  document.getElementById('closeSectionModalBtn').addEventListener('click', closeSectionModal);
  document.getElementById('sectionModalBackdrop').addEventListener('click', (e) => {
    if (e.target.id === 'sectionModalBackdrop') closeSectionModal();
  });

  // Botón "Agregar Libro Aquí" dentro de la repisa
  document.getElementById('addBookInThisShelfBtn').addEventListener('click', () => {
    openBookModal(null, appState.activeShelfId);
  });

  // Botón "+ Añadir Libro" global
  document.getElementById('quickAddBookBtn').addEventListener('click', () => {
    openBookModal(null, appState.activeShelfId || 'puente-2');
  });

  // Cerrar modal de libro
  document.getElementById('closeBookModalBtn').addEventListener('click', closeBookModal);
  document.getElementById('cancelBookBtn').addEventListener('click', closeBookModal);
  document.getElementById('bookModalBackdrop').addEventListener('click', (e) => {
    if (e.target.id === 'bookModalBackdrop') closeBookModal();
  });

  // Envío del formulario de libro
  document.getElementById('bookForm').addEventListener('submit', handleBookFormSubmit);
  document.getElementById('deleteBookBtn').addEventListener('click', handleDeleteCurrentBook);

  // Cálculo en vivo de progreso de páginas
  const curPageInput = document.getElementById('bookCurrentPage');
  const totPageInput = document.getElementById('bookTotalPages');
  curPageInput.addEventListener('input', updateFormProgressPreview);
  totPageInput.addEventListener('input', updateFormProgressPreview);

  // Paleta de colores para el libro
  document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
      swatch.classList.add('selected');
      const color = swatch.getAttribute('data-color');
      appState.selectedSpineColor = color;
      document.getElementById('customColorPicker').value = color;
    });
  });

  document.getElementById('customColorPicker').addEventListener('input', (e) => {
    appState.selectedSpineColor = e.target.value;
    document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
  });

  // Modal de Cajón
  document.getElementById('closeDrawerModalBtn').addEventListener('click', closeDrawerModal);
  document.getElementById('cancelDrawerBtn').addEventListener('click', closeDrawerModal);
  document.getElementById('drawerModalBackdrop').addEventListener('click', (e) => {
    if (e.target.id === 'drawerModalBackdrop') closeDrawerModal();
  });

  // Presets rápidos para el cajón
  document.querySelectorAll('.btn-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-preset').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('drawerNameInput').value = btn.getAttribute('data-name');
      document.getElementById('drawerIconInput').value = btn.getAttribute('data-icon');
    });
  });

  // Guardar Cajón
  document.getElementById('saveDrawerBtn').addEventListener('click', handleSaveDrawer);

  // Botón "➕ Nuevo" para crear perfil de lector
  const manageReadersBtn = document.getElementById('manageReadersBtn');
  if (manageReadersBtn) {
    manageReadersBtn.addEventListener('click', () => {
      const newName = prompt('Escribe el nombre del nuevo lector/a para añadir al librero:');
      if (newName !== null) {
        const trimmed = newName.trim();
        if (!trimmed) {
          alert('Por favor ingresa un nombre válido.');
          return;
        }

        // Si el lector no existe, se añade a la lista
        if (!appState.readers.includes(trimmed)) {
          appState.readers.push(trimmed);
          saveConfig();
        }

        // Activar inmediatamente el nuevo perfil
        appState.activeReaderFilter = trimmed;
        updateReadersDropdowns();
        renderApp();
        alert(`¡Bienvenido/a al librero, ${trimmed}! 🎉 Ahora tu perfil está activo.`);
      }
    });
  }

  // Personalización del Título del Librero
  const editTitleBtn = document.getElementById('editTitleBtn');
  if (editTitleBtn) {
    editTitleBtn.addEventListener('click', () => {
      const newTitle = prompt('Nombre para tu librero:', appState.shelfTitle);
      if (newTitle !== null && newTitle.trim()) {
        appState.shelfTitle = newTitle.trim();
        saveConfig();
        updateShelfTitleUI();
      }
    });
  }

  // Filtro de lector
  const readerSelect = document.getElementById('readerSelect');
  if (readerSelect) {
    readerSelect.addEventListener('change', (e) => {
      appState.activeReaderFilter = e.target.value;
      renderApp();
    });
  }

  // Buscador
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value.toLowerCase().trim();
      renderApp();
    });
  }

  // Modal de Backup (protegido si el botón está ausente)
  const backupBtn = document.getElementById('backupBtn');
  if (backupBtn) {
    backupBtn.addEventListener('click', () => {
      document.getElementById('backupModalBackdrop')?.classList.add('open');
    });
  }
  document.getElementById('closeBackupModalBtn').addEventListener('click', () => {
    document.getElementById('backupModalBackdrop').classList.remove('open');
  });
  document.getElementById('backupModalBackdrop').addEventListener('click', (e) => {
    if (e.target.id === 'backupModalBackdrop') document.getElementById('backupModalBackdrop').classList.remove('open');
  });

  document.getElementById('exportDataBtn').addEventListener('click', exportBackupJSON);
  const importFileInput = document.getElementById('importFileInput');
  document.getElementById('importDataBtn').addEventListener('click', () => importFileInput.click());
  importFileInput.addEventListener('change', importBackupJSON);

  // Limpiar todos los libros
  document.getElementById('clearAllBooksBtn').addEventListener('click', () => {
    if (confirm('¿Estás seguro de que deseas vaciar todos los libros? Esta acción empezará tu librero completamente en blanco.')) {
      appState.books = [];
      saveData();
      document.getElementById('backupModalBackdrop').classList.remove('open');
    }
  });

  // Atajo ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookModal();
      closeSectionModal();
      closeDrawerModal();
      document.getElementById('backupModalBackdrop').classList.remove('open');
    }
  });
}

// ===================================================================
// CONTROLADOR DE PERSIANA INTERACTIVA (SUBIR Y BAJAR A PLACER)
// ===================================================================
function initBlindController() {
  const blind = document.getElementById('windowBlind');
  const handle = document.getElementById('blindHandle');
  const frame = document.getElementById('windowFrame');
  const btnUp = document.getElementById('btnBlindUp');
  const btnMid = document.getElementById('btnBlindMid');
  const btnDown = document.getElementById('btnBlindDown');
  if (!blind || !handle || !frame) return;

  // Aplicar altura inicial guardada
  setBlindHeight(appState.blindHeight, false);

  // Botones de ajuste rápido
  if (btnUp) btnUp.addEventListener('click', (e) => { e.stopPropagation(); setBlindHeight(12, true); saveBlindHeight(); });
  if (btnMid) btnMid.addEventListener('click', (e) => { e.stopPropagation(); setBlindHeight(45, true); saveBlindHeight(); });
  if (btnDown) btnDown.addEventListener('click', (e) => { e.stopPropagation(); setBlindHeight(85, true); saveBlindHeight(); });

  // Arrastre interactivo de la persiana
  let isDragging = false;
  let startY = 0;
  let startHeight = 0;
  let clickStartTime = 0;

  function onPointerDown(e) {
    isDragging = true;
    clickStartTime = Date.now();
    blind.classList.add('dragging');

    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    startY = clientY;
    startHeight = appState.blindHeight;

    document.addEventListener('mousemove', onPointerMove);
    document.addEventListener('mouseup', onPointerUp);
    document.addEventListener('touchmove', onPointerMove, { passive: false });
    document.addEventListener('touchend', onPointerUp);
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const frameRect = frame.getBoundingClientRect();
    const currentYRelative = clientY - frameRect.top;
    let newPercent = Math.round((currentYRelative / frameRect.height) * 100);
    // Limitar entre 10% (abierta) y 88% (cerrada)
    newPercent = Math.max(10, Math.min(88, newPercent));
    setBlindHeight(newPercent, false);
    if (e.cancelable) e.preventDefault();
  }

  function onPointerUp(e) {
    if (!isDragging) return;
    isDragging = false;
    blind.classList.remove('dragging');

    document.removeEventListener('mousemove', onPointerMove);
    document.removeEventListener('mouseup', onPointerUp);
    document.removeEventListener('touchmove', onPointerMove);
    document.removeEventListener('touchend', onPointerUp);

    // Si fue un clic rápido sin arrastrar mucho, alternar entre arriba y abajo
    if (Date.now() - clickStartTime < 250) {
      if (appState.blindHeight < 40) {
        setBlindHeight(75, true);
      } else {
        setBlindHeight(15, true);
      }
    }
    saveBlindHeight();
  }

  handle.addEventListener('mousedown', onPointerDown);
  handle.addEventListener('touchstart', onPointerDown, { passive: true });
}

function setBlindHeight(percent, animated = true) {
  const blind = document.getElementById('windowBlind');
  if (!blind) return;
  appState.blindHeight = Math.max(10, Math.min(88, percent));
  if (!animated) blind.classList.add('dragging');
  blind.style.height = `${appState.blindHeight}%`;
  if (!animated) {
    setTimeout(() => blind.classList.remove('dragging'), 60);
  }
}

function saveBlindHeight() {
  localStorage.setItem(STORAGE_KEY_BLIND, String(appState.blindHeight));
}

// ===================================================================
// MOTOR DE PAISAJE Y HORA EN ZAKIA, QUERÉTARO, MÉXICO
// ===================================================================
function initZakiaTimeEngine() {
  const badge = document.getElementById('windowTimeBadge');
  if (badge) {
    badge.addEventListener('click', toggleTimeMode);
  }

  updateZakiaSky();
  // Actualizar reloj y cielo automáticamente cada 15 segundos
  setInterval(updateZakiaSky, 15000);
}

function toggleTimeMode() {
  const modes = ['auto', 'morning', 'afternoon', 'sunset', 'night'];
  const currentIndex = modes.indexOf(appState.windowTimeMode);
  const nextMode = modes[(currentIndex + 1) % modes.length];
  appState.windowTimeMode = nextMode;
  localStorage.setItem(STORAGE_KEY_TIME_MODE, nextMode);
  updateZakiaSky();
}

function updateZakiaSky() {
  const nook = document.getElementById('windowNook');
  const clockEl = document.getElementById('windowClockTime');
  const labelEl = document.getElementById('windowPhaseLabel');
  if (!nook || !clockEl || !labelEl) return;

  // Obtener hora local de Zakia, Querétaro (Centro de México)
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  clockEl.textContent = timeString;

  let activePhase = 'afternoon';
  let labelText = '☀️ Tarde';

  if (appState.windowTimeMode === 'auto') {
    // Cálculo automático según la hora real en Zakia
    if (hours >= 6 && hours < 12) {
      activePhase = 'morning';
      labelText = '🌅 Mañana';
    } else if (hours >= 12 && (hours < 18 || (hours === 18 && minutes < 30))) {
      activePhase = 'afternoon';
      labelText = '☀️ Tarde';
    } else if ((hours === 18 && minutes >= 30) || hours === 19) {
      activePhase = 'sunset';
      labelText = '🌇 Atardecer';
    } else {
      activePhase = 'night';
      labelText = '🌙 Noche';
    }
  } else {
    // Modo de previsualización manual si hicieron clic en la píldora
    activePhase = appState.windowTimeMode;
    const labels = {
      morning: '🌅 Mañana',
      afternoon: '☀️ Tarde',
      sunset: '🌇 Atardecer',
      night: '🌙 Noche'
    };
    labelText = `${labels[activePhase]} (Vista)`;
  }

  labelEl.textContent = labelText;

  // Actualizar clases de momento del día en la ventana
  nook.classList.remove('time-morning', 'time-afternoon', 'time-sunset', 'time-night');
  nook.classList.add(`time-${activePhase}`);
}

// ===================================================================
// MOTOR DE ILUMINACIÓN Y REFLEJO DINÁMICO EN MADERA DE ROBLE
// Las esquinas y cantos del mueble responden interactivamente a la luz
// ===================================================================
function initBookshelfLightingEngine() {
  const furniture = document.getElementById('bookshelfFurniture');
  if (!furniture) return;

  // Seguimiento suave del cursor sobre la madera
  furniture.addEventListener('mousemove', (e) => {
    const rect = furniture.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, Math.round(((e.clientX - rect.left) / rect.width) * 100)));
    const y = Math.min(100, Math.max(0, Math.round(((e.clientY - rect.top) / rect.height) * 100)));

    furniture.style.setProperty('--light-x', `${x}%`);
    furniture.style.setProperty('--light-y', `${y}%`);
  });

  furniture.addEventListener('mouseleave', () => {
    // Vuelve suavemente al ángulo de luz cenital natural desde la esquina superior izquierda
    furniture.style.setProperty('--light-x', '35%');
    furniture.style.setProperty('--light-y', '18%');
  });
}

// ===================================================================
// RENDERIZADO GLOBAL & LÓGICA 100% REAL DE ESTADÍSTICAS
// ===================================================================
function getFilteredBooks() {
  return appState.books.filter(b => {
    const matchesReader = appState.activeReaderFilter === 'all' || b.reader === appState.activeReaderFilter;
    const matchesSearch = !appState.searchQuery || 
      b.title.toLowerCase().includes(appState.searchQuery) || 
      (b.author && b.author.toLowerCase().includes(appState.searchQuery));
    return matchesReader && matchesSearch;
  });
}

function renderApp() {
  updateRealStats();
  renderFurniturePreviews();
  updateMascotDialogue();

  // Si la vitrina de una repisa está abierta, sincronizarla
  if (appState.activeShelfId) {
    renderSectionStage(appState.activeShelfId);
  }
}

// Cálculo 100% real basado en el lector seleccionado
function updateRealStats() {
  // 1. Libros en total: siempre es el total de libros en el mueble, igual para todos los lectores
  const totalBooks = appState.books.length;

  // 2. Libros pertenecientes al lector seleccionado en la sesión activa
  const isAll = appState.activeReaderFilter === 'all';
  const readerBooks = isAll
    ? appState.books
    : appState.books.filter(b => b.reader === appState.activeReaderFilter);

  let reading = 0;
  let completed = 0;
  let totalPagesRead = 0;

  readerBooks.forEach(b => {
    const totalP = Math.max(1, Number(b.totalPages) || 1);
    const curP = Math.min(Math.max(0, Number(b.currentPage) || 0), totalP);
    totalPagesRead += curP;

    if (b.status === 'completed' || curP >= totalP) {
      completed++;
    } else if (b.status === 'reading' || curP > 0) {
      reading++;
    }
  });

  // 3. Progreso general: libros completados por el lector entre el total de libros del librero
  const progressPct = totalBooks > 0 ? Math.round((completed / totalBooks) * 100) : 0;

  // 4. Actualizar números en pantalla
  document.getElementById('statTotalBooks').textContent = totalBooks;
  document.getElementById('statReading').textContent = reading;
  document.getElementById('statCompleted').textContent = completed;
  document.getElementById('statTotalPages').textContent = totalPagesRead.toLocaleString();
  document.getElementById('statAvgProgress').textContent = `${progressPct}%`;

  const miniBar = document.getElementById('statMiniBarFill');
  if (miniBar) {
    miniBar.style.width = `${progressPct}%`;
  }

  // Mostrar u ocultar el banner de bienvenida cuando no hay libros
  const emptyHint = document.getElementById('emptyLibraryHint');
  if (emptyHint) {
    if (appState.books.length === 0) {
      emptyHint.classList.remove('hidden');
    } else {
      emptyHint.classList.add('hidden');
    }
  }
}

// Diálogo dinámico de la ardillita mascota
function updateMascotDialogue() {
  const dialogueText = document.getElementById('mascotDialogueText');
  if (!dialogueText) return;

  const total = appState.books.length;
  if (total === 0) {
    dialogueText.textContent = `¡Hola! Tu librero está listo para llenarse con tus libros favoritos. Selecciona cualquier repisa para entrar o los cajones inferiores para organizar tu papelería y recuerdos. 🌸🪻`;
    return;
  }

  const isAll = appState.activeReaderFilter === 'all';
  const currentReader = appState.activeReaderFilter;
  const readerBooks = isAll 
    ? appState.books 
    : appState.books.filter(b => b.reader === currentReader);

  const completed = readerBooks.filter(b => b.status === 'completed' || (b.currentPage || 0) >= (b.totalPages || 1)).length;
  const reading = readerBooks.filter(b => (b.status === 'reading' || (b.currentPage || 0) > 0) && (b.currentPage || 0) < (b.totalPages || 1)).length;

  if (isAll) {
    dialogueText.textContent = `¡Llevamos ${total} libro${total === 1 ? '' : 's'} en el librero y ${completed} completado${completed === 1 ? '' : 's'} entre todos! 🍃 ¿Cuál vamos a leer hoy en la isla?`;
  } else {
    dialogueText.textContent = `¡Hola, ${currentReader}! 🌸 Tienes ${reading} libro${reading === 1 ? '' : 's'} en lectura activa y ${completed} completado${completed === 1 ? '' : 's'}. 🍃 ¿Cuál vamos a leer hoy?`;
  }
}

// ===================================================================
// VISTA PREVIA DE LOS 4 CAJONES EN EL MUEBLE
// ===================================================================
function renderDrawersFace() {
  Object.keys(appState.drawers).forEach(drawerId => {
    const data = appState.drawers[drawerId];
    const pill = document.getElementById(`label-${drawerId}`);
    if (pill && data) {
      pill.innerHTML = `
        <span class="drawer-icon">${data.icon || '📦'}</span>
        <span class="drawer-name">${escapeHTML(data.name || 'Cajón')}</span>
      `;
    }
  });
}

// ===================================================================
// VISTA PREVIA DE LIBROS EN LAS REPISAS DEL MUEBLE (Estilo Photo 1)
// ===================================================================
function renderFurniturePreviews() {
  const books = getFilteredBooks();

  const shelfMap = {};
  Object.keys(SHELF_DEFINITIONS).forEach(id => shelfMap[id] = []);

  books.forEach(b => {
    if (shelfMap[b.shelfId]) {
      shelfMap[b.shelfId].push(b);
    }
  });

  Object.keys(SHELF_DEFINITIONS).forEach(shelfId => {
    const container = document.getElementById(`preview-${shelfId}`);
    if (!container) return;

    container.innerHTML = '';
    const shelfBooks = shelfMap[shelfId];

    // 1. Renderizar libros reales registrados por los lectores
    shelfBooks.forEach((book, index) => {
      const miniSpine = document.createElement('div');
      miniSpine.className = 'mini-book-spine real-book';
      miniSpine.style.backgroundColor = book.spineColor || '#9575cd';

      const randomHeight = 52 + ((book.title.length * 7) % 18);
      miniSpine.style.height = `${randomHeight}px`;

      const spineWidth = Math.min(18, Math.max(12, Math.round((book.totalPages || 200) / 28)));
      miniSpine.style.width = `${spineWidth}px`;

      const pct = Math.round(((book.currentPage || 0) / (book.totalPages || 1)) * 100);
      miniSpine.title = `📖 ${book.title} - ${book.author} (${pct}%)`;

      miniSpine.addEventListener('click', (e) => {
        e.stopPropagation();
        openSectionModal(shelfId);
      });

      container.appendChild(miniSpine);
    });

    // 2. Si la repisa tiene pocos libros, añadir volúmenes decorativos temáticos para llenar el mueble como en Photo 1
    const palette = SHELF_DECORATIVE_PALETTES[shelfId] || ['#c084fc', '#f472b6', '#38bdf8', '#fbbf24'];
    const targetCount = 6;
    const needed = Math.max(0, targetCount - shelfBooks.length);

    for (let i = 0; i < needed; i++) {
      const decoSpine = document.createElement('div');
      decoSpine.className = 'mini-book-spine deco-book';
      decoSpine.style.backgroundColor = palette[i % palette.length];

      const h = 48 + ((i * 9) % 22);
      decoSpine.style.height = `${h}px`;
      decoSpine.style.width = `${12 + (i % 3) * 2}px`;
      decoSpine.title = `Colección ${SHELF_DEFINITIONS[shelfId]?.name || 'Librero'}`;

      if (i === 0 && needed >= 4) {
        decoSpine.classList.add('spine-tilted-left');
      }

      decoSpine.addEventListener('click', (e) => {
        e.stopPropagation();
        openSectionModal(shelfId);
      });

      container.appendChild(decoSpine);
    }
  });
}

// ===================================================================
// MODAL DE ZOOM / ENTRAR A UNA REPISA DE LIBROS
// ===================================================================
function openSectionModal(shelfId) {
  appState.activeShelfId = shelfId;
  const shelfInfo = SHELF_DEFINITIONS[shelfId] || { name: 'Repisa', category: 'Librero' };

  document.getElementById('activeSectionCategory').textContent = shelfInfo.category;
  document.getElementById('activeSectionTitle').textContent = shelfInfo.name;

  renderSectionStage(shelfId);
  document.getElementById('sectionModalBackdrop').classList.add('open');
}

function closeSectionModal() {
  document.getElementById('sectionModalBackdrop').classList.remove('open');
  appState.activeShelfId = null;
}

function renderSectionStage(shelfId) {
  const container = document.getElementById('booksShelfDisplay');
  const statsElem = document.getElementById('activeSectionStats');
  container.innerHTML = '';

  const books = getFilteredBooks().filter(b => b.shelfId === shelfId);
  statsElem.textContent = `${books.length} libro${books.length === 1 ? '' : 's'} en esta repisa`;

  if (books.length === 0) {
    container.innerHTML = `
      <div class="empty-shelf-banner">
        <div class="empty-shelf-icon">🌸📖</div>
        <div class="empty-shelf-text">Esta repisa está vacía y lista para recibir libros</div>
        <button class="btn btn-ac-primary" onclick="openBookModal(null, '${shelfId}')">
          🌸 + Colocar Primer Libro Aquí
        </button>
      </div>
    `;
    return;
  }

  books.forEach(book => {
    const totalP = Number(book.totalPages) || 1;
    const curP = Math.min(Number(book.currentPage) || 0, totalP);
    const pct = Math.round((curP / totalP) * 100);
    const isCompleted = pct >= 100;

    const height = Math.min(270, Math.max(185, 190 + ((book.totalPages || 200) % 70)));
    const width = Math.min(75, Math.max(50, Math.round((book.totalPages || 200) / 6)));

    const bookElem = document.createElement('div');
    bookElem.className = 'book-3d-item';
    bookElem.style.backgroundColor = book.spineColor || '#9575cd';
    bookElem.style.height = `${height}px`;
    bookElem.style.width = `${width}px`;

    const ribbonClass = isCompleted ? 'book-ribbon-tag completed' : 'book-ribbon-tag';
    const readerEmoji = book.reader === appState.readers[0] ? '🌸' : (book.reader === appState.readers[1] ? '☕' : '👤');

    bookElem.innerHTML = `
      <div class="${ribbonClass}">${pct}%</div>
      <div class="book-spine-content">
        <div class="book-spine-title">${escapeHTML(book.title)}</div>
        <div class="book-spine-author">${escapeHTML(book.author || 'Autor')}</div>
      </div>
      <div class="book-reader-dot" title="Lector(a): ${escapeHTML(book.reader)}">${readerEmoji}</div>
    `;

    bookElem.addEventListener('click', () => {
      openBookModal(book.id);
    });

    container.appendChild(bookElem);
  });
}

// ===================================================================
// MODAL DE CAJÓN: ORGANIZADOR DE ARCHIVOS, PAPELERÍA Y RECUERDOS
// ===================================================================
function openDrawerModal(drawerId) {
  appState.activeDrawerId = drawerId;
  const drawer = appState.drawers[drawerId] || { name: 'Cajón', icon: '✏️', notes: '' };

  const titleMap = {
    'cajon-izq-1': 'Cajón Izquierdo Superior',
    'cajon-izq-2': 'Cajón Izquierdo Inferior',
    'cajon-der-1': 'Cajón Derecho Superior',
    'cajon-der-2': 'Cajón Derecho Inferior'
  };

  document.getElementById('drawerModalTitle').textContent = titleMap[drawerId] || 'Organizador de Cajón';
  document.getElementById('drawerNameInput').value = drawer.name || '';
  document.getElementById('drawerIconInput').value = drawer.icon || '✏️';
  document.getElementById('drawerNotesInput').value = drawer.notes || '';

  // Quitar presets activos
  document.querySelectorAll('.btn-preset').forEach(b => b.classList.remove('active'));

  document.getElementById('drawerModalBackdrop').classList.add('open');
}

function closeDrawerModal() {
  document.getElementById('drawerModalBackdrop').classList.remove('open');
  appState.activeDrawerId = null;
}

function handleSaveDrawer() {
  if (!appState.activeDrawerId) return;

  const name = document.getElementById('drawerNameInput').value.trim() || 'Cajón';
  const icon = document.getElementById('drawerIconInput').value.trim() || '📦';
  const notes = document.getElementById('drawerNotesInput').value.trim();

  appState.drawers[appState.activeDrawerId] = { name, icon, notes };
  saveDrawers();
  closeDrawerModal();
}

// ===================================================================
// MODAL DE LIBRO: CREAR / EDITAR / ACTUALIZAR PÁGINAS Y %
// ===================================================================
function openBookModal(bookId = null, defaultShelfId = null) {
  const form = document.getElementById('bookForm');
  form.reset();

  const modalTitle = document.getElementById('bookModalTitle');
  const deleteBtn = document.getElementById('deleteBookBtn');
  const bookIdInput = document.getElementById('bookIdInput');

  if (bookId) {
    const book = appState.books.find(b => b.id === bookId);
    if (!book) return;

    modalTitle.textContent = 'Editar Libro & Progreso';
    deleteBtn.classList.remove('hidden');

    bookIdInput.value = book.id;
    document.getElementById('bookTitleInput').value = book.title;
    document.getElementById('bookAuthorInput').value = book.author || '';
    document.getElementById('bookReaderInput').value = book.reader || appState.readers[0];
    document.getElementById('bookShelfInput').value = book.shelfId;
    document.getElementById('bookTotalPages').value = book.totalPages || 300;
    document.getElementById('bookCurrentPage').value = book.currentPage || 0;
    document.getElementById('bookRating').value = book.rating || '0';
    document.getElementById('bookNotes').value = book.notes || '';

    appState.selectedSpineColor = book.spineColor || '#9575cd';
  } else {
    modalTitle.textContent = 'Añadir Nuevo Libro';
    deleteBtn.classList.add('hidden');
    bookIdInput.value = '';

    if (defaultShelfId) {
      document.getElementById('bookShelfInput').value = defaultShelfId;
    }
    document.getElementById('bookReaderInput').value = appState.activeReaderFilter !== 'all' ? appState.activeReaderFilter : appState.readers[0];
    document.getElementById('bookTotalPages').value = 300;
    document.getElementById('bookCurrentPage').value = 0;
    appState.selectedSpineColor = '#9575cd';
  }

  // Paleta de colores
  document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.classList.toggle('selected', swatch.getAttribute('data-color') === appState.selectedSpineColor);
  });
  document.getElementById('customColorPicker').value = appState.selectedSpineColor;

  updateFormProgressPreview();
  document.getElementById('bookModalBackdrop').classList.add('open');
}

function closeBookModal() {
  document.getElementById('bookModalBackdrop').classList.remove('open');
}

function updateFormProgressPreview() {
  const cur = parseInt(document.getElementById('bookCurrentPage').value) || 0;
  const tot = Math.max(1, parseInt(document.getElementById('bookTotalPages').value) || 1);
  const pct = Math.min(100, Math.max(0, Math.round((cur / tot) * 100)));

  document.getElementById('calculatedPercent').textContent = `${pct}%`;
  document.getElementById('progressBarFill').style.width = `${pct}%`;

  const statusLabel = document.getElementById('calculatedStatus');
  if (statusLabel) {
    if (pct >= 100) statusLabel.textContent = '🌟 ¡Completado!';
    else if (cur > 0) statusLabel.textContent = '📖 Leyendo';
    else statusLabel.textContent = 'Por empezar';
  }
}

function handleBookFormSubmit(e) {
  e.preventDefault();

  const id = document.getElementById('bookIdInput').value;
  const title = document.getElementById('bookTitleInput').value.trim();
  const author = document.getElementById('bookAuthorInput').value.trim();
  const reader = document.getElementById('bookReaderInput').value;
  const shelfId = document.getElementById('bookShelfInput').value;
  const totalPages = Math.max(1, parseInt(document.getElementById('bookTotalPages').value) || 1);
  const currentPage = Math.min(totalPages, Math.max(0, parseInt(document.getElementById('bookCurrentPage').value) || 0));
  const rating = document.getElementById('bookRating').value;
  const notes = document.getElementById('bookNotes').value.trim();

  if (id) {
    const index = appState.books.findIndex(b => b.id === id);
    if (index !== -1) {
      appState.books[index] = {
        ...appState.books[index],
        title,
        author,
        reader,
        shelfId,
        totalPages,
        currentPage,
        rating,
        notes,
        spineColor: appState.selectedSpineColor
      };
    }
  } else {
    const newBook = {
      id: 'book-' + Date.now(),
      title,
      author,
      reader,
      shelfId,
      totalPages,
      currentPage,
      rating,
      notes,
      spineColor: appState.selectedSpineColor
    };
    appState.books.push(newBook);
  }

  saveData();
  closeBookModal();
}

function handleDeleteCurrentBook() {
  const id = document.getElementById('bookIdInput').value;
  if (!id) return;

  if (confirm('¿Deseas eliminar este libro de la estantería?')) {
    appState.books = appState.books.filter(b => b.id !== id);
    saveData();
    closeBookModal();
  }
}

// ===================================================================
// RESPALDOS JSON
// ===================================================================
function exportBackupJSON() {
  const payload = {
    books: appState.books,
    drawers: appState.drawers,
    readers: appState.readers,
    shelfTitle: appState.shelfTitle,
    blindHeight: appState.blindHeight,
    windowTimeMode: appState.windowTimeMode,
    exportedAt: new Date().toISOString()
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `librero-isla-${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importBackupJSON(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const importedData = JSON.parse(event.target.result);
      if (Array.isArray(importedData)) {
        appState.books = importedData;
      } else if (importedData && typeof importedData === 'object') {
        if (Array.isArray(importedData.books)) appState.books = importedData.books;
        if (importedData.drawers) appState.drawers = importedData.drawers;
        if (importedData.readers) appState.readers = importedData.readers;
        if (importedData.shelfTitle) appState.shelfTitle = importedData.shelfTitle;
        if (typeof importedData.blindHeight === 'number') {
          appState.blindHeight = importedData.blindHeight;
          setBlindHeight(appState.blindHeight, false);
          saveBlindHeight();
        }
        if (importedData.windowTimeMode) {
          appState.windowTimeMode = importedData.windowTimeMode;
          updateZakiaSky();
        }

        saveConfig();
        saveDrawers();
        updateReadersDropdowns();
        updateShelfTitleUI();
      } else {
        alert('El archivo no tiene el formato esperado.');
        return;
      }
      saveData();
      alert(`¡Respaldo importado correctamente!`);
      document.getElementById('backupModalBackdrop').classList.remove('open');
    } catch (err) {
      alert('Error al leer el archivo JSON: ' + err.message);
    }
  };
  reader.readAsText(file);
}

// Helper para sanitizar texto
function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
