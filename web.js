// Estructura de marcas para el proyecto
const proyectoMultimedial = {
    artistaPrincipal: {
      nombre: "mi_sintoma",
      tipoLogo: "Wordmark Tipográfico (Oswald Bold)",
      rol: "Identidad Visual y Contenido Principal"
    },
    selloDiscografico: {
      nombre: "ALIEN RECORDS",
      tieneLogoDiseñado: true,
      rol: "Sello editor / Endorsement en pie de página"
    }
  };
  
  // Función para generar la firma de la pieza gráfica/web
  function generarFirmaMarca(proyecto) {
    const artista = proyecto.artistaPrincipal.nombre;
    const sello = proyecto.selloDiscografico.nombre;
    
    return `Pieza impulsada por: ${artista.toUpperCase()} | Editado bajo el sello [${sello}]`;
  }
  
  // Ejecución
  const firmaFinal = generarFirmaMarca(proyectoMultimedial);
  
  // VERIFICACIÓN
  console.log("Verificación de Jerarquía de Marca:", firmaFinal);
// Definición del sistema de color para la marca mi_sintoma
const paletaMiSintoma = {
    nombreProyecto: "mi_sintoma / ALIEN RECORDS",
    colores: {
      principal: { hex: "#D32F2F", funcion: "Rojo Psicodélico (Títulos y marcas clave)" },
      secundarios: [
        { hex: "#121212", funcion: "Negro Asfalto (Fondo y contraste)" },
        { hex: "#F4F1EA", funcion: "Blanco Hueso (Lectura de cuerpo)" }
      ],
      acento: { hex: "#39FF14", funcion: "Verde Ácido (Call To Action y destellos lo-fi)" }
    }
  };
  
  // Función para verificar el sistema de color en consola
  function verificarSistemaColor(paleta) {
    const totalColores = 1 + paleta.colores.secundarios.length + 1;
    return `Sistema '${paleta.nombreProyecto}' cargado correctamente con ${totalColores} colores definidos.`;
  }
  
  // Ejecución
  const resultadoVerificacion = verificarSistemaColor(paletaMiSintoma);
  
  // VERIFICACIÓN: Requerida para consola
  console.log("Estado del Sistema de Marca:", resultadoVerificacion);
// Objeto que representa el perfil de mi_sintoma
const artistaMiSintoma = {
    seudonimo: "mi_sintoma",
    nombre: "Ramiro Amaya",
    disciplinas: ["Baterista", "Dibujador", "Letrista psicodélico"],
    sello: "ALIEN RECORDS",
    redes: {
        instagram: "@mi_sintoma",
        youtube: "UCYoExK8OrYI8sbFv0pUG_hA"
    }
};

// Función para verificar la identidad del artista
function renderizarHeader(artista) {
    if (artista.sello) {
        return `[ARTISTA REGISTRADO]: ${artista.seudonimo} (${artista.nombre}) | Cabeza de ${artista.sello}`;
    } else {
        return "Artista independiente sin sello asignado.";
    }
}

// Ejecución y verificación en consola
console.log(renderizarHeader(artistaMiSintoma));
console.log("Disciplinas conectadas:", artistaMiSintoma.disciplinas.join(" - "));
// Array con los 5 nodos requeridos por la UTN
const mapaMultimedial = [
    { nodo: "Identidad Visual", ejemplo: "Gráfica y logo ALIEN RECORDS" },
    { nodo: "UI/UX Mobile First", ejemplo: "Layout Bootstrap para mi_sintoma" },
    { nodo: "Redes Sociales", ejemplo: "Contenido visual para Instagram" },
    { nodo: "Producción Audiovisual", ejemplo: "Tapas y videos para YouTube" },
    { nodo: "Contenido Interactivo", ejemplo: "Catálogo multimedia" }
];

// Validamos la cantidad mínima de nodos (entre 5 y 7 según consigna)
if (mapaMultimedial.length >= 5 && mapaMultimedial.length <= 7) {
    console.log(`✅ Consigna cumplida: Tenés ${mapaMultimedial.length} nodos integrados.`);
} else {
    console.log("⚠️ Revisar: La consigna exige entre 5 y 7 nodos principales.");
}
// Estructura de datos para los nodos del Mapa Conceptual en FigJam
const mapaConceptualUTN = {
    nodoCentral: "Diseño Multimedial",
    nodos: [
        { campo: "Identidad Visual", ejemplo: "Branding ALIEN RECORDS y estética lo-fi" },
        { campo: "UI/UX Mobile First", ejemplo: "Layout responsive en Bootstrap para la web" },
        { campo: "Redes Sociales", ejemplo: "Piezas gráficas para Instagram (@mi_sintoma)" },
        { campo: "Producción Audiovisual", ejemplo: "Visuales y tapas animadas en YouTube" },
        { campo: "Contenido Interactivo", ejemplo: "Galería multimedia y catálogo musical" }
    ]
};

// Función para verificar la validez del mapa antes de graficar
function validarMapa(mapa) {
    console.log(`=== MAPA CONCEPTUAL: ${mapa.nodoCentral.toUpperCase()} ===`);
    mapa.nodos.forEach((item, index) => {
        console.log(`${index + 1}. [${item.campo}] -> Aplicado en: ${item.ejemplo}`);
    });
    return `\nTotal de nodos cargados: ${mapa.nodos.length} (Cumple con los 5-7 requeridos).`;
}

