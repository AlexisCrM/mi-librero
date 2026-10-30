/**
 * MI LIBRERO ISLEÑO 🌸📚
 * Lógica 100% real y reactiva
 * Tema: Lavandas, Rosa Pastel, Ardillas y Animal Crossing
 */

// ===================================================================
// DEFINICIÓN DE REPISAS (Solo para libros)
// ===================================================================
const SHELF_DEFINITIONS = {
  'col-izq-1': { name: 'Repisa 1 (Superior)', category: 'Romance', category2: '' },
  'col-izq-2': { name: 'Repisa 2', category: 'Ciencia Ficción', category2: '' },
  'col-izq-3': { name: 'Repisa 3', category: 'Manga', category2: '' },
  'col-izq-4': { name: 'Repisa 4', category: 'Novelas', category2: '' },
  'col-izq-5': { name: 'Repisa 5', category: 'Pendientes', category2: '' },
  'col-izq-6': { name: 'Repisa 6 (Inferior)', category: 'Favoritos', category2: '' },

  'puente-1':  { name: 'Puente 1 (Izquierdo)', category: 'Fantasía', category2: '' },
  'puente-2':  { name: 'Puente 2 (Derecho)', category: 'Clásicos', category2: '' },

  'col-der-1': { name: 'Repisa 1 (Superior)', category: 'Misterio', category2: '' },
  'col-der-2': { name: 'Repisa 2 (Colección)', category: 'Crecimiento', category2: '' },
  'col-der-3': { name: 'Repisa 3', category: 'Recetas', category2: '' },
  'col-der-4': { name: 'Repisa 4', category: 'Poesía & Arte', category2: '' },
  'col-der-5': { name: 'Repisa 5', category: 'Libros en Inglés', category2: '' },
  'col-der-6': { name: 'Repisa 6 (Inferior)', category: 'Por leer', category2: '' }
};

// ===================================================================
// DEFINICIÓN DE LOS 4 CAJONES (2 de un lado y 2 del otro - No para libros)
// ===================================================================
const DEFAULT_DRAWERS = {
  'cajon-izq-1': {
    name: 'Papelería & Stickers',
    icon: '✏️',
    items: ['Plumas pastel', 'Stickers de Animal Crossing', 'Clips dorados', 'Post-its'],
    notes: 'Plumas pastel, stickers de Animal Crossing, clips dorados y post-its.'
  },
  'cajon-izq-2': {
    name: 'Archivos & Documentos',
    icon: '📁',
    items: ['Carpetas importantes', 'Garantías', 'Documentos'],
    notes: 'Carpetas, documentos importantes y garantías.'
  },
  'cajon-der-1': {
    name: 'Cuadernos & Libretas',
    icon: '📓',
    items: ['Bullet journal', 'Libreta de notas', 'Agendas 2026', 'Separadores'],
    notes: 'Bullet journal, libreta de notas, agendas y separadores.'
  },
  'cajon-der-2': {
    name: 'Recuerdos & Varios',
    icon: '🌸',
    items: ['Fotografías', 'Cartas', 'Recuerdos especiales', 'Regalitos'],
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
    shelfId: 'col-der-2',
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
const DEFAULT_COLLECTIONS = [
  'Clásicos Inolvidables',
  'Trilogía de la Fundación',
  'Crónica del Asesino de Reyes',
  'Realismo Mágico',
  'Desarrollo & Hábitos',
  'Novelas Contemporáneas',
  'Misterios & Policiaca'
];

let appState = {
  books: [...PHOTO_1_STARTER_BOOKS], // Precargado con la hermosa colección de Photo 1
  drawers: { ...DEFAULT_DRAWERS },
  readers: ['Carolina Ornelas'],
  collections: [...DEFAULT_COLLECTIONS],
  shelfTitle: 'El Rincón de Lectura & Lavanda',
  activeShelfId: null,
  activeDrawerId: null,
  currentActiveBookId: null,
  activeReaderFilter: 'Carolina Ornelas',
  searchQuery: '',
  selectedAddSpineColor: '#9575cd',
  selectedEditSpineColor: '#9575cd',
  blindHeight: 35, // Altura de persiana en porcentaje (10% a 88%)
  windowTimeMode: 'auto' // 'auto', 'morning', 'afternoon', 'sunset', 'night'
};

const STORAGE_KEY_BOOKS = 'mi_librero_books_v2';
const STORAGE_KEY_DRAWERS = 'mi_librero_drawers_v2';
const STORAGE_KEY_CONFIG = 'mi_librero_config_v2';
const STORAGE_KEY_COLLECTIONS = 'mi_librero_collections_v2';
const STORAGE_KEY_BLIND = 'mi_librero_blind_v2';
const STORAGE_KEY_TIME_MODE = 'mi_librero_time_mode_v2';

// ===================================================================
// INICIALIZACIÓN
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  setupEventListeners();
  initWindowControls();
  initLocationDetection();
  initZakiaTimeEngine();
  initBookshelfLightingEngine();
  initStickyNoteQuotes();
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

  // Migrar libros con 'Ella' o 'Él' hacia 'Carolina Ornelas', y reasignar antiguo puente-3 a col-der-2
  let booksMigrated = false;
  appState.books.forEach(b => {
    if (b.reader === 'Ella' || b.reader === 'Él' || !b.reader) {
      b.reader = 'Carolina Ornelas';
      booksMigrated = true;
    }
    if (b.shelfId === 'puente-3') {
      b.shelfId = 'col-der-2';
      booksMigrated = true;
    }
  });
  if (booksMigrated) {
    localStorage.setItem(STORAGE_KEY_BOOKS, JSON.stringify(appState.books));
  }

  // Asegurar que cualquier lector registrado en libros existentes se encuentre en appState.readers
  appState.books.forEach(b => {
    if (b.reader && b.reader !== 'Ella' && b.reader !== 'Él' && !appState.readers.includes(b.reader)) {
      appState.readers.push(b.reader);
    }
  });

  // 4. Cargar Persiana y Modo de Tiempo de Zakia
  const savedTimeMode = localStorage.getItem(STORAGE_KEY_TIME_MODE);
  if (savedTimeMode) {
    appState.windowTimeMode = savedTimeMode;
  }

  // 5. Cargar foto personalizada del centro del librero
  const customImg = localStorage.getItem('mi_librero_custom_window_img');
  const windowImg = document.getElementById('windowSceneImg');
  if (customImg && windowImg) {
    windowImg.src = customImg;
  }

  // 6. Cargar frase personalizada del jardín
  const customSign = localStorage.getItem('mi_librero_garden_sign');
  const signText = document.getElementById('gardenSignpostText');
  if (customSign && signText) {
    signText.textContent = customSign;
  }

  // 7. Cargar categorías personalizadas de repisas (Catálogo Gandhi / Personalizadas)
  loadSavedShelfCategories();

  // 8. Cargar Colecciones Guardadas (Persistentes para futuros libros)
  const savedCols = localStorage.getItem(STORAGE_KEY_COLLECTIONS);
  if (savedCols) {
    try {
      const parsed = JSON.parse(savedCols);
      if (Array.isArray(parsed) && parsed.length > 0) {
        appState.collections = parsed;
      }
    } catch (e) {}
  }

  // Si solo hay 1 lector, asegurar que el filtro activo sea ese lector
  if (appState.readers.length === 1) {
    appState.activeReaderFilter = appState.readers[0];
  } else if (appState.activeReaderFilter !== 'all' && !appState.readers.includes(appState.activeReaderFilter)) {
    appState.activeReaderFilter = appState.readers[0];
  }

  updateReadersDropdowns();
  updateCollectionDropdowns();
  updateShelfTitleUI();
  updateShelfPlaquesUI();
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
  const addReaderSelect = document.getElementById('addBookReader');
  const editReaderSelect = document.getElementById('editBookReader');
  const legacyReaderInput = document.getElementById('bookReaderInput');
  if (!selectFilter) return;

  selectFilter.innerHTML = '';

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
  });

  [addReaderSelect, editReaderSelect, legacyReaderInput].forEach(sel => {
    if (!sel) return;
    const currentVal = sel.value;
    sel.innerHTML = '';
    appState.readers.forEach((reader, index) => {
      const icon = index === 0 ? '🌸' : '☕';
      const opt = document.createElement('option');
      opt.value = reader;
      opt.textContent = `${icon} ${reader}`;
      sel.appendChild(opt);
    });
    if (currentVal && appState.readers.includes(currentVal)) {
      sel.value = currentVal;
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
  // Clic en cualquier repisa del mueble (con animación de zoom y apertura estilo Animal Crossing)
  document.querySelectorAll('[data-shelf-id]').forEach(elem => {
    elem.addEventListener('click', () => {
      const shelfId = elem.getAttribute('data-shelf-id');
      triggerShelfZoom(elem, shelfId);
    });
  });

  // Clic en los 4 cajones (con apertura física en 3D y tarjeta que emerge del cajón)
  document.querySelectorAll('[data-drawer-id]').forEach(elem => {
    elem.addEventListener('click', () => {
      const drawerId = elem.getAttribute('data-drawer-id');
      triggerDrawerOpening(elem, drawerId);
    });
  });

  // Cerrar modal de repisa
  document.getElementById('closeSectionModalBtn').addEventListener('click', closeSectionModal);
  document.getElementById('sectionModalBackdrop').addEventListener('click', (e) => {
    if (e.target.id === 'sectionModalBackdrop') closeSectionModal();
  });

  // Selectores desplegables de categorías (Categoría 1 y Categoría 2) estilo Gandhi en repisa
  ['shelfCategorySelect', 'shelfCategory2Select'].forEach((selId, index) => {
    const sel = document.getElementById(selId);
    if (!sel) return;

    sel.addEventListener('change', (e) => {
      const selectedVal = e.target.value;
      if (!appState.activeShelfId) return;

      const shelfId = appState.activeShelfId;
      const isSecond = index === 1;

      if (selectedVal === '__custom__') {
        const currentVal = isSecond ? (SHELF_DEFINITIONS[shelfId]?.category2 || '') : (SHELF_DEFINITIONS[shelfId]?.category || '');
        const customName = prompt(`Escribe el nombre de la ${isSecond ? 'segunda' : 'primera'} categoría personalizada:`, currentVal);
        if (customName && customName.trim()) {
          const finalCat = customName.trim();
          const customOpt = document.createElement('option');
          customOpt.value = finalCat;
          customOpt.textContent = `🏷️ ${finalCat}`;
          const group = sel.querySelector('optgroup[label*="Organización"]') || sel;
          group.insertBefore(customOpt, group.lastElementChild);
          sel.value = finalCat;
        } else {
          sel.value = currentVal;
          return;
        }
      }

      const sel1 = document.getElementById('shelfCategorySelect');
      const sel2 = document.getElementById('shelfCategory2Select');
      const cat1 = sel1 ? sel1.value : (SHELF_DEFINITIONS[shelfId]?.category || 'Romance');
      const cat2 = sel2 ? sel2.value : '';

      setShelfCategories(shelfId, cat1, cat2);
    });
  });

  // Botón "Agregar Libro Aquí" dentro de la repisa
  document.getElementById('addBookInThisShelfBtn').addEventListener('click', () => {
    openAddBookModal(appState.activeShelfId);
  });

  // Botón "+ Añadir Libro" global
  document.getElementById('quickAddBookBtn').addEventListener('click', () => {
    openAddBookModal(appState.activeShelfId || 'puente-2');
  });

  // Cerrar modales de libros
  document.getElementById('closeAddBookBtn')?.addEventListener('click', closeBookModals);
  document.getElementById('cancelAddBookBtn')?.addEventListener('click', closeBookModals);
  document.getElementById('closeProgressBookBtn')?.addEventListener('click', closeBookModals);
  document.getElementById('closeEditBookBtn')?.addEventListener('click', closeBookModals);
  document.getElementById('bookModalBackdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'bookModalBackdrop') closeBookModals();
  });

  // Botón "✏️ Editar Libro" dentro de la tarjeta de Progreso (reemplaza al botón Cancelar)
  document.getElementById('openEditFromProgressBtn')?.addEventListener('click', () => {
    if (appState.currentActiveBookId) {
      openEditBookModal(appState.currentActiveBookId);
    }
  });

  // Botón "← Volver a Progreso" dentro de Editar Libro
  document.getElementById('backToProgressBtn')?.addEventListener('click', () => {
    if (appState.currentActiveBookId) {
      openProgressModal(appState.currentActiveBookId);
    }
  });

  // Envíos de los formularios
  document.getElementById('addBookForm')?.addEventListener('submit', handleAddBookFormSubmit);
  document.getElementById('progressBookForm')?.addEventListener('submit', handleProgressFormSubmit);
  document.getElementById('editBookForm')?.addEventListener('submit', handleEditBookFormSubmit);
  document.getElementById('deleteBookFromProgressBtn')?.addEventListener('click', handleDeleteCurrentBook);

  // Cálculo en vivo de progreso de páginas en la tarjeta Progreso
  const curPageInput = document.getElementById('progressCurrentPage');
  const totPageInput = document.getElementById('progressTotalPages');
  if (curPageInput) curPageInput.addEventListener('input', updateProgressModalPreview);
  if (totPageInput) totPageInput.addEventListener('input', updateProgressModalPreview);

  // Selectores de colecciones con opción "➕ Añadir Nueva Colección..."
  ['addBookCollectionSelect', 'editBookCollectionSelect'].forEach(selId => {
    const el = document.getElementById(selId);
    if (el) {
      el.addEventListener('change', (e) => {
        if (e.target.value === '__new__') {
          handlePromptNewCollection(e.target);
        }
      });
    }
  });

  // Paleta de colores para Añadir Libro
  setupColorPalette('addColorPalette', 'addCustomColorPicker', (color) => {
    appState.selectedAddSpineColor = color;
  });

  // Paleta de colores para Editar Libro
  setupColorPalette('editColorPalette', 'editCustomColorPicker', (color) => {
    appState.selectedEditSpineColor = color;
  });

  // Modal de Cajón
  document.getElementById('closeDrawerModalBtn').addEventListener('click', closeDrawerModal);
  document.getElementById('cancelDrawerBtn').addEventListener('click', closeDrawerModal);
  document.getElementById('drawerModalBackdrop').addEventListener('click', (e) => {
    if (e.target.id === 'drawerModalBackdrop') closeDrawerModal();
  });

  // Selector desplegable de íconos del cajón (Abrir / Cerrar ventana)
  const openIconPickerBtn = document.getElementById('openDrawerIconPickerBtn');
  const iconPopover = document.getElementById('drawerIconPopover');
  const closeIconPopoverBtn = document.getElementById('closeIconPopoverBtn');

  if (openIconPickerBtn && iconPopover) {
    openIconPickerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      iconPopover.classList.toggle('open');
    });
  }

  if (closeIconPopoverBtn && iconPopover) {
    closeIconPopoverBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      iconPopover.classList.remove('open');
    });
  }

  // Selección de ícono al hacer clic en cualquiera de las opciones
  document.querySelectorAll('.btn-icon-choice').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const chosenIcon = btn.textContent.trim();
      document.getElementById('drawerIconInput').value = chosenIcon;
      document.getElementById('drawerIconPreview').textContent = chosenIcon;
      if (iconPopover) iconPopover.classList.remove('open');
    });
  });

  // Agregar objetos uno a uno con botón '+' o Enter
  const addDrawerItemBtn = document.getElementById('addDrawerItemBtn');
  const newDrawerItemInput = document.getElementById('newDrawerItemInput');

  if (addDrawerItemBtn) {
    addDrawerItemBtn.addEventListener('click', addDrawerItem);
  }

  if (newDrawerItemInput) {
    newDrawerItemInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addDrawerItem();
      }
    });
  }

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
      closeBookModals();
      closeSectionModal();
      closeDrawerModal();
      document.getElementById('backupModalBackdrop').classList.remove('open');
    }
  });

  // Tarjeta de Nuez: Clic para descubrir sus 50 mensajes diferentes
  const mascotBubble = document.getElementById('mascotSpeechBubble');
  if (mascotBubble) {
    mascotBubble.addEventListener('click', cycleMascotMessage);
    mascotBubble.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        cycleMascotMessage();
      }
    });
  }

  // Notita adhesiva Foto 2: Clic para descubrir sus 100 frases cozy
  const stickyCard = document.getElementById('cozyStickyCard');
  if (stickyCard) {
    stickyCard.addEventListener('click', cycleStickyQuote);
    stickyCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        cycleStickyQuote();
      }
    });
  }
}

