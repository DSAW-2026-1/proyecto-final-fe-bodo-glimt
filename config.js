// Configuración del frontend
// Lee la variable de entorno o usa un valor por defecto

const API_BASE_URL = (
  // Intenta leer de ventana global (establecida en HTML)
  window.__API_BASE_URL ||
  // Intenta leer del meta tag
  document.querySelector('meta[name="sm-api-base"]')?.getAttribute('content') ||
  // Fallback para desarrollo
  'https://proyecto-final-be-bodo-glimt-1.onrender.com'
);

// Exporta la configuración
window.CONFIG = {
  API_BASE_URL: API_BASE_URL.replace(/\/$/, ''), // elimina trailing slash
};

console.log('Frontend Config:', window.CONFIG);