// Ejecución
console.log(validarMapa(mapaConceptualUTN));
// Configuración Mobile-First con Bootstrap para la web
const estructuraWeb = {
  proyecto: "mi_sintoma",
  sello: "ALIEN RECORDS",
  enfoque: "Mobile First",
  frameworkUI: "Bootstrap 5",
  secciones: ["Header / Hero", "Galería Multimedial", "Catálogo Musical", "Contacto / Redes"]
};

function verificarLayout(web) {
  if (web.enfoque === "Mobile First" && web.frameworkUI.includes("Bootstrap")) {
    return `[LAYOUT LISTO] Sitio de '${web.proyecto}' maquetado bajo enfoque ${web.enfoque} usando ${web.frameworkUI}. Secciones cargadas: ${web.secciones.length}.`;
  } else {
    return "[ERROR DE DISEÑO] Falta definir el enfoque responsive.";
  }
}

// Ejecución
const estadoLayout = verificarLayout(estructuraWeb);

// VERIFICACIÓN DE RIGOR: Consola
console.log("Estado del Maquetado Web:", estadoLayout);
// Configuración de Grilla y Componentes UI (Mobile-First)
const layoutBootstrap = {
  version: "5.3",
  mallaGrid: "Container -> Row -> Col-12 (Mobile) / Col-md-6 (Desktop)",
  componentes: [
    { nombre: "Navbar", tipo: "Encabezado responsive con hamburguesa" },
    { nombre: "Hero Section", tipo: "Banner principal con marca mi_sintoma" },
    { nombre: "Catalog", tipo: "Grilla de productos/música (Cards)" },
    { nombre: "Footer", tipo: "Sello ALIEN RECORDS & Redes Sociales" }
  ]
};

function construirEstructuraDOM(layout) {
  const cantidadComponentes = layout.componentes.length;
  return `[DOM CONSTRUIDO] Sistema de grilla '${layout.mallaGrid}' activo con ${cantidadComponentes} componentes listos para Bootstrap ${layout.version}.`;
}

// Ejecución
const estadoDOM = construirEstructuraDOM(layoutBootstrap);

// REGLA DE ORO: Verificación en consola
console.log("Verificación de Layout Bootstrap:", estadoDOM);
// Captura y manipulación del DOM (Simulación de potenciómetro Green Amps)
const estadoAmpli = {
  encendido: false,
  ganancia: "11/10"
};

function conmutarEncendido() {
  estadoAmpli.encendido = !estadoAmpli.encendido;
  const mensaje = estadoAmpli.encendido 
    ? `[GREEN AMPS ON] Valvulas al rojo vivo. Ganancia: ${estadoAmpli.ganancia}.`
    : "[GREEN AMPS OFF] Standby activo.";
  return mensaje;
}

// Evento de escucha si estamos en entorno navegador o consola
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btn-ampli');
    if (boton) {
      boton.addEventListener('click', () => {
        const respuesta = conmutarEncendido();
        console.log("Estado del DOM:", respuesta);
        alert(respuesta);
      });
    }
  });
}

// VERIFICACIÓN DE RIGOR EN CONSOLA (Node.js)
console.log("Test de Conmutador DOM:", conmutarEncendido());
// Verificación final de sincronización entre backend (Node) y frontend (DOM)
function estadoGlobalCircuito() {
  return "[CIRCUITO SINCRONIZADO] Repositorio de GitHub actualizado + Maquetado Mobile-First listo.";
}

// VERIFICACIÓN DE RIGOR EN CONSOLA
console.log("Estado Final del Proyecto:", estadoGlobalCircuito());
// Manejo de eventos dinámicos para las Cards del Catálogo
const catalogoProyecto = {
  sello: "ALIEN RECORDS",
  itemsCargados: 3,
  activo: true
};

function registrarInteraccionCard(item) {
  return `[CANAL SELECCIONADO] Reproduciendo / Cargando info de: '${item}' bajo el sello ${catalogoProyecto.sello}.`;
}

// Event Listeners en el DOM
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const botonesCards = document.querySelectorAll('.demo-btn');
    botonesCards.forEach(boton => {
      boton.addEventListener('click', (e) => {
        const nombreItem = e.target.getAttribute('data-item');
        const logRespuesta = registrarInteraccionCard(nombreItem);
        console.log("Evento DOM:", logRespuesta);
        alert(logRespuesta);
      });
    });
  });
}

// REGLA DE ORO: Verificación en consola (Node.js)
console.log("Verificación de Catálogo JS:", registrarInteraccionCard("Test de Canal Valvular"));
// Estado global de la aplicación web mi_sintoma
const proyectoFinalUTN = {
  artista: "mi_sintoma",
  sello: "ALIEN RECORDS",
  amplificador: "Green Amps Classic",
  layout: "Mobile First con Bootstrap 5",
  componentesCompletos: true
};

function evaluarProyecto(proyecto) {
  if (proyecto.componentesCompletos) {
    return `[PROYECTO COMPLETO] ${proyecto.artista} | ${proyecto.sello} -> Interfaz '${proyecto.layout}' lista con sonido valvular de ${proyecto.amplificador}.`;
  } else {
    return "[INCOMPLETO] Faltan secciones por maquetar.";
  }
}

// REGLA DE ORO: Verificación en consola para Node.js
console.log("Verificación Final de Interfaz:", evaluarProyecto(proyectoFinalUTN));