// ===================================================================
// DETECCIÓN DE UBICACIÓN (ZAKIA, QRO / GEOLOCALIZACIÓN DEL VISITANTE)
// ===================================================================
async function initLocationDetection() {
  const locEl = document.getElementById('windowLocationText');
  if (!locEl) return;

  // 1. Por defecto siempre inicia en Zakia, Qro.
  locEl.textContent = '📍 Zakia, Qro.';

  // 2. Intentar geolocalización por IP ligera para detectar dónde está ubicada la persona
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2200);
    const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data.city) {
        const region = data.region_code || data.region || '';
        const detected = region ? `${data.city}, ${region}` : data.city;
        locEl.textContent = `📍 ${detected}`;
      }
    }
  } catch (err) {
    // Si falla o no hay conexión externa, se mantiene con orgullo Zakia, Qro.
  }
}

// ===================================================================
// AUDIO / MÚSICA AMBIENTAL (Taylor Swift - Playlist multi-parte sin límites)
// ===================================================================
let bgMusicAudio = null;
let audioCtx = null;
let isMusicPlaying = false;
let musicInterval = null;

const TAYLOR_PLAYLIST = [
  'music/Taylor_part1.mp3',
  'music/Taylor_part2.mp3',
  'music/Taylor_part3.mp3'
];
let currentPlaylistIdx = 0;

const PENTATONIC_FREQS = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];

function initCozyAudio() {
  if (bgMusicAudio) return bgMusicAudio;

  const audioEl = document.getElementById('bgMusicTrack');
  bgMusicAudio = audioEl || new Audio(TAYLOR_PLAYLIST[0]);
  bgMusicAudio.volume = 0.65;

  // Manejador de error para probar automáticamente la siguiente parte o archivo local
  bgMusicAudio.addEventListener('error', (e) => {
    console.warn('Error al cargar pista de música:', bgMusicAudio.currentSrc || bgMusicAudio.src, e);
    if (currentPlaylistIdx < TAYLOR_PLAYLIST.length - 1) {
      currentPlaylistIdx++;
      console.log('Intentando parte #' + (currentPlaylistIdx + 1) + ' de Taylor Swift:', TAYLOR_PLAYLIST[currentPlaylistIdx]);
      bgMusicAudio.src = TAYLOR_PLAYLIST[currentPlaylistIdx];
      bgMusicAudio.load();
      if (isMusicPlaying) {
        bgMusicAudio.play().catch(err => console.warn('Error al reproducir pista alternativa:', err));
      }
    } else {
      // Fallback a archivo unificado local si existe
      bgMusicAudio.src = 'music/Taylor.mp3';
      bgMusicAudio.load();
      if (isMusicPlaying) {
        bgMusicAudio.play().catch(err => console.warn('Fallback local falló:', err));
      }
    }
  });

  // BUCLE CONTINUO: cuando termine una parte, reproducir automáticamente la siguiente en cadena
  bgMusicAudio.addEventListener('ended', () => {
    currentPlaylistIdx = (currentPlaylistIdx + 1) % TAYLOR_PLAYLIST.length;
    console.log('Reproduciendo siguiente parte de Taylor Swift #' + (currentPlaylistIdx + 1) + ':', TAYLOR_PLAYLIST[currentPlaylistIdx]);
    bgMusicAudio.src = TAYLOR_PLAYLIST[currentPlaylistIdx];
    bgMusicAudio.load();
    const replayPromise = bgMusicAudio.play();
    if (replayPromise !== undefined) {
      replayPromise.catch(err => console.warn('Error al continuar playlist de Taylor Swift:', err));
    }
  });

  // Sincronizar el botón visual con los estados de audio
  bgMusicAudio.addEventListener('play', () => {
    isMusicPlaying = true;
    const btn = document.getElementById('btnToggleMusic');
    btn?.classList.add('playing');
    btn?.setAttribute('title', 'Pausar música ⏸️ (Taylor Swift)');
  });

  bgMusicAudio.addEventListener('pause', () => {
    isMusicPlaying = false;
    const btn = document.getElementById('btnToggleMusic');
    btn?.classList.remove('playing');
    btn?.setAttribute('title', 'Reproducir música 🎵 (Taylor Swift)');
  });

  return bgMusicAudio;
}

function toggleCozyMusic() {
  const audio = initCozyAudio();
  const btn = document.getElementById('btnToggleMusic');

  if (audio.paused) {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isMusicPlaying = true;
          btn?.classList.add('playing');
          btn?.setAttribute('title', 'Pausar música ⏸️ (Taylor Swift)');
        })
        .catch((err) => {
          console.warn('El navegador bloqueó la reproducción automática o hubo un fallo de carga:', err);
          // Intentar reanudar AudioContext o fallback
          if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
          if (audioCtx.state === 'suspended') audioCtx.resume();
          isMusicPlaying = true;
          btn?.classList.add('playing');
          startCozyChimes();
        });
    }
  } else {
    audio.pause();
    isMusicPlaying = false;
    btn?.classList.remove('playing');
    btn?.setAttribute('title', 'Reproducir música 🎵 (Taylor Swift)');
    stopCozyChimes();
  }
}

function playSoftChime(freq, duration = 2.8) {
  if (!audioCtx || !isMusicPlaying) return;
  const now = audioCtx.currentTime;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, now);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(750, now);

  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.045, now + 0.12);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + duration + 0.1);
}

function startCozyChimes() {
  function nextChime() {
    if (!isMusicPlaying) return;
    const randomFreq = PENTATONIC_FREQS[Math.floor(Math.random() * PENTATONIC_FREQS.length)];
    playSoftChime(randomFreq, 2.8);

    if (Math.random() > 0.45) {
      setTimeout(() => {
        if (!isMusicPlaying) return;
        const harmonyFreq = randomFreq * (Math.random() > 0.5 ? 1.25 : 1.5);
        playSoftChime(harmonyFreq, 2.3);
      }, 320);
    }

    const nextDelay = 1900 + Math.random() * 1700;
    musicInterval = setTimeout(nextChime, nextDelay);
  }
  nextChime();
}

function stopCozyChimes() {
  if (musicInterval) {
    clearTimeout(musicInterval);
    musicInterval = null;
  }
}

// ===================================================================
// CONTROLES DE LA VENTANA (Música, Cambio de Foto y Configuración)
// ===================================================================
function initWindowControls() {
  // 1. Botón de Música
  const btnMusic = document.getElementById('btnToggleMusic');
  if (btnMusic) {
    btnMusic.addEventListener('click', toggleCozyMusic);
  }

  // 2. Botón de Cambiar / Agregar Foto
  const btnPhoto = document.getElementById('btnChangePhoto');
  const photoInput = document.getElementById('windowPhotoInput');
  const windowImg = document.getElementById('windowSceneImg');

  if (btnPhoto && photoInput) {
    btnPhoto.addEventListener('click', () => photoInput.click());
  }

  // También desde el modal de configuración
  const btnUploadModal = document.getElementById('btnUploadPhotoModal');
  if (btnUploadModal && photoInput) {
    btnUploadModal.addEventListener('click', () => photoInput.click());
  }

  if (photoInput && windowImg) {
    photoInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          windowImg.src = dataUrl;
          localStorage.setItem('mi_librero_custom_window_img', dataUrl);
          alert('¡Foto del centro del librero actualizada con éxito! 🌸📸');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Restablecer foto original de Zakia
  const btnResetPhoto = document.getElementById('btnResetPhotoModal');
  if (btnResetPhoto && windowImg) {
    btnResetPhoto.addEventListener('click', () => {
      localStorage.removeItem('mi_librero_custom_window_img');
      windowImg.src = 'assets/window_scene.jpg';
      alert('Se ha restablecido la vista ilustrada original de Zakia 🌿');
    });
  }

  // 3. Modal de Configuración
  const btnSettings = document.getElementById('btnWindowSettings');
  const settingsModal = document.getElementById('windowSettingsModalBackdrop');
  const closeSettingsBtn = document.getElementById('closeWindowSettingsBtn');

  if (btnSettings && settingsModal) {
    btnSettings.addEventListener('click', () => {
      // Actualizar estado activo de botones de modo de luz
      document.querySelectorAll('.btn-time-opt').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-mode') === appState.windowTimeMode);
      });
      // Cargar frase actual del jardín
      const signText = document.getElementById('gardenSignpostText');
      const signInput = document.getElementById('gardenSignInput');
      if (signText && signInput) signInput.value = signText.textContent.trim();

      settingsModal.classList.add('open');
    });
  }

  if (closeSettingsBtn && settingsModal) {
    closeSettingsBtn.addEventListener('click', () => settingsModal.classList.remove('open'));
  }

  if (settingsModal) {
    settingsModal.addEventListener('click', (e) => {
      if (e.target.id === 'windowSettingsModalBackdrop') settingsModal.classList.remove('open');
    });
  }

  // Opciones de momento de luz dentro del modal
  document.querySelectorAll('.btn-time-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-mode');
      appState.windowTimeMode = mode;
      localStorage.setItem(STORAGE_KEY_TIME_MODE, mode);
      document.querySelectorAll('.btn-time-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateZakiaSky();
    });
  });

  // Guardar frase del jardín
  const btnSaveSign = document.getElementById('btnSaveGardenSign');
  const signInput = document.getElementById('gardenSignInput');
  const signText = document.getElementById('gardenSignpostText');
  if (btnSaveSign && signInput && signText) {
    btnSaveSign.addEventListener('click', () => {
      const val = signInput.value.trim();
      if (val) {
        signText.textContent = val;
        localStorage.setItem('mi_librero_garden_sign', val);
        alert('¡Frase guardada con éxito! 🌸');
      }
    });
  }

  // Botón para abrir modal de backup desde configuración
  const btnOpenBackup = document.getElementById('btnOpenBackupModalFromSettings');
  if (btnOpenBackup) {
    btnOpenBackup.addEventListener('click', () => {
      settingsModal?.classList.remove('open');
      document.getElementById('backupModalBackdrop')?.classList.add('open');
    });
  }
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
  updateStickyQuote();

  // Sincronizar la ardilla correspondiente al lector activo
  if (typeof refreshSquirrelForActiveReader === 'function') {
    refreshSquirrelForActiveReader();
  }

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

// ===================================================================
// 50 MENSAJES VARIADOS DE NUEZ LA ARDILLITA GUÍA
// ===================================================================
const NUEZ_MESSAGES_50 = [
  // 1-10: Bienvenida, bellotas y tesoros literarios
  "¡Hola! Soy Nuez 🌸 ¿Sabías que guardar libros en el librero es como guardar bellotas para el invierno? ¡Cada uno es un tesoro!",
  "¡Bienvenida a nuestro rincón de paz! Prepara un tecito caliente de lavanda y cuéntame qué página leeremos hoy. 🫖💜",
  "¡Un día sin leer es como una ardilla sin nuez! Hojeemos un ratito hoy. 🌰📖",
  "¡Hola, {reader}! 🌸 Tienes {reading} libro{s_reading} en curso y {completed} completado{s_completed}. ¡Qué orgullo tan grande!",
  "¡Llevamos {total} historias increíbles en este librero! Cada repisa tiene su propia magia isleña. ✨",
  "Tip de ardillita: Si una página te hace sonreír, anótala en las notas o citas memorables del libro. 📝💕",
  "¿Escuchas el viento suave entre los árboles de la isla? Es el clima perfecto para perderse en un buen capítulo. 🍃🍂",
  "¡Hoy es un día hermoso para avanzar aunque sea cinco paginitas! Pasito a pasito se llega a la copa del roble. 🐿️🌱",
  "Acabo de sacudir las repisas superiores... ¡huele a lavanda fresca y papel nuevo! ¿Por cuál empezamos? 🪻📚",
  "¡Psst! Fígaro me preparó un café con leche de pichón mientras leías. ¡Te guardé una galletita con forma de bellota! ☕🍪",

  // 11-20: Cozy tips, música y hábitos lectores
  "Si alguna vez necesitas paz para concentrarte, activa la música de piano con el botón de la ventana. ¡Es pura calma! 🎶🎹",
  "¡Un aplauso para {reader}! 🎉 Ya has terminado {completed} libro{s_completed}. ¡Te mereces una lluvia de estrellas fugaces!",
  "¡Mira cuántos mundos habitan en estas maderas! Desde romances de época hasta misterios bajo la lluvia. 🏰🌧️",
  "A veces me siento sobre la repisa de Clásicos a ver el atardecer por la ventana. ¡Es el mejor mirador del mundo! 🌅🐿️",
  "¿Tienes a la mano tu separador favorito? Las ardillitas jamás doblamos las esquinas de las páginas, ¡las cuidamos como oro! 📑✨",
  "¡Hola! ¿Buscabas inspiración? Recuerda que leer no es una carrera de velocidad, es un abrazo al corazón con calma. 🛋️🌸",
  "Hoy vi cruzar una mariposa celeste junto al librero... dicen en la isla que trae suerte para encontrar lecturas de 5 estrellas. 🦋🌟",
  "¡Tengo mis patitas listas para ayudarte a organizar repisas o buscar lo que guardaste en los cajones! 📦🐾",
  "¿Sabías que el aroma a lavanda relaja la mente? Por eso nuestro rincón huele tan dulce y sereno. 🪻💭",
  "¡Totakeke me contó que las mejores canciones nacen después de leer un poema inolvidable! 🎸🎵",

  // 21-30: Aventuras, géneros y momentos acogedores
  "Dime qué género te apetece hoy: ¿algo de romance tierno, fantasía épica o misterio? ¡Toca una repisa para entrar! 🧭✨",
  "¡Me fascina cuando un libro es tan atrapante que no puedes soltarlo ni para cenar! ¿Te ha pasado esta semana? 🌙📖",
  "Recuerda que puedes cambiar la foto del centro del librero cuando quieras para admirar tus recuerdos favoritos. 🖼️💖",
  "¡{reader}, tu constancia lectora ilumina este rincón más que una noche de luciérnagas de verano! 🌟",
  "Entre capítulo y capítulo, acuérdate de estirar tus bracitos y tomar un sorbito de agua fresca o té. 💧🌿",
  "Si el mundo de afuera hace demasiado ruido, ven conmigo: abramos un libro y creemos un universo propio. 🚪🕊️",
  "¡Tengo una nuez dorada escondida en el librero! Bueno, en realidad es un secreto... ¡la cambié por un marcapáginas de flores! 🌰🌸",
  "¡5 estrellas para tu pasión lectora! Cada historia que terminas se queda grabada para siempre en tu memoria. ⭐⭐⭐⭐⭐",
  "¿Ya checaste la notita adhesiva al lado? Tócale y verás pensamientos hermosos sobre libros, flores y canciones. 📌💌",
  "¡Qué emoción ver cómo se llena nuestro mueble de roble! Pronto tendremos que pedirle a Tom Nook una ampliación. 🏠✨",

  // 31-40: Reflexiones cálidas y pequeños placeres
  "A veces los libros más pequeñitos son los que guardan los mensajes más gigantescos para el alma. 🐾💕",
  "Hoy el cielo está teñido de violeta... el clima oficial para leer bajo una mantita tejida con amor. 🌧️🕯️",
  "¡Hola, {reader}! ¿Seguimos con el libro que tienes en curso o exploramos una nueva repisa? 📖💫",
  "¡No hay nada más reconfortante que encender una velita aromática, ponerte tu suéter favorito y escuchar las páginas crujir! 🧶🕯️",
  "¡Las ardillitas coleccionamos semillas y tú coleccionas grandes historias! Hacemos la mejor dupla de la isla. 🐿️🌱",
  "Si abres los cajones inferiores podrás ver tus notas, stickers y recuerdos siempre bien guardaditos. 🖍️🌸",
  "¡Qué satisfacción ver los lomos alineados por colores pastel! Nuestro librero parece salido de una postal. 🎨📚",
  "Nunca subestimes el poder de diez minutos de lectura antes de dormir; tus sueños se llenarán de magia. 🌙✨",
  "¡Amo cuando un final feliz nos hace suspirar y dar saltitos de alegría por toda la habitación! 🐿️🎉",
  "En este rincón siempre florecen cosas buenas. Respira hondo... y déjate llevar por las siguientes líneas. 🌸🍃",

  // 41-50: Afecto, motivación y ternura isleña
  "¡Aviso de ternura! Si te quedas dormida leyendo, prometo taparte con una hojita suave de cerezo. 🌸😴",
  "¡La imaginación no tiene fronteras! Hoy podemos viajar a castillos lejanos o a jardines secretos sin salir de la habitación. 🚀🏰",
  "¡Gracias por visitar nuestro librero hoy, {reader}! Pasar tiempo contigo entre libros es mi momento preferido. 💖",
  "¡Una repisa ordenada con amor es el mejor remedio para un día cansado! 🌿📖",
  "¿Qué tal una melodía acústica suavecita de fondo mientras descubres el desenlace de tu libro? 🎶🎻",
  "¡Cada libro que abres es una puerta mágica y cada autor se convierte en un amigo que te habla al oído! 🤝✨",
  "¡Dicen en la isla que quien lee bajo las ramas de wisteria sueña con historias de amor verdadero! 🪻🕊️",
  "¡Hoy celebramos que leíste! No importa si leíste una sola página o tres capítulos enteros, ¡cada página cuenta! 📈🌷",
  "Tus gustos literarios son preciosos. ¡Me encanta trepar por las repisas a curiosear tus selecciones! 🧐📚",
  "¡Siempre que quieras charlar o necesites una dosis de ánimo, haz clic en mi tarjeta y aquí estaré para ti! 🐿️💕"
];

// ===================================================================
// 100 FRASES CORTITAS PARA LA NOTA ADHESIVA (FOTO 2)
// Temas: Libros, Ardillas, Lavanda, Animal Crossing, Taylor Swift
// ===================================================================
const COZY_QUOTES_100 = [
  // --- 1 a 20: Libros & Lectura ---
  "Pequeños libros, grandes aventuras 💕",
  "Un libro abierto es un refugio esperándote 📖✨",
  "Perderse en una buena historia es encontrarse a uno mismo 🌿",
  "Solo un capítulo más y a dormir... prometido 🌙💤",
  "El olor a libro nuevo alegra cualquier tarde gris ☕📚",
  "Vivir mil vidas distintas en una sola biblioteca 🌸",
  "Un marcapáginas es un boleto de tren a otro universo 🚂✨",
  "Quedarse despierta leyendo porque la ficción es hermosa 🌟",
  "Las conversaciones más íntimas se leen en papel 💌",
  "Un buen libro, una manta suave y una taza de té 🛋️🫖",
  "Donde las palabras susurran, el corazón descansa 🕊️",
  "Cada página leída es un regalo que te haces a ti misma 🌷",
  "La magia existe: viene encuadernada en pasta dura ✨📕",
  "Lecturas compartidas que unen almas para siempre 💕",
  "Subrayar frases que parecen escritas justo para ti ✏️💭",
  "Hogar es donde tus libros favoritos te esperan 🏡📚",
  "Viajar al pasado, al futuro y a las estrellas en un sillón 🚀⭐",
  "Un gran final te acompaña en el corazón toda la vida 💖",
  "Coleccionar libros es coleccionar portales para soñar 🌸",
  "Tu librero cuenta la historia más bonita: la tuya 📖🌿",

  // --- 21 a 40: Ardillas, Bellotas & Naturaleza ---
  "Paso a pasito, como ardillita guardando tesoros 🐿️🌰",
  "Una bellota hoy, un roble gigante mañana 🌱✨",
  "Las cosas más dulces de la vida caben entre dos patitas 🐾💕",
  "Saltar de rama en rama y de página en página 🍃🐿️",
  "Guardar momentos felices como nueces para el invierno 🌰🍂",
  "La curiosidad de una ardillita siempre encuentra maravillas 🌸",
  "Mañanas tibias entre piñas de pino y musgo verde 🌲☀️",
  "El secreto de la felicidad: una nuez, sol y calma 🐿️✨",
  "Dejar huellitas de ternura por dondequiera que pases 🐾💖",
  "Un corazón generoso siempre tiene una bellota para compartir 🌰🤝",
  "Abrazos esponjosos que abrigan los días más fríos 🐿️🧣",
  "El bosque guarda secretos que solo los lectores comprenden 🌲📚",
  "Una ardillita con un libro es el cuadro más tierno del mundo 🎨🐿️",
  "Pequeñas patitas, grandes sueños en el horizonte 🌅🐾",
  "Leer en el huequito acogedor de un viejo roble 🌳📖",
  "Encontrar un gran libro es hallar la nuez dorada del bosque 🌰🌟",
  "La serenidad del bosque se parece a leer en silencio 🍃🕊️",
  "Atesora cada recuerdo feliz como una semilla mágica 🌱🌸",
  "Cola esponjosa, corazón contento y páginas por descubrir 🐿️💕",
  "La naturaleza escribe los mejores versos en sus hojas 🍂📜",

  // --- 41 a 60: Lavanda & Flores ---
  "Respirar hondo y dejar que florezca la calma 🪻🌿",
  "El suave susurro de los campos de lavanda al viento 💜💨",
  "Pétalos lilas que perfuman nuestras tardes de lectura 🌸🪻",
  "Donde florecen flores, florece la esperanza en el alma 🌷✨",
  "Un té de lavanda y miel para acariciar los pensamientos 🫖🍯",
  "La delicadeza de una flor es la mayor fuerza del jardín 🌸🌱",
  "Llenar la vida de detalles lilas y sonrisas sinceras 💜😊",
  "Tardes de wisteria cayendo suave sobre el librero 🪻📖",
  "Florecer a tu propio ritmo, sin prisas y con amor propio 🌺🕊️",
  "Cuidar tus lecturas como riegas tus flores consentidas 🪴💧",
  "Un rincón que huele a primavera en cualquier estación 🌸🏡",
  "La lavanda nos enseña que la belleza florece en la paz 🪻💫",
  "Bañar las mañanas de sol con rocío sobre los jazmines 🌼☀️",
  "Flores silvestres que crecen libres entre los libros 🌾📚",
  "Un ramito de lavanda seca entre las páginas de un diario 💜🔖",
  "El jardín de tus sueños se cultiva leyendo cada día 🌷📖",
  "Pétalos flotando en la brisa de un atardecer dorado 🌸🌅",
  "La paz no se busca afuera, florece dentro de ti 🪻💖",
  "Aromas florales que te transportan a los recuerdos más felices 🌿💭",
  "Que nunca te falten flores frescas ni historias hermosas 💐💕",

  // --- 61 a 80: Animal Crossing & Vida en la Isla ---
  "La vida en la isla es más dulce con un buen libro en mano 🏝️📖",
  "Deseos pedidos a las estrellas fugaces en la orilla del mar 🌠✨",
  "Un café caliente servido con amor en El Alpiste de Fígaro ☕🕊️",
  "Totakeke tocando la guitarra acústica bajo la luz del farol 🎸🎶",
  "Plantar un árbol de duraznos y verlo crecer con paciencia 🍑🌱",
  "Buscar fósiles en la tierra y tesoros entre las páginas 🦴📚",
  "El buzón siempre guarda una carta con cariño de un amigo 💌🎁",
  "Caminar descalza por la arena recogiendo conchitas brillantes 🐚🌊",
  "Canela dando los buenos días con su alegría contagiosa 🐶🌸",
  "Una isla acogedora se construye con pequeños detalles de amor 🏡🌾",
  "Pescar momentos dorados en el río de la imaginación 🎣⭐",
  "Bajo el cielo estrellado de las dos de la mañana todo es paz 🌌🌙",
  "Los domingos de nabos se disfrutan mejor leyendo en el muelle 🥬⛵",
  "Un hogar isleño con repisas llenas de libros y recuerdos 🌸🛋️",
  "La brisa marina agitando las cortinas de encaje blanco 🪟🍃",
  "Globos con regalos volando sobre un cielo color pastel 🎈🎀",
  "Un banquito de madera junto al puente para leer al sol 🪵☀️",
  "Cazar mariposas de papel entre las páginas de una novela 🦋📖",
  "Si golpeas una roca, que sea para descubrir campanitas doradas 🔔💛",
  "En nuestra isla siempre habrá un lugar reservado para ti 🏝️💕",

  // --- 81 a 100: Taylor Swift & Folklore Coziness ---
  "And when I felt like I was an old cardigan, you put me on 🧶✨",
  "I just wanna stay in that lavender haze 🪻🌫️",
  "I once was poison ivy, but now I'm your daisy 🌼💖",
  "Step into the daylight and let it go ☀️🕊️",
  "Meet me behind the mall with a book in hand 📖🍁",
  "All's well that ends well to end up with you 💕✨",
  "Are there still beautiful things? Yes, right in these pages 🌿📚",
  "I'd give you my sunshine, give you my best ☀️💛",
  "Please don't ever become a stranger whose laugh I know 🍂🤍",
  "This love is glowing in the dark, like a bookmark in the night 🌙📖",
  "Time, mystical time, cutting me open, then healing me fine ⏳✨",
  "August sipped away like a bottle of wine... and a good story 🍷🍃",
  "I was enchanted to meet you in the pages of this book 🏰💫",
  "Shining just for you, like a disco mirrorball in the library 🪩✨",
  "You showed me colors you know I can't see with anyone else 🎨🌸",
  "Left my scarf at your house, but I brought all my books with me 🧣📚",
  "Sweet tea in the summer and poetry by the fire in the winter 🫖❄️",
  "Long story short, I survived and found my happy ending 🏰💖",
  "An invisible string tying your heart to every story you love 🧵✨",
  "And at every table, I'll save you a seat next to my books 🪑📖💕"
];

let currentNuezMessageIndex = 3; // Empezar con el saludo cálido y estadísticas del lector
let currentStickyQuoteIndex = 0;

// Reemplaza marcadores dinámicos ({reader}, {reading}, {completed}, {total}) con valores reales
function formatNuezMessage(template) {
  const isAll = appState.activeReaderFilter === 'all';
  const readerName = isAll ? 'amiga lectora' : (appState.activeReaderFilter || 'Carolina Ornelas');
  const readerBooks = isAll 
    ? appState.books 
    : appState.books.filter(b => b.reader === appState.activeReaderFilter);
  const total = appState.books.length;
  const completed = readerBooks.filter(b => b.status === 'completed' || (b.currentPage || 0) >= (b.totalPages || 1)).length;
  const reading = readerBooks.filter(b => (b.status === 'reading' || (b.currentPage || 0) > 0) && (b.currentPage || 0) < (b.totalPages || 1)).length;

  return template
    .replace(/{reader}/g, readerName)
    .replace(/{total}/g, total)
    .replace(/{reading}/g, reading)
    .replace(/{completed}/g, completed)
    .replace(/{s_reading}/g, reading === 1 ? '' : 's')
    .replace(/{s_completed}/g, completed === 1 ? '' : 's')
    .replace(/{s_total}/g, total === 1 ? '' : 's');
}

// Diálogo dinámico de la ardillita mascota (50 mensajes rotativos)
function updateMascotDialogue(forcedIndex = null) {
  const dialogueText = document.getElementById('mascotDialogueText');
  if (!dialogueText) return;

  if (forcedIndex !== null) {
    currentNuezMessageIndex = (forcedIndex % NUEZ_MESSAGES_50.length + NUEZ_MESSAGES_50.length) % NUEZ_MESSAGES_50.length;
  }

  const rawTemplate = NUEZ_MESSAGES_50[currentNuezMessageIndex] || NUEZ_MESSAGES_50[0];
  dialogueText.textContent = formatNuezMessage(rawTemplate);
}

// Avanzar al siguiente mensaje de Nuez con rebote animado
function cycleMascotMessage() {
  currentNuezMessageIndex = (currentNuezMessageIndex + 1) % NUEZ_MESSAGES_50.length;
  updateMascotDialogue();

  const bubble = document.getElementById('mascotSpeechBubble');
  if (bubble) {
    bubble.classList.remove('bubble-bounce');
    void bubble.offsetWidth;
    bubble.classList.add('bubble-bounce');
  }

  const mascotImg = document.getElementById('mascotBubbleImg');
  if (mascotImg) {
    mascotImg.classList.remove('mascot-talk-bounce');
    void mascotImg.offsetWidth;
    mascotImg.classList.add('mascot-talk-bounce');
    setTimeout(() => mascotImg.classList.remove('mascot-talk-bounce'), 550);
  }
}

// Actualizar el texto de la notita adhesiva Foto 2 (100 frases)
function updateStickyQuote(forcedIndex = null) {
  const quoteText = document.getElementById('stickyQuoteText');
  if (!quoteText) return;

  if (forcedIndex !== null) {
    currentStickyQuoteIndex = (forcedIndex % COZY_QUOTES_100.length + COZY_QUOTES_100.length) % COZY_QUOTES_100.length;
  }

  const quote = COZY_QUOTES_100[currentStickyQuoteIndex] || COZY_QUOTES_100[0];
  quoteText.textContent = quote;
}

// Avanzar a la siguiente frase con animación táctil de despegar papel
function cycleStickyQuote() {
  currentStickyQuoteIndex = (currentStickyQuoteIndex + 1) % COZY_QUOTES_100.length;
  
  const card = document.getElementById('cozyStickyCard');
  const quoteText = document.getElementById('stickyQuoteText');

  if (quoteText) {
    quoteText.style.opacity = '0';
    quoteText.style.transform = 'scale(0.95)';
  }

  if (card) {
    card.classList.remove('paper-peel-anim');
    void card.offsetWidth;
    card.classList.add('paper-peel-anim');
  }

  setTimeout(() => {
    updateStickyQuote();
    if (quoteText) {
      quoteText.style.opacity = '1';
      quoteText.style.transform = 'scale(1)';
    }
  }, 120);
}

// Elegir una frase inicial aleatoria para la nota adhesiva al cargar
function initStickyNoteQuotes() {
  currentStickyQuoteIndex = Math.floor(Math.random() * COZY_QUOTES_100.length);
  updateStickyQuote();
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
      const contentsPreview = data.items?.length ? data.items.join(', ') : (data.notes || '');
      pill.title = contentsPreview ? `${data.name}: ${contentsPreview}` : data.name;
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
        const shelfElem = document.querySelector(`[data-shelf-id="${shelfId}"]`);
        triggerShelfZoom(shelfElem, shelfId);
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
        const shelfElem = document.querySelector(`[data-shelf-id="${shelfId}"]`);
        triggerShelfZoom(shelfElem, shelfId);
      });

      container.appendChild(decoSpine);
    }
  });
}

// ===================================================================
// EFECTOS Y SONIDOS COTTAGE & ANIMAL CROSSING
// ===================================================================

function playAnimalCrossingChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const now = ctx.currentTime;

    // Tono 1: Campana aguda alegre (Nota E5 -> G#5)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(659.25, now);
    osc1.frequency.exponentialRampToValueAtTime(830.61, now + 0.08);
    gain1.gain.setValueAtTime(0.18, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.22);

    // Tono 2: Resonancia cálida estilo marimba Nintendo (B5 -> E6)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(987.77, now + 0.07);
    osc2.frequency.exponentialRampToValueAtTime(1318.51, now + 0.18);
    gain2.gain.setValueAtTime(0.14, now + 0.07);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.07);
    osc2.stop(now + 0.3);
  } catch(e) {
    // Si el navegador bloquea audio antes de interacción, continúa sin errores
  }
}

function createAnimalCrossingLeafBurst(shelfElem) {
  if (!shelfElem) return;
  const rect = shelfElem.getBoundingClientRect();
  const emojis = ['🍃', '🌸', '✨', '🌿', '🌸'];

  for (let i = 0; i < 6; i++) {
    const p = document.createElement('div');
    p.className = 'ac-shelf-particle';
    p.textContent = emojis[i % emojis.length];

    const startX = rect.left + rect.width * (0.25 + Math.random() * 0.5);
    const startY = rect.top + rect.height * (0.2 + Math.random() * 0.5);

    const tx = (Math.random() - 0.5) * 80;
    const ty = -35 - Math.random() * 35;
    const txEnd = tx * 1.5;
    const tyEnd = ty - 45 - Math.random() * 30;
    const rot = (Math.random() - 0.5) * 70;
    const rotEnd = (Math.random() - 0.5) * 140;

    p.style.left = `${startX}px`;
    p.style.top = `${startY}px`;
    p.style.setProperty('--tx', `${tx}px`);
    p.style.setProperty('--ty', `${ty}px`);
    p.style.setProperty('--tx-end', `${txEnd}px`);
    p.style.setProperty('--ty-end', `${tyEnd}px`);
    p.style.setProperty('--rot', `${rot}deg`);
    p.style.setProperty('--rot-end', `${rotEnd}deg`);

    document.body.appendChild(p);

    setTimeout(() => {
      p.remove();
    }, 780);
  }
}

function triggerShelfZoom(shelfElem, shelfId) {
  if (!shelfElem) {
    openSectionModal(shelfId);
    return;
  }

  // 1. Sonido tierno de bienvenida estilo Animal Crossing
  playAnimalCrossingChime();

  // 2. Ráfaga de hojitas y flores flotantes que brotan de la repisa
  createAnimalCrossingLeafBurst(shelfElem);

  // 3. Resaltar la repisa presionada con borde brillante
  document.querySelectorAll('.shelf-compartment').forEach(s => s.classList.remove('shelf-focus-pulse'));
  shelfElem.classList.add('shelf-focus-pulse');

  // 4. Calcular el centro de la repisa dentro del mueble para que la cámara haga zoom 3D hacia ella
  const furniture = document.getElementById('bookshelfFurniture');
  if (furniture) {
    const furnRect = furniture.getBoundingClientRect();
    const shelfRect = shelfElem.getBoundingClientRect();

    const originX = Math.min(95, Math.max(5, Math.round(((shelfRect.left + shelfRect.width / 2 - furnRect.left) / furnRect.width) * 100)));
    const originY = Math.min(95, Math.max(5, Math.round(((shelfRect.top + shelfRect.height / 2 - furnRect.top) / furnRect.height) * 100)));

    furniture.style.transformOrigin = `${originX}% ${originY}%`;
    furniture.classList.add('shelf-zoom-active');
  }

  // 5. Tras la animación de aproximación rápida (~270ms), desplegar la vitrina de la repisa (Foto 2)
  setTimeout(() => {
    openSectionModal(shelfId);
  }, 270);
}

// ===================================================================
// MODAL DE ZOOM / ENTRAR A UNA REPISA DE LIBROS
// ===================================================================
const STORAGE_KEY_SHELF_CATEGORIES = 'mi_librero_shelf_categories_v1';

function getShelfCategoryDisplay(shelfId) {
  const info = SHELF_DEFINITIONS[shelfId];
  if (!info) return { text: 'Romance', isDual: false, cat1: 'Romance', cat2: '' };

  const cat1 = (info.category || '').trim();
  const cat2 = (info.category2 || '').trim();

  if (cat1 && cat2) {
    return {
      text: `${cat1} • ${cat2}`,
      isDual: true,
      cat1,
      cat2
    };
  }

  return {
    text: cat1 || cat2 || 'General',
    isDual: false,
    cat1: cat1 || cat2 || 'General',
    cat2: ''
  };
}

function syncShelfCategorySelect(selectId, targetVal) {
  const select = document.getElementById(selectId);
  if (!select) return;

  const valClean = (targetVal || '').trim();
  if (!valClean) {
    select.value = '';
    return;
  }

  let matched = false;
  for (let i = 0; i < select.options.length; i++) {
    const opt = select.options[i];
    if (opt.value && opt.value.toLowerCase() === valClean.toLowerCase()) {
      select.value = opt.value;
      matched = true;
      break;
    }
  }

  if (!matched && valClean) {
    const customOpt = document.createElement('option');
    customOpt.value = valClean;
    customOpt.textContent = `🏷️ ${valClean}`;
    const group = select.querySelector('optgroup[label*="Organización"]') || select;
    group.insertBefore(customOpt, group.lastElementChild);
    select.value = valClean;
  }
}

function openSectionModal(shelfId) {
  appState.activeShelfId = shelfId;
  const catInfo = getShelfCategoryDisplay(shelfId);

  // 1. Título principal en grande con el nombre de la categoría (o ambas separadas con punto)
  const categoryElem = document.getElementById('activeSectionCategory');
  if (categoryElem) {
    if (catInfo.isDual) {
      categoryElem.classList.add('dual-title');
      categoryElem.innerHTML = `<span>${escapeHTML(catInfo.cat1)}</span><span class="category-title-sep">•</span><span>${escapeHTML(catInfo.cat2)}</span>`;
    } else {
      categoryElem.classList.remove('dual-title');
      categoryElem.textContent = catInfo.cat1;
    }
  }

  // 2. Título secundario si existiera en DOM
  const titleElem = document.getElementById('activeSectionTitle');
  if (titleElem) {
    titleElem.textContent = SHELF_DEFINITIONS[shelfId]?.name || 'Repisa';
  }

  // 3. Sincronizar los 2 selectores desplegables con catálogo Gandhi
  syncShelfCategorySelect('shelfCategorySelect', catInfo.cat1);
  syncShelfCategorySelect('shelfCategory2Select', catInfo.cat2);

  renderSectionStage(shelfId);
  document.getElementById('sectionModalBackdrop').classList.add('open');
}

function closeSectionModal() {
  const backdrop = document.getElementById('sectionModalBackdrop');
  if (backdrop) backdrop.classList.remove('open');
  appState.activeShelfId = null;

  // Restaurar el zoom del mueble suavemente
  const furniture = document.getElementById('bookshelfFurniture');
  if (furniture) {
    furniture.classList.remove('shelf-zoom-active');
  }
  document.querySelectorAll('.shelf-compartment').forEach(s => s.classList.remove('shelf-focus-pulse'));
}

function setShelfCategories(shelfId, newCat1, newCat2 = '') {
  if (!SHELF_DEFINITIONS[shelfId]) return;

  SHELF_DEFINITIONS[shelfId].category = (newCat1 || '').trim();
  SHELF_DEFINITIONS[shelfId].category2 = (newCat2 || '').trim();

  const catInfo = getShelfCategoryDisplay(shelfId);

  // Actualizar el título principal en grande del modal
  const catTitleEl = document.getElementById('activeSectionCategory');
  if (catTitleEl) {
    if (catInfo.isDual) {
      catTitleEl.classList.add('dual-title');
      catTitleEl.innerHTML = `<span>${escapeHTML(catInfo.cat1)}</span><span class="category-title-sep">•</span><span>${escapeHTML(catInfo.cat2)}</span>`;
    } else {
      catTitleEl.classList.remove('dual-title');
      catTitleEl.textContent = catInfo.cat1;
    }
    catTitleEl.classList.remove('category-pop-anim');
    void catTitleEl.offsetWidth; // reiniciar animación
    catTitleEl.classList.add('category-pop-anim');
  }

  // Actualizar placas del mueble y guardar
  updateShelfPlaquesUI();
  saveShelfCategories();
}

function setShelfCategory(shelfId, newCategory) {
  // Alias retrocompatible
  const currentCat2 = SHELF_DEFINITIONS[shelfId]?.category2 || '';
  setShelfCategories(shelfId, newCategory, currentCat2);
}

function saveShelfCategories() {
  const categoriesMap = {};
  Object.keys(SHELF_DEFINITIONS).forEach(id => {
    categoriesMap[id] = {
      category: SHELF_DEFINITIONS[id].category || '',
      category2: SHELF_DEFINITIONS[id].category2 || ''
    };
  });
  localStorage.setItem(STORAGE_KEY_SHELF_CATEGORIES, JSON.stringify(categoriesMap));
}

function loadSavedShelfCategories() {
  const saved = localStorage.getItem(STORAGE_KEY_SHELF_CATEGORIES);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      Object.keys(parsed).forEach(id => {
        if (SHELF_DEFINITIONS[id] && parsed[id]) {
          const item = parsed[id];
          if (typeof item === 'string') {
            SHELF_DEFINITIONS[id].category = item;
            SHELF_DEFINITIONS[id].category2 = '';
          } else if (item && typeof item === 'object') {
            SHELF_DEFINITIONS[id].category = item.category || '';
            SHELF_DEFINITIONS[id].category2 = item.category2 || '';
          }
        }
      });
    } catch (e) {
      console.error('Error al cargar categorías de repisas:', e);
    }
  }
}

function updateShelfPlaquesUI() {
  Object.keys(SHELF_DEFINITIONS).forEach(id => {
    const shelfEl = document.querySelector(`[data-shelf-id="${id}"]`);
    if (shelfEl) {
      const pill = shelfEl.querySelector('.compartment-tag-pill');
      if (pill) {
        const catInfo = getShelfCategoryDisplay(id);
        if (catInfo.isDual) {
          pill.classList.add('dual-category');
          pill.title = `Categorías: ${catInfo.cat1} • ${catInfo.cat2}`;
          pill.innerHTML = `
            <span class="tag-category dual-category">
              <span class="cat-part" title="${escapeHTML(catInfo.cat1)}">${escapeHTML(catInfo.cat1)}</span>
              <span class="cat-bullet">•</span>
              <span class="cat-part" title="${escapeHTML(catInfo.cat2)}">${escapeHTML(catInfo.cat2)}</span>
            </span>
          `;
        } else {
          pill.classList.remove('dual-category');
          pill.title = `Categoría: ${catInfo.cat1}`;
          pill.innerHTML = `<span class="tag-category" title="${escapeHTML(catInfo.cat1)}">${escapeHTML(catInfo.cat1)}</span>`;
        }
      }
    }
  });
  updateBookShelfDropdownOptions();
}

function updateBookShelfDropdownOptions() {
  const select = document.getElementById('bookShelfInput');
  if (!select) return;

  select.querySelectorAll('option').forEach(opt => {
    const shelfId = opt.value;
    if (SHELF_DEFINITIONS[shelfId]) {
      const catInfo = getShelfCategoryDisplay(shelfId);
      const baseLabel = opt.textContent.split(' - ')[0];
      opt.textContent = `${baseLabel} - ${catInfo.text}`;
    }
  });
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
        <button class="btn btn-ac-primary" onclick="openAddBookModal('${shelfId}')">
          🌸 + Colocar Primer Libro Aquí
        </button>
      </div>
    `;
    return;
  }

  books.forEach((book, index) => {
    const totalP = Number(book.totalPages) || 1;
    const curP = Math.min(Number(book.currentPage) || 0, totalP);
    const pct = Math.round((curP / totalP) * 100);
    const isCompleted = pct >= 100;

    const height = Math.min(270, Math.max(185, 190 + ((book.totalPages || 200) % 70)));
    const width = Math.min(75, Math.max(50, Math.round((book.totalPages || 200) / 6)));

    const bookElem = document.createElement('div');
    bookElem.className = 'book-3d-item ac-book-entrance';
    bookElem.style.animationDelay = `${index * 85 + 60}ms`;
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
      openProgressModal(book.id);
    });

    container.appendChild(bookElem);
  });
}

// ===================================================================
// MODAL DE CAJÓN: ORGANIZADOR DE ARCHIVOS, PAPELERÍA Y RECUERDOS
// ===================================================================
let currentDrawerItems = [];

function triggerDrawerOpening(drawerElem, drawerId) {
  // 1. Quitar animación activa de cualquier otro cajón
  document.querySelectorAll('.drawer-box').forEach(d => d.classList.remove('drawer-open-active'));

  // 2. Activar apertura física en 3D del cajón
  drawerElem.classList.add('drawer-open-active');

  // 3. Calcular la posición exacta de este cajón para que la tarjeta emerja desde su interior
  const rect = drawerElem.getBoundingClientRect();
  const drawerCenterX = rect.left + rect.width / 2;
  const drawerCenterY = rect.top + rect.height / 2;

  const viewportCenterX = window.innerWidth / 2;
  const viewportCenterY = window.innerHeight / 2;

  const deltaX = Math.round(drawerCenterX - viewportCenterX);
  const deltaY = Math.round(drawerCenterY - viewportCenterY);

  const modal = document.querySelector('.drawer-modal');
  if (modal) {
    modal.style.setProperty('--drawer-origin-x', `${deltaX}px`);
    modal.style.setProperty('--drawer-origin-y', `${deltaY}px`);
  }

  // 4. Tras una pequeña fracción donde el cajón se desliza hacia afuera, hacer emerger la tarjeta
  setTimeout(() => {
    openDrawerModal(drawerId);
  }, 120);
}

function openDrawerModal(drawerId) {
  appState.activeDrawerId = drawerId;
  const drawer = appState.drawers[drawerId] || { name: 'Cajón', icon: '📦', items: [], notes: '' };

  const nameInput = document.getElementById('drawerNameInput');
  const iconInput = document.getElementById('drawerIconInput');
  const iconPreview = document.getElementById('drawerIconPreview');
  const popover = document.getElementById('drawerIconPopover');

  if (nameInput) nameInput.value = drawer.name || '';
  if (iconInput) iconInput.value = drawer.icon || '📦';
  if (iconPreview) iconPreview.textContent = drawer.icon || '📦';
  if (popover) popover.classList.remove('open');

  // Inicializar lista de items
  if (drawer.items && Array.isArray(drawer.items) && drawer.items.length > 0) {
    currentDrawerItems = [...drawer.items];
  } else if (drawer.notes && typeof drawer.notes === 'string' && drawer.notes.trim()) {
    currentDrawerItems = drawer.notes.split(/,\s*|\n/).map(s => s.trim()).filter(Boolean);
  } else {
    currentDrawerItems = [];
  }

  renderDrawerItemsList();

  const itemInput = document.getElementById('newDrawerItemInput');
  if (itemInput) itemInput.value = '';

  document.getElementById('drawerModalBackdrop').classList.add('open');
}

function closeDrawerModal() {
  document.getElementById('drawerModalBackdrop').classList.remove('open');
  const popover = document.getElementById('drawerIconPopover');
  if (popover) popover.classList.remove('open');
  appState.activeDrawerId = null;

  // Cerrar suavemente el cajón de madera en el mueble
  setTimeout(() => {
    document.querySelectorAll('.drawer-box').forEach(d => d.classList.remove('drawer-open-active'));
  }, 160);
}

function renderDrawerItemsList() {
  const container = document.getElementById('drawerItemsContainer');
  if (!container) return;

  container.innerHTML = '';

  if (currentDrawerItems.length === 0) {
    container.innerHTML = `<span class="drawer-empty-hint">✨ El cajón está vacío. ¡Escribe arriba y presiona ➕ Agregar para guardar objetos!</span>`;
    return;
  }

  currentDrawerItems.forEach((item, index) => {
    const chip = document.createElement('div');
    chip.className = 'drawer-item-chip';
    chip.innerHTML = `
      <span class="item-chip-bullet">🌸</span>
      <span class="item-chip-text" title="${escapeHTML(item)}">${escapeHTML(item)}</span>
      <button type="button" class="btn-remove-chip" title="Eliminar ${escapeHTML(item)}">✕</button>
    `;

    chip.querySelector('.btn-remove-chip').addEventListener('click', (e) => {
      e.stopPropagation();
      removeDrawerItem(index);
    });

    container.appendChild(chip);
  });
}

function addDrawerItem() {
  const input = document.getElementById('newDrawerItemInput');
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  currentDrawerItems.push(text);
  input.value = '';
  input.focus();
  renderDrawerItemsList();
}

function removeDrawerItem(index) {
  if (index >= 0 && index < currentDrawerItems.length) {
    currentDrawerItems.splice(index, 1);
    renderDrawerItemsList();
  }
}

function handleSaveDrawer() {
  if (!appState.activeDrawerId) return;

  const name = document.getElementById('drawerNameInput').value.trim() || 'Cajón';
  const icon = document.getElementById('drawerIconInput').value.trim() || '📦';
  const items = [...currentDrawerItems];
  const notes = items.join(', ');

  appState.drawers[appState.activeDrawerId] = { name, icon, items, notes };
  saveDrawers();
  closeDrawerModal();
}

// ===================================================================
// MODALES MODULARES: AÑADIR LIBRO / PROGRESO / EDITAR LIBRO
// ===================================================================

function setupColorPalette(containerId, pickerId, onSelect) {
  const container = document.getElementById(containerId);
  const picker = document.getElementById(pickerId);
  if (!container) return;

  container.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      container.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
      swatch.classList.add('selected');
      const color = swatch.getAttribute('data-color');
      if (picker) picker.value = color;
      if (onSelect) onSelect(color);
    });
  });

  if (picker) {
    picker.addEventListener('input', (e) => {
      const color = e.target.value;
      container.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
      if (onSelect) onSelect(color);
    });
  }
}

function addCollection(name) {
  if (!name || !name.trim()) return;
  const clean = name.trim();
  if (!appState.collections.includes(clean)) {
    appState.collections.push(clean);
    localStorage.setItem(STORAGE_KEY_COLLECTIONS, JSON.stringify(appState.collections));
  }
  updateCollectionDropdowns(clean);
}

function updateCollectionDropdowns(selectedVal = '') {
  ['addBookCollectionSelect', 'editBookCollectionSelect'].forEach(selId => {
    const sel = document.getElementById(selId);
    if (!sel) return;
    const current = selectedVal || sel.value;
    sel.innerHTML = '<option value="">(Sin colección)</option>';

    appState.collections.forEach(col => {
      const opt = document.createElement('option');
      opt.value = col;
      opt.textContent = `📚 ${col}`;
      sel.appendChild(opt);
    });

    const newOpt = document.createElement('option');
    newOpt.value = '__new__';
    newOpt.textContent = '➕ Añadir Nueva Colección...';
    sel.appendChild(newOpt);

    if (current && appState.collections.includes(current)) {
      sel.value = current;
    }
  });
}

function handlePromptNewCollection(selectElem) {
  const name = prompt('Nombre de la nueva Colección o Serie de libros:');
  if (name && name.trim()) {
    addCollection(name.trim());
    selectElem.value = name.trim();
  } else {
    selectElem.value = '';
  }
}

function closeBookModals() {
  const backdrop = document.getElementById('bookModalBackdrop');
  if (backdrop) backdrop.classList.remove('open');
  document.getElementById('cardAddBook')?.classList.add('hidden');
  document.getElementById('cardProgressBook')?.classList.add('hidden');
  document.getElementById('cardEditBook')?.classList.add('hidden');
  appState.currentActiveBookId = null;
}

// 1. Abrir Modal "Añadir Nuevo Libro"
function openAddBookModal(defaultShelfId = null) {
  updateReadersDropdowns();
  updateCollectionDropdowns();

  const addCard = document.getElementById('cardAddBook');
  const progCard = document.getElementById('cardProgressBook');
  const editCard = document.getElementById('cardEditBook');

  if (progCard) progCard.classList.add('hidden');
  if (editCard) editCard.classList.add('hidden');
  if (addCard) addCard.classList.remove('hidden');

  const form = document.getElementById('addBookForm');
  if (form) form.reset();

  const shelfInput = document.getElementById('addBookShelfId') || document.getElementById('addBookShelfHidden');
  if (shelfInput) {
    shelfInput.value = defaultShelfId || appState.activeShelfId || 'col-izq-1';
  }

  const readerSelect = document.getElementById('addBookReader');
  if (readerSelect) {
    const activeReader = (appState.activeReaderFilter && appState.activeReaderFilter !== 'all')
      ? appState.activeReaderFilter
      : (appState.readers[0] || 'Carolina Ornelas');
    readerSelect.value = activeReader;
  }

  const pagesInput = document.getElementById('addBookTotalPages');
  if (pagesInput) pagesInput.value = 300;
  appState.selectedAddSpineColor = '#9575cd';

  const addPalette = document.getElementById('addColorPalette');
  if (addPalette) {
    addPalette.querySelectorAll('.color-swatch').forEach(sw => {
      sw.classList.toggle('selected', sw.getAttribute('data-color') === '#9575cd');
    });
  }
  const customAddColor = document.getElementById('addCustomColorPicker');
  if (customAddColor) customAddColor.value = '#9575cd';

  const backdrop = document.getElementById('bookModalBackdrop');
  if (backdrop) backdrop.classList.add('open');
}

// 2. Abrir Modal "Progreso" (Al dar clic a un libro en la estantería)
function openProgressModal(bookId) {
  const book = appState.books.find(b => b.id === bookId);
  if (!book) return;

  appState.currentActiveBookId = book.id;

  const addCard = document.getElementById('cardAddBook');
  const progCard = document.getElementById('cardProgressBook');
  const editCard = document.getElementById('cardEditBook');

  if (addCard) addCard.classList.add('hidden');
  if (editCard) editCard.classList.add('hidden');
  if (progCard) progCard.classList.remove('hidden');

  const idInput = document.getElementById('progressBookId');
  if (idInput) idInput.value = book.id;

  const subtitle = document.getElementById('progressBookSubtitle');
  if (subtitle) {
    subtitle.textContent = `${book.title}${book.author ? ' • ' + book.author : ''}`;
  }

  const totalPages = Math.max(1, Number(book.totalPages) || 300);
  const curPage = Math.min(totalPages, Math.max(0, Number(book.currentPage) || 0));

  const totInput = document.getElementById('progressTotalPages');
  const curInput = document.getElementById('progressCurrentPage');
  const ratingInput = document.getElementById('progressRating');
  const notesInput = document.getElementById('progressNotes');

  if (totInput) totInput.value = totalPages;
  if (curInput) curInput.value = curPage;
  if (ratingInput) ratingInput.value = book.rating || '0';
  if (notesInput) notesInput.value = book.notes || '';

  updateProgressModalPreview();

  const backdrop = document.getElementById('bookModalBackdrop');
  if (backdrop) backdrop.classList.add('open');
}

function updateProgressModalPreview() {
  const curInput = document.getElementById('progressCurrentPage');
  const totInput = document.getElementById('progressTotalPages');
  if (!curInput || !totInput) return;

  const cur = parseInt(curInput.value) || 0;
  const tot = Math.max(1, parseInt(totInput.value) || 1);
  const pct = Math.min(100, Math.max(0, Math.round((cur / tot) * 100)));

  const pctBadge = document.getElementById('progressCalculatedPercent');
  const barFill = document.getElementById('progressProgressBarFill');
  const statusLabel = document.getElementById('progressCalculatedStatus');

  if (pctBadge) pctBadge.textContent = `${pct}%`;
  if (barFill) barFill.style.width = `${pct}%`;
  if (statusLabel) {
    if (pct >= 100) statusLabel.textContent = '🌟 ¡Completado!';
    else if (cur > 0) statusLabel.textContent = '📖 Leyendo';
    else statusLabel.textContent = 'Por empezar';
  }
}

// 3. Abrir Modal "Editar Libro" (Desde el botón ✏️ Editar Libro dentro de Progreso)
function openEditBookModal(bookId) {
  const book = appState.books.find(b => b.id === bookId);
  if (!book) return;

  appState.currentActiveBookId = book.id;

  const addCard = document.getElementById('cardAddBook');
  const progCard = document.getElementById('cardProgressBook');
  const editCard = document.getElementById('cardEditBook');

  if (addCard) addCard.classList.add('hidden');
  if (progCard) progCard.classList.add('hidden');
  if (editCard) editCard.classList.remove('hidden');

  const idInput = document.getElementById('editBookId');
  if (idInput) idInput.value = book.id;

  const titleInput = document.getElementById('editBookTitle');
  if (titleInput) titleInput.value = book.title || '';

  const authorInput = document.getElementById('editBookAuthor');
  if (authorInput) authorInput.value = book.author || '';

  updateReadersDropdowns();
  const readerSelect = document.getElementById('editBookReader');
  if (readerSelect) {
    if (book.reader && !appState.readers.includes(book.reader)) {
      const opt = document.createElement('option');
      opt.value = book.reader;
      opt.textContent = `🌸 ${book.reader}`;
      readerSelect.appendChild(opt);
    }
    readerSelect.value = book.reader || appState.readers[0] || 'Carolina Ornelas';
  }

  updateCollectionDropdowns(book.collection || '');
  const colSelect = document.getElementById('editBookCollectionSelect');
  if (colSelect) colSelect.value = book.collection || '';

  appState.selectedEditSpineColor = book.spineColor || '#9575cd';
  const editPalette = document.getElementById('editColorPalette');
  if (editPalette) {
    editPalette.querySelectorAll('.color-swatch').forEach(sw => {
      sw.classList.toggle('selected', sw.getAttribute('data-color') === appState.selectedEditSpineColor);
    });
  }
  const customEditColor = document.getElementById('editCustomColorPicker');
  if (customEditColor) customEditColor.value = appState.selectedEditSpineColor;

  const backdrop = document.getElementById('bookModalBackdrop');
  if (backdrop) backdrop.classList.add('open');
}

// Wrapper retrocompatible
function openBookModal(bookId = null, defaultShelfId = null) {
  if (bookId) {
    openProgressModal(bookId);
  } else {
    openAddBookModal(defaultShelfId);
  }
}

// Envío del Formulario Añadir Libro
function handleAddBookFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById('addBookTitle').value.trim();
  const reader = document.getElementById('addBookReader').value || appState.readers[0] || 'Carolina Ornelas';
  const author = document.getElementById('addBookAuthor').value.trim();
  const collection = document.getElementById('addBookCollectionSelect').value.trim();
  const totalPages = Math.max(1, parseInt(document.getElementById('addBookTotalPages').value) || 300);
  const shelfId = (document.getElementById('addBookShelfId') || document.getElementById('addBookShelfHidden'))?.value || appState.activeShelfId || 'col-izq-1';
  const spineColor = appState.selectedAddSpineColor || '#9575cd';

  const newBook = {
    id: 'book-' + Date.now(),
    title,
    author,
    reader,
    collection,
    shelfId,
    totalPages,
    currentPage: 0,
    rating: '0',
    notes: '',
    spineColor
  };

  appState.books.push(newBook);
  saveData();
  closeBookModals();

  if (typeof rewardSquirrelForReading === 'function') {
    rewardSquirrelForReading('progress', title);
  }

  if (appState.activeShelfId) {
    renderSectionStage(appState.activeShelfId);
  }
}

// Envío del Formulario Progreso
function handleProgressFormSubmit(e) {
  e.preventDefault();

  const id = document.getElementById('progressBookId').value;
  if (!id) return;

  const index = appState.books.findIndex(b => b.id === id);
  if (index === -1) return;

  const totalPages = Math.max(1, parseInt(document.getElementById('progressTotalPages').value) || 1);
  const currentPage = Math.min(totalPages, Math.max(0, parseInt(document.getElementById('progressCurrentPage').value) || 0));
  const rating = document.getElementById('progressRating').value;
  const notes = document.getElementById('progressNotes').value.trim();

  const prevPages = appState.books[index].currentPage || 0;
  const prevTotal = appState.books[index].totalPages || 1;
  const wasCompleted = prevPages >= prevTotal;
  const isNowCompleted = currentPage >= totalPages;

  appState.books[index] = {
    ...appState.books[index],
    totalPages,
    currentPage,
    rating,
    notes
  };

  saveData();
  closeBookModals();

  if (typeof rewardSquirrelForReading === 'function') {
    if (!wasCompleted && isNowCompleted) {
      rewardSquirrelForReading('completed', appState.books[index].title);
    } else if (currentPage > prevPages) {
      rewardSquirrelForReading('progress', appState.books[index].title);
    }
  }

  if (appState.activeShelfId) {
    renderSectionStage(appState.activeShelfId);
  }
}

// Envío del Formulario Editar Libro
function handleEditBookFormSubmit(e) {
  e.preventDefault();

  const id = document.getElementById('editBookId').value;
  if (!id) return;

  const index = appState.books.findIndex(b => b.id === id);
  if (index === -1) return;

  const title = document.getElementById('editBookTitle').value.trim();
  const reader = document.getElementById('editBookReader').value || appState.readers[0] || 'Carolina Ornelas';
  const author = document.getElementById('editBookAuthor').value.trim();
  const collection = document.getElementById('editBookCollectionSelect').value.trim();
  const spineColor = appState.selectedEditSpineColor || appState.books[index].spineColor || '#9575cd';

  appState.books[index] = {
    ...appState.books[index],
    title,
    reader,
    author,
    collection,
    spineColor
  };

  saveData();
  closeBookModals();

  if (appState.activeShelfId) {
    renderSectionStage(appState.activeShelfId);
  }
}

// Eliminar libro desde Progreso
function handleDeleteCurrentBook() {
  const id = document.getElementById('progressBookId')?.value || appState.currentActiveBookId;
  if (!id) return;

  const book = appState.books.find(b => b.id === id);
  const bookTitle = book ? `"${book.title}"` : 'este libro';

  if (confirm(`¿Deseas eliminar ${bookTitle} de la estantería?`)) {
    appState.books = appState.books.filter(b => b.id !== id);
    saveData();
    closeBookModals();

    if (appState.activeShelfId) {
      renderSectionStage(appState.activeShelfId);
    }
  }
}

// ===================================================================
// RESPALDOS JSON
// ===================================================================
function exportBackupJSON() {
  const categoriesMap = {};
  Object.keys(SHELF_DEFINITIONS).forEach(id => {
    categoriesMap[id] = {
      category: SHELF_DEFINITIONS[id].category || '',
      category2: SHELF_DEFINITIONS[id].category2 || ''
    };
  });

  const payload = {
    books: appState.books,
    drawers: appState.drawers,
    readers: appState.readers,
    shelfTitle: appState.shelfTitle,
    shelfCategories: categoriesMap,
    windowTimeMode: appState.windowTimeMode,
    customWindowImg: localStorage.getItem('mi_librero_custom_window_img'),
    gardenSign: localStorage.getItem('mi_librero_garden_sign'),
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
        if (importedData.customWindowImg) {
          localStorage.setItem('mi_librero_custom_window_img', importedData.customWindowImg);
          const windowImg = document.getElementById('windowSceneImg');
          if (windowImg) windowImg.src = importedData.customWindowImg;
        }
        if (importedData.gardenSign) {
          localStorage.setItem('mi_librero_garden_sign', importedData.gardenSign);
          const signText = document.getElementById('gardenSignpostText');
          if (signText) signText.textContent = importedData.gardenSign;
        }
        if (importedData.windowTimeMode) {
          appState.windowTimeMode = importedData.windowTimeMode;
          updateZakiaSky();
        }
        if (importedData.shelfCategories && typeof importedData.shelfCategories === 'object') {
          Object.keys(importedData.shelfCategories).forEach(id => {
            if (SHELF_DEFINITIONS[id]) {
              const item = importedData.shelfCategories[id];
              if (typeof item === 'string') {
                SHELF_DEFINITIONS[id].category = item;
                SHELF_DEFINITIONS[id].category2 = '';
              } else if (item && typeof item === 'object') {
                SHELF_DEFINITIONS[id].category = item.category || '';
                SHELF_DEFINITIONS[id].category2 = item.category2 || '';
              }
            }
          });
          saveShelfCategories();
          updateShelfPlaquesUI();
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


// ===================================================================
// TAMAGOTCHI DE NUEZ LA ARDILLITA (Marco Central del Librero)
// ===================================================================

let currentSquirrel = null;
let currentNookMode = 'postal'; // 'postal' | 'tamagotchi'
let miniGameInterval = null;
let miniGameTimer = null;
let miniGameScore = 0;
let miniGameTimeLeft = 30;
let activeWardrobeTab = 'hats';

// Frases tiernas de Nuez al interactuar (Estilo Animal Crossing / Cozy)
const NUEZ_PET_PHRASES = [
  "¡Qué calientito se siente tu cariño! 🌸✨",
  "¡Jejeje! ¡Me hacen cosquillitas tus caricias! 💕",
  "¿Qué libro leeremos después? ¡Tengo muchas ganas! 📖",
  "Me preparé un té de lavanda delicioso para acompañarte. 🫖",
  "Eres mi persona favorita en todo el librero. 🐿️❤️",
  "¡Mira cómo brilla el librero hoy! Huele a páginas nuevas. ✨",
  "¿Sabías que las ardillitas guardamos nuestras historias favoritas en el corazón? 🌰",
  "¡Esa repisa de libros está quedando preciosa! 📚",
  "Un ratito más de lectura y luego una siesta acogedora... 🌙",
  "¡Baila conmigo! La música de Taylor está sonando hermosa. 🎵💃",
  "¡Gracias por cuidarme tan bonito siempre! 🌸",
  "Guardé una bellota dorada entre las páginas de mi libro favorito. 🌰",
  "El sonido de las hojas de otoño me recuerda a pasar páginas. 🍂",
  "¡Te quiero un montón, amiga lectora! 💕"
];

// Catálogo del Guardarropa de Nuez
const WARDROBE_CATALOG = {
  hats: [
    { id: 'hat-none', name: 'Sin Sombrerito', icon: '🐿️', desc: 'Estilo natural de Nuez' },
    { id: 'hat-lavender', name: 'Corona de Lavanda', icon: '🌸', desc: 'Flores aromáticas de Zakia' },
    { id: 'hat-beret', name: 'Boina de Lectora', icon: '🎨', desc: 'Elegante y artística' },
    { id: 'hat-beanie', name: 'Gorro de Lana', icon: '🧶', desc: 'Tejido a mano para días frescos' },
    { id: 'hat-nightcap', name: 'Gorro Estrellado', icon: '🌙', desc: 'Para soñar con bellotas' }
  ],
  clothes: [
    { id: 'clothes-none', name: 'Pelaje Natural', icon: '✨', desc: 'Suave y esponjoso' },
    { id: 'clothes-cardigan', name: 'Cardigan Tejido', icon: '🧣', desc: 'Inspirado en Taylor Swift' },
    { id: 'clothes-pajamas', name: 'Pijama de Estrellas', icon: '🧸', desc: 'Calientito para dormir' }
  ],
  glasses: [
    { id: 'glasses-none', name: 'Sin Lentes', icon: '👀', desc: 'Mirada brillante' },
    { id: 'glasses-round', name: 'Lentes Dorados', icon: '👓', desc: 'Redondos de ratoncita de biblioteca' }
  ]
};

// Generador de Sonidos Sintetizados Animal Crossing (Web Audio API)
function playTamaSound(type) {
  try {
    const ctx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    const now = ctx.currentTime;

    if (type === 'pet') {
      // Arpegio dulce de marimba ascendente
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.18, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.22);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.25);
      });
    } else if (type === 'eat') {
      // Masticación crujiente (nom-nom)
      [0, 0.11, 0.22].forEach((delay) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now + delay);
        osc.frequency.exponentialRampToValueAtTime(140, now + delay + 0.08);
        gain.gain.setValueAtTime(0.24, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + 0.1);
      });
    } else if (type === 'chirp') {
      // Voz balbuceada estilo Animalese
      const tones = [587.33, 698.46, 523.25, 783.99];
      tones.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq + (Math.random() * 50 - 25), now + i * 0.06);
        gain.gain.setValueAtTime(0.14, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.09);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.11);
      });
    } else if (type === 'levelUp') {
      // Fanfarria festiva Do-Mi-Sol-Do
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.1);
        gain.gain.setValueAtTime(0.22, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.4);
      });
    } else if (type === 'snore') {
      // Respiración relajante de noche
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.45);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.55);
    } else if (type === 'catch') {
      // Moneda de bellota en el minijuego
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.setValueAtTime(1320, now + 0.07);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    }
  } catch (err) {
    // Audio Context no desbloqueado aún
  }
}

// Obtener el lector activo para aislar su propia ardilla
function getActiveSquirrelReader() {
  if (appState.activeReaderFilter && appState.activeReaderFilter !== 'all') {
    return appState.activeReaderFilter;
  }
  return (appState.readers && appState.readers[0]) || 'Carolina Ornelas';
}

function getSquirrelStorageKey(readerName) {
  return 'cozy_squirrel_data_' + encodeURIComponent(readerName || 'default');
}

// Cargar o crear el perfil de ardilla para el lector activo
function loadActiveSquirrel() {
  const reader = getActiveSquirrelReader();
  const raw = localStorage.getItem(getSquirrelStorageKey(reader));
  let data = null;
  if (raw) {
    try { data = JSON.parse(raw); } catch (e) {}
  }

  if (!data || typeof data !== 'object') {
    data = {
      reader: reader,
      name: 'Nuez',
      level: 1,
      title: 'Amiga Fiel',
      hunger: 85,
      affection: 90,
      energy: 80,
      acorns: 20,
      room: 'cottage_room',
      equipped: {
        hat: 'hat-none',
        clothes: 'clothes-none',
        glasses: 'glasses-none'
      },
      isSleeping: false,
      lastUpdated: Date.now()
    };
  }

  // Comprobar decaimiento suave según tiempo
  const now = Date.now();
  const minutesPassed = Math.floor((now - (data.lastUpdated || now)) / 60000);
  if (minutesPassed > 5 && !data.isSleeping) {
    const decay = Math.min(25, Math.floor(minutesPassed / 12));
    data.hunger = Math.max(15, (data.hunger || 85) - decay);
    data.affection = Math.max(20, (data.affection || 90) - Math.floor(decay / 2));
  }
  data.lastUpdated = now;

  // Rutina nocturna automática: si son más de las 8:00 PM (20:00) y no se ha tocado, sugerir descanso
  const hour = new Date().getHours();
  if (hour >= 20 || hour < 7) {
    if (!data.hasSeenNightRoutine) {
      data.isSleeping = true;
      data.hasSeenNightRoutine = true;
    }
  } else {
    data.hasSeenNightRoutine = false;
  }

  currentSquirrel = data;
  saveActiveSquirrel();
  return currentSquirrel;
}

// Guardar la ardilla del lector activo
function saveActiveSquirrel() {
  if (!currentSquirrel) return;
  const reader = currentSquirrel.reader || getActiveSquirrelReader();
  currentSquirrel.lastUpdated = Date.now();
  localStorage.setItem(getSquirrelStorageKey(reader), JSON.stringify(currentSquirrel));
}

// Sincronizar el Tamagotchi cuando cambia el lector
function refreshSquirrelForActiveReader() {
  loadActiveSquirrel();
  renderSquirrelUI();
}

// Alternar entre Vista Postal y Tamagotchi de Nuez
function switchNookMode(mode) {
  currentNookMode = mode;
  const btnPostal = document.getElementById('btnModePostal');
  const btnTama = document.getElementById('btnModeTamagotchi');
  const viewPostal = document.getElementById('windowGlass');
  const viewTama = document.getElementById('tamagotchiGlass');
  const windowNook = document.getElementById('windowNook');
  const hudAcorns = document.getElementById('hudAcornCounter');
  const btnRoom = document.getElementById('btnSwitchRoom');
  const btnPhoto = document.getElementById('btnChangePhoto');
  const timeBadge = document.getElementById('windowTimeBadge');
  const nuezBadge = document.getElementById('windowNuezBadge');
  const nuezName = document.getElementById('windowNuezName');
  const nuezLevel = document.getElementById('windowNuezLevel');
  const benchActions = document.getElementById('benchActionsStrip');
  const benchTufts = document.getElementById('cushionTuftsGroup');

  if (mode === 'tamagotchi') {
    btnTama?.classList.add('active');
    btnPostal?.classList.remove('active');
    windowNook?.classList.add('mode-tamagotchi-active');
    if (viewPostal) viewPostal.style.display = 'none';
    if (viewTama) viewTama.style.display = 'flex';
    if (hudAcorns) hudAcorns.style.display = 'inline-flex';
    if (btnRoom) btnRoom.style.display = 'inline-flex';
    if (btnPhoto) btnPhoto.style.display = 'none';

    // MOSTRAR botones de acción con emojis en la colchoneta gris (SOLO en modo Nuez)
    if (benchActions) benchActions.style.display = 'flex';
    if (benchTufts) benchTufts.style.display = 'none';

    // MOSTRAR tarjeta de Nuez en la cabecera y OCULTAR tarjeta de ubicación
    if (timeBadge) timeBadge.style.display = 'none';
    if (nuezBadge) {
      nuezBadge.style.display = 'flex';
      if (nuezName) nuezName.textContent = currentSquirrel?.name || 'Nuez';
      if (nuezLevel) nuezLevel.textContent = `Nivel ${currentSquirrel?.level || 1} (${currentSquirrel?.title || 'Amiga Fiel'})`;
    }

    playTamaSound('chirp');
    refreshSquirrelForActiveReader();
    initSquirrelMouseTracking();
  } else {
    btnPostal?.classList.add('active');
    btnTama?.classList.remove('active');
    windowNook?.classList.remove('mode-tamagotchi-active');
    if (viewPostal) viewPostal.style.display = 'block';
    if (viewTama) viewTama.style.display = 'none';
    if (hudAcorns) hudAcorns.style.display = 'none';
    if (btnRoom) btnRoom.style.display = 'none';
    if (btnPhoto) btnPhoto.style.display = 'inline-flex';

    // OCULTAR botones de acción con emojis y MOSTRAR botones capitoné limpios (MODO POSTAL)
    if (benchActions) benchActions.style.display = 'none';
    if (benchTufts) benchTufts.style.display = 'flex';

    // MOSTRAR tarjeta de ubicación real (Querétaro, CDMX, Guadalajara, etc.) y OCULTAR tarjeta de Nuez
    if (timeBadge) timeBadge.style.display = 'flex';
    if (nuezBadge) nuezBadge.style.display = 'none';

    // Restaurar reloj y momento del día
    updateZakiaSky();
  }
}

// Controlador de Expresiones Faciales de Nuez
function setSquirrelExpression(expr) {
  const svg = document.getElementById('nuezLivingSvg');
  if (!svg) return;

  // 1. Ojos
  const eyesNormal = document.getElementById('eyesNormal');
  const eyesHappy = document.getElementById('eyesHappy');
  const eyesLove = document.getElementById('eyesLove');
  const eyesEating = document.getElementById('eyesEating');
  const eyesSleeping = document.getElementById('eyesSleeping');

  if (eyesNormal) eyesNormal.style.display = (expr === 'normal') ? 'inline' : 'none';
  if (eyesHappy) eyesHappy.style.display = (expr === 'happy') ? 'inline' : 'none';
  if (eyesLove) eyesLove.style.display = (expr === 'love') ? 'inline' : 'none';
  if (eyesEating) eyesEating.style.display = (expr === 'eating') ? 'inline' : 'none';
  if (eyesSleeping) eyesSleeping.style.display = (expr === 'sleeping' || expr === 'yawn') ? 'inline' : 'none';

  // 2. Bocas
  const mouthDefault = document.getElementById('mouthDefault');
  const mouthSmile = document.getElementById('mouthSmile');
  const mouthChew = document.getElementById('mouthChew');
  const mouthYawn = document.getElementById('mouthYawn');

  if (mouthDefault) mouthDefault.style.display = (expr === 'normal' || expr === 'sleeping') ? 'inline' : 'none';
  if (mouthSmile) mouthSmile.style.display = (expr === 'happy' || expr === 'love') ? 'inline' : 'none';
  if (mouthChew) mouthChew.style.display = (expr === 'eating') ? 'inline' : 'none';
  if (mouthYawn) mouthYawn.style.display = (expr === 'yawn') ? 'inline' : 'none';

  // 3. Clases de estado en el SVG
  svg.classList.remove('happy', 'love', 'eating', 'sleeping', 'petting');
  if (expr !== 'normal') {
    svg.classList.add(expr);
  }
}

// Controlador del objeto sostenido en manitas
function setSquirrelHeldItem(itemKey) {
  const itemBook = document.getElementById('itemBook');
  const itemAcorn = document.getElementById('itemAcorn');
  const itemTea = document.getElementById('itemTea');
  const itemMuffin = document.getElementById('itemMuffin');

  if (itemBook) itemBook.style.display = (itemKey === 'book') ? 'inline' : 'none';
  if (itemAcorn) itemAcorn.style.display = (itemKey === 'acorn' || itemKey === 'bellota' || itemKey === 'nuez') ? 'inline' : 'none';
  if (itemTea) itemTea.style.display = (itemKey === 'tea' || itemKey === 'te') ? 'inline' : 'none';
  if (itemMuffin) itemMuffin.style.display = (itemKey === 'muffin') ? 'inline' : 'none';
}

// Seguimiento interactivo con la mirada y la cabecita
let isMouseTrackingActive = false;
function initSquirrelMouseTracking() {
  if (isMouseTrackingActive) return;
  const stage = document.getElementById('tamagotchiStage');
  if (!stage) return;
  isMouseTrackingActive = true;

  stage.addEventListener('mousemove', (e) => {
    if (!currentSquirrel || currentSquirrel.isSleeping) return;
    const rect = stage.getBoundingClientRect();
    if (rect.width <= 0) return;

    const mx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 a 0.5
    const my = (e.clientY - rect.top) / rect.height - 0.5;

    const eyeL = document.getElementById('eyeL');
    const eyeR = document.getElementById('eyeR');
    const head = document.getElementById('nuezHead');

    if (eyeL && eyeR) {
      eyeL.style.transform = `translate(${mx * 4.5}px, ${my * 3.5}px)`;
      eyeR.style.transform = `translate(${mx * 4.5}px, ${my * 3.5}px)`;
    }
    if (head) {
      head.style.transform = `rotate(${mx * 5}deg)`;
    }
  });

  stage.addEventListener('mouseleave', () => {
    const eyeL = document.getElementById('eyeL');
    const eyeR = document.getElementById('eyeR');
    const head = document.getElementById('nuezHead');
    if (eyeL) eyeL.style.transform = 'translate(0, 0)';
    if (eyeR) eyeR.style.transform = 'translate(0, 0)';
    if (head) head.style.transform = 'rotate(0deg)';
  });
}

// Renderizar la interfaz visual del Tamagotchi
function renderSquirrelUI() {
  if (!currentSquirrel) loadActiveSquirrel();
  const s = currentSquirrel;

  // Actualizar Tarjeta de Nuez en la cabecera si está en modo Tamagotchi
  const nuezName = document.getElementById('windowNuezName');
  const nuezLevel = document.getElementById('windowNuezLevel');
  if (nuezName) nuezName.textContent = s.name || 'Nuez';
  if (nuezLevel) nuezLevel.textContent = `Nivel ${s.level || 1} (${s.title || 'Amiga Fiel'})`;

  // Actualizar Contador de Bellotas en la cabecera
  const acornEl = document.getElementById('tamagotchiAcornCount');
  if (acornEl) acornEl.textContent = s.acorns ?? 20;

  // Actualizar Barras de Estado
  const barHunger = document.getElementById('barHunger');
  if (barHunger) barHunger.style.width = `${Math.min(100, Math.max(5, s.hunger || 0))}%`;

  const barAffection = document.getElementById('barAffection');
  if (barAffection) barAffection.style.width = `${Math.min(100, Math.max(5, s.affection || 0))}%`;

  const barEnergy = document.getElementById('barEnergy');
  if (barEnergy) barEnergy.style.width = `${Math.min(100, Math.max(5, s.energy || 0))}%`;

  // Actualizar Escenario
  const stage = document.getElementById('tamagotchiStage');
  if (stage) stage.setAttribute('data-room', s.room || 'cottage_room');

  // Actualizar Capas SVG del Guardarropa (Sombreros, Ropa, Lentes)
  const hatLavender = document.getElementById('svgHatLavender');
  const hatBeret = document.getElementById('svgHatBeret');
  const hatBeanie = document.getElementById('svgHatBeanie');
  const hatNightcap = document.getElementById('svgHatNightcap');

  if (hatLavender) hatLavender.style.display = (s.equipped?.hat === 'hat-lavender') ? 'inline' : 'none';
  if (hatBeret) hatBeret.style.display = (s.equipped?.hat === 'hat-beret') ? 'inline' : 'none';
  if (hatBeanie) hatBeanie.style.display = (s.equipped?.hat === 'hat-beanie') ? 'inline' : 'none';
  if (hatNightcap) hatNightcap.style.display = (s.equipped?.hat === 'hat-nightcap' || s.isSleeping) ? 'inline' : 'none';

  const glassesRound = document.getElementById('svgGlassesRound');
  if (glassesRound) glassesRound.style.display = (s.equipped?.glasses === 'glasses-round') ? 'inline' : 'none';

  const clothesCardigan = document.getElementById('svgClothesCardigan');
  const clothesPajamas = document.getElementById('svgClothesPajamas');
  if (clothesCardigan) clothesCardigan.style.display = (s.equipped?.clothes === 'clothes-cardigan' && !s.isSleeping) ? 'inline' : 'none';
  if (clothesPajamas) clothesPajamas.style.display = (s.equipped?.clothes === 'clothes-pajamas' || s.isSleeping) ? 'inline' : 'none';

  // Expresión y Estado de Sueño
  const sleepIcon = document.getElementById('sleepBtnIcon');
  const sleepBtn = document.getElementById('benchBtnSleep');
  const zzz = document.getElementById('mascotSleepZzz');

  if (s.isSleeping) {
    setSquirrelExpression('sleeping');
    setSquirrelHeldItem('none');
    if (sleepIcon) sleepIcon.textContent = '☀️';
    if (sleepBtn) sleepBtn.title = 'Despertar a Nuez ☀️';
    if (zzz) zzz.style.display = 'flex';
    if (stage) stage.classList.add('is-sleeping');
  } else {
    setSquirrelExpression('normal');
    setSquirrelHeldItem('book');
    if (sleepIcon) sleepIcon.textContent = '🌙';
    if (sleepBtn) sleepBtn.title = 'Dormir a Nuez 🌙';
    if (zzz) zzz.style.display = 'none';
    if (stage) stage.classList.remove('is-sleeping');
  }
}

// Acariciar a Nuez con reacciones expresivas y partículas
function handlePetSquirrel(e) {
  if (!currentSquirrel) loadActiveSquirrel();
  const s = currentSquirrel;

  if (s.isSleeping) {
    // Despertar con un bostezo tierno
    s.isSleeping = false;
    setSquirrelExpression('yawn');
    playTamaSound('chirp');
    showBubbleDialogue("Mmm... ¡Bostecito! ¡Qué lindo despertar con tus caricias!");
    saveActiveSquirrel();

    setTimeout(() => {
      setSquirrelExpression('happy');
      setSquirrelHeldItem('book');
      renderSquirrelUI();
    }, 1400);
    return;
  }

  s.affection = Math.min(100, (s.affection || 0) + 6);
  s.acorns = (s.acorns || 0) + 1; // +1 bellota por mimarla
  playTamaSound('pet');

  // Frase de Nuez
  const phrase = NUEZ_PET_PHRASES[Math.floor(Math.random() * NUEZ_PET_PHRASES.length)];
  showBubbleDialogue(phrase);

  // Expresión de amor y alegría (ojitos corazones / cerrados felices y sonrisa)
  setSquirrelExpression('love');

  // Animación de saltito alegre en el SVG
  const svg = document.getElementById('nuezLivingSvg');
  if (svg) {
    svg.classList.add('hop-joy');
    setTimeout(() => svg.classList.remove('hop-joy'), 480);
  }

  // Generar partículas de corazones y chispitas que brotan de su cabecita
  const wrapper = document.getElementById('tamagotchiMascotWrapper');
  if (wrapper) {
    const rect = wrapper.getBoundingClientRect();
    const clickX = e ? (e.clientX - rect.left) : (rect.width / 2);
    const clickY = e ? (e.clientY - rect.top) : (rect.height / 3);
    const icons = ['💕', '🌸', '✨', '💖', '⭐'];

    for (let i = 0; i < 4; i++) {
      const p = document.createElement('span');
      p.className = 'floating-pet-heart';
      p.textContent = icons[Math.floor(Math.random() * icons.length)];
      p.style.left = `${clickX + (Math.random() * 30 - 15)}px`;
      p.style.top = `${clickY + (Math.random() * 20 - 10)}px`;
      p.style.setProperty('--tx', `${(Math.random() * 36 - 18)}px`);
      p.style.setProperty('--tx-end', `${(Math.random() * 50 - 25)}px`);
      wrapper.appendChild(p);
      setTimeout(() => p.remove(), 1200);
    }
  }

  saveActiveSquirrel();
  renderSquirrelUI();

  // Volver a la expresión normal relajada después de un momento
  setTimeout(() => {
    if (!currentSquirrel.isSleeping) {
      setSquirrelExpression('normal');
    }
  }, 2400);
}

// Mostrar diálogo en el bocadillo de Nuez con voz balbuceada de Animal Crossing
function showBubbleDialogue(text) {
  const bubble = document.getElementById('tamagotchiBubble');
  const bubbleText = document.getElementById('tamagotchiBubbleText');
  if (bubble && bubbleText) {
    bubbleText.textContent = text;
    bubble.style.animation = 'none';
    setTimeout(() => {
      bubble.style.animation = 'bubbleFloat 2.6s infinite alternate ease-in-out';
    }, 10);
  }
}

// Menú de Snacks / Alimentación
function openSnackMenu() {
  const menu = document.getElementById('snackMenu');
  if (menu) menu.style.display = 'flex';
  playTamaSound('chirp');
}

function closeSnackMenu() {
  const menu = document.getElementById('snackMenu');
  if (menu) menu.style.display = 'none';
}

function feedSquirrel(snackKey) {
  if (!currentSquirrel) loadActiveSquirrel();
  const s = currentSquirrel;

  const costs = { bellota: 0, nuez: 2, te: 2, muffin: 4 };
  const cost = costs[snackKey] || 0;

  if (cost > (s.acorns || 0)) {
    alert(`¡Necesitas ${cost} bellotas 🌰 para este snack! Puedes conseguir más leyendo libros o jugando en el minijuego.`);
    return;
  }

  s.acorns = Math.max(0, (s.acorns || 0) - cost);

  // Nuez sostiene la comida en sus manitas y empieza a masticar
  setSquirrelHeldItem(snackKey);
  setSquirrelExpression('eating');
  playTamaSound('eat');

  // Animación de masticar
  setTimeout(() => playTamaSound('eat'), 350);
  setTimeout(() => playTamaSound('eat'), 700);

  if (snackKey === 'bellota') {
    s.hunger = Math.min(100, (s.hunger || 0) + 25);
    showBubbleDialogue("¡Crunch crunch! ¡Qué bellota tan crujiente y dulce! 🌰✨");
  } else if (snackKey === 'nuez') {
    s.hunger = Math.min(100, (s.hunger || 0) + 45);
    s.affection = Math.min(100, (s.affection || 0) + 12);
    showBubbleDialogue("¡Una nuez dorada! ¡Mi favorita de todo el bosque! 🥜💖");
  } else if (snackKey === 'te') {
    s.energy = Math.min(100, (s.energy || 0) + 35);
    s.affection = Math.min(100, (s.affection || 0) + 15);
    showBubbleDialogue("¡Ahhh! Té de lavanda calientito... ¡Me da mucha energía para leer! 🫖🌿");
  } else if (snackKey === 'muffin') {
    s.hunger = Math.min(100, (s.hunger || 0) + 60);
    s.affection = Math.min(100, (s.affection || 0) + 25);
    showBubbleDialogue("¡Qué rico muffin de zarzamora! ¡Eres el mejor cocinero del mundo! 🧁🎉");
  }

  closeSnackMenu();
  saveActiveSquirrel();

  // Después de masticar, Nuez traga feliz, sonríe y da un saltito
  setTimeout(() => {
    setSquirrelExpression('happy');
    const svg = document.getElementById('nuezLivingSvg');
    if (svg) {
      svg.classList.add('hop-joy');
      setTimeout(() => svg.classList.remove('hop-joy'), 480);
    }
    renderSquirrelUI();
  }, 1600);

  // Vuelve a su librito después de unos segundos
  setTimeout(() => {
    if (!currentSquirrel.isSleeping) {
      setSquirrelHeldItem('book');
      setSquirrelExpression('normal');
    }
  }, 3400);
}

// Dormir / Despertar
function handleToggleSleep() {
  if (!currentSquirrel) loadActiveSquirrel();
  const s = currentSquirrel;

  s.isSleeping = !s.isSleeping;

  if (s.isSleeping) {
    setSquirrelHeldItem('none');
    setSquirrelExpression('sleeping');
    playTamaSound('snore');
    showBubbleDialogue("Zzz... Buenas noches, soñaré con cuentos y mágicas aventuras...");
    s.energy = Math.min(100, (s.energy || 0) + 25);
  } else {
    setSquirrelExpression('yawn');
    playTamaSound('chirp');
    showBubbleDialogue("¡Buenos días! ¡Qué bien descansé! ¿Qué vamos a leer hoy?");

    setTimeout(() => {
      setSquirrelHeldItem('book');
      setSquirrelExpression('happy');
      renderSquirrelUI();
    }, 1400);
  }

  saveActiveSquirrel();
  renderSquirrelUI();
}

// ===================================================================
// MANEJADORES DE ACCIONES EN LA BANCA GRIS (Solo representadas por Emojis)
// ===================================================================
function handleBenchFeed() {
  if (currentNookMode !== 'tamagotchi') {
    switchNookMode('tamagotchi');
  }
  openSnackMenu();
}

function handleBenchPet(event) {
  if (currentNookMode !== 'tamagotchi') {
    switchNookMode('tamagotchi');
  }
  handlePetSquirrel(event);
}

function handleBenchToggleSleep() {
  if (currentNookMode !== 'tamagotchi') {
    switchNookMode('tamagotchi');
  }
  handleToggleSleep();
}

function handleBenchWardrobe() {
  if (currentNookMode !== 'tamagotchi') {
    switchNookMode('tamagotchi');
  }
  openWardrobeModal();
}

function handleBenchPlay() {
  if (currentNookMode !== 'tamagotchi') {
    switchNookMode('tamagotchi');
  }
  startAcornMiniGame();
}

window.handleBenchFeed = handleBenchFeed;
window.handleBenchPet = handleBenchPet;
window.handleBenchToggleSleep = handleBenchToggleSleep;
window.handleBenchWardrobe = handleBenchWardrobe;
window.handleBenchPlay = handleBenchPlay;

// Selector de Ambientes
function toggleRoomSelectorModal(force) {
  const menu = document.getElementById('roomMenu');
  if (!menu) return;
  const isOpening = force !== undefined ? force : menu.style.display === 'none';
  menu.style.display = isOpening ? 'flex' : 'none';
  if (isOpening) {
    playTamaSound('chirp');
    // Marcar activo
    const currentRoom = currentSquirrel?.room || 'cottage_room';
    document.querySelectorAll('.room-option-card').forEach(card => {
      card.classList.toggle('active', card.getAttribute('data-room-id') === currentRoom);
    });
  }
}

function selectSquirrelRoom(roomId) {
  if (!currentSquirrel) loadActiveSquirrel();
  currentSquirrel.room = roomId;

  playTamaSound('chirp');
  saveActiveSquirrel();
  renderSquirrelUI();
  toggleRoomSelectorModal(false);

  const roomNames = {
    cottage_room: "¡Qué acogedora es nuestra casita con chimenea! 🏡🔥",
    garden_bridge: "¡El arroyo y las flores huelen delicioso! 🌸🌿",
    tea_nook: "¡Me encanta ver la lluvia mientras tomamos té! 🪟🌧️",
    starlit_roof: "¡Cuántas estrellas! ¡Busquemos constelaciones! 🌌✨"
  };
  showBubbleDialogue(roomNames[roomId] || "¡Qué lindo ambiente! ✨");
}

// Guardarropa / Armario de Nuez
function openWardrobeModal() {
  const menu = document.getElementById('wardrobeMenu');
  if (menu) {
    menu.style.display = 'flex';
    playTamaSound('chirp');
    renderWardrobeItems();
  }
}

function closeWardrobeModal() {
  const menu = document.getElementById('wardrobeMenu');
  if (menu) menu.style.display = 'none';
}

function switchWardrobeTab(tabKey) {
  activeWardrobeTab = tabKey;
  document.querySelectorAll('.wardrobe-tab').forEach(t => t.classList.remove('active'));
  if (tabKey === 'hats') document.getElementById('tabHats')?.classList.add('active');
  if (tabKey === 'clothes') document.getElementById('tabClothes')?.classList.add('active');
  if (tabKey === 'glasses') document.getElementById('tabGlasses')?.classList.add('active');
  renderWardrobeItems();
}

function renderWardrobeItems() {
  const container = document.getElementById('wardrobeItemsContainer');
  if (!container || !currentSquirrel) return;

  const items = WARDROBE_CATALOG[activeWardrobeTab] || [];
  const currentEquipped = currentSquirrel.equipped || {};

  container.innerHTML = items.map(item => {
    let isEquipped = false;
    if (activeWardrobeTab === 'hats') isEquipped = currentEquipped.hat === item.id;
    if (activeWardrobeTab === 'clothes') isEquipped = currentEquipped.clothes === item.id;
    if (activeWardrobeTab === 'glasses') isEquipped = currentEquipped.glasses === item.id;

    return `
      <div class="wardrobe-item-card ${isEquipped ? 'equipped' : ''}" onclick="equipWardrobeItem('${activeWardrobeTab}', '${item.id}')">
        <span class="wardrobe-item-icon">${item.icon}</span>
        <span class="wardrobe-item-name">${item.name}</span>
        <span class="wardrobe-item-status">${isEquipped ? '✓ Puesto' : 'Poner'}</span>
      </div>
    `;
  }).join('');
}

function equipWardrobeItem(category, itemId) {
  if (!currentSquirrel) loadActiveSquirrel();
  if (!currentSquirrel.equipped) currentSquirrel.equipped = {};

  if (category === 'hats') currentSquirrel.equipped.hat = itemId;
  if (category === 'clothes') currentSquirrel.equipped.clothes = itemId;
  if (category === 'glasses') currentSquirrel.equipped.glasses = itemId;

  playTamaSound('chirp');
  saveActiveSquirrel();
  renderSquirrelUI();
  renderWardrobeItems();
  showBubbleDialogue("¡Mira cómo me veo! ¿Te gusta mi nuevo look? 👒✨");
}

// Minijuego: Lluvia de Bellotas
function startAcornMiniGame() {
  const screen = document.getElementById('minigameScreen');
  if (!screen) return;

  miniGameScore = 0;
  miniGameTimeLeft = 30;
  screen.style.display = 'flex';
  playTamaSound('chirp');

  const scoreEl = document.getElementById('minigameScoreText');
  const timerEl = document.getElementById('minigameTimerText');
  if (scoreEl) scoreEl.textContent = '0';
  if (timerEl) timerEl.textContent = '30s';

  const canvas = document.getElementById('minigameCanvasArea');
  const catcher = document.getElementById('minigameCatcher');
  if (!canvas || !catcher) return;

  // Limpiar objetos anteriores
  canvas.querySelectorAll('.minigame-falling-item').forEach(el => el.remove());

  // Movimiento del receptor con el cursor / touch
  function handleMove(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = Math.max(25, Math.min(rect.width - 25, clientX - rect.left));
    catcher.style.left = `${x}px`;
  }

  canvas.onmousemove = handleMove;
  canvas.ontouchmove = handleMove;

  // Caída periódica de bellotas y hojas
  miniGameInterval = setInterval(() => {
    const rect = canvas.getBoundingClientRect();
    if (rect.width <= 0) return;

    const item = document.createElement('div');
    item.className = 'minigame-falling-item';
    const isAcorn = Math.random() > 0.25;
    item.textContent = isAcorn ? '🌰' : '🍂';
    item.dataset.type = isAcorn ? 'acorn' : 'leaf';

    const spawnX = Math.random() * (rect.width - 35) + 10;
    item.style.left = `${spawnX}px`;
    item.style.animationDuration = `${(Math.random() * 1.2 + 1.6).toFixed(2)}s`;
    canvas.appendChild(item);

    // Detección de colisión simple
    const checkCollision = setInterval(() => {
      const cRect = catcher.getBoundingClientRect();
      const iRect = item.getBoundingClientRect();

      if (
        iRect.bottom >= cRect.top + 5 &&
        iRect.top <= cRect.bottom &&
        iRect.right >= cRect.left &&
        iRect.left <= cRect.right
      ) {
        clearInterval(checkCollision);
        if (item.dataset.type === 'acorn') {
          miniGameScore += 1;
          if (scoreEl) scoreEl.textContent = miniGameScore;
          playTamaSound('catch');
        }
        item.remove();
      } else if (iRect.top > rect.bottom) {
        clearInterval(checkCollision);
        item.remove();
      }
    }, 40);

    setTimeout(() => {
      clearInterval(checkCollision);
      if (item.parentNode) item.remove();
    }, 3200);

  }, 650);

  // Cuenta regresiva
  miniGameTimer = setInterval(() => {
    miniGameTimeLeft--;
    if (timerEl) timerEl.textContent = `${miniGameTimeLeft}s`;

    if (miniGameTimeLeft <= 0) {
      endMiniGame();
    }
  }, 1000);
}

function endMiniGame() {
  clearInterval(miniGameInterval);
  clearInterval(miniGameTimer);
  miniGameInterval = null;
  miniGameTimer = null;

  playTamaSound('levelUp');
  if (!currentSquirrel) loadActiveSquirrel();
  currentSquirrel.acorns = (currentSquirrel.acorns || 0) + miniGameScore;
  currentSquirrel.affection = Math.min(100, (currentSquirrel.affection || 0) + Math.min(30, miniGameScore * 2));
  saveActiveSquirrel();
  renderSquirrelUI();

  alert(`🎉 ¡Juego terminado!\n\nAtrapaste ${miniGameScore} bellotas 🌰 que se han sumado al bolso de Nuez.`);
  quitMiniGame();
}

function quitMiniGame() {
  clearInterval(miniGameInterval);
  clearInterval(miniGameTimer);
  miniGameInterval = null;
  miniGameTimer = null;
  const screen = document.getElementById('minigameScreen');
  if (screen) screen.style.display = 'none';
}

// Recompensa mágica cuando el lector avanza o termina libros
function rewardSquirrelForReading(type, title) {
  if (!currentSquirrel) loadActiveSquirrel();
  const s = currentSquirrel;

  if (type === 'progress') {
    s.acorns = (s.acorns || 0) + 4;
    s.affection = Math.min(100, (s.affection || 0) + 8);
    showBubbleDialogue(`¡Bravo por leer! Ganamos 4 bellotas con tu lectura. 🌰✨`);
  } else if (type === 'completed') {
    s.acorns = (s.acorns || 0) + 15;
    s.affection = 100;
    s.level = (s.level || 1) + 1;
    playTamaSound('levelUp');
    showBubbleDialogue(`🎉 ¡TERMINASTE UN LIBRO! ¡Qué orgullo tan grande! Ganamos 15 bellotas y subí a Nivel ${s.level} 🌰🏆`);
  }

  saveActiveSquirrel();
  renderSquirrelUI();

  // Encender el puntito de atención en la pestaña de Nuez
  const dot = document.getElementById('tamaAttentionDot');
  if (dot && currentNookMode !== 'tamagotchi') {
    dot.style.display = 'inline-block';
  }
}

// Inicializar Tamagotchi al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    loadActiveSquirrel();
    renderSquirrelUI();
  }, 100);
});
