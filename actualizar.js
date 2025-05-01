// actualizar.js
const fs = require('fs');
const path = require('path');

// Ruta al archivo JSON de entrada
const instanciaPath = path.resolve(__dirname, './instancia_javier_egas.json');

// Leer el archivo JSON
let nuevaInstancia;
try {
  nuevaInstancia = JSON.parse(fs.readFileSync(instanciaPath, 'utf-8'));
} catch (error) {
  console.error('❌ Error al leer el archivo JSON:', error.message);
  process.exit(1);
}

// Mapeo de claves del JSON a archivos y nombres de exportación
const archivos = {
  profile: {
    file: 'src/data/profile.js',
    exportName: 'profileData',
  },
  contact: {
    file: 'src/data/contact.js',
    exportName: 'contactsData',
  },
  socialLinks: {
    file: 'src/data/socialLinks.js',
    exportName: 'socialLinks',
  },
  products: {
    file: 'src/data/products.js',
    exportName: 'servicesItems',
  },
  education: {
    file: 'src/data/education.js',
    exportName: 'educationEntries',
  },
  slides: {
    file: 'src/data/slides.js',
    exportName: 'slidesData',
  },
};

// Reemplazo inteligente solo si la clave está en el JSON
Object.entries(archivos).forEach(([clave, config]) => {
  if (!(clave in nuevaInstancia)) {
    console.log(`⚠️  Se omite ${clave} (no está en el JSON).`);
    return;
  }

  const contenido = `export const ${config.exportName} = ${JSON.stringify(nuevaInstancia[clave], null, 2)};\n`;

  const rutaArchivo = path.resolve(__dirname, config.file);
  try {
    fs.writeFileSync(rutaArchivo, contenido, 'utf-8');
    console.log(`✅ Archivo actualizado: ${config.file}`);
  } catch (error) {
    console.error(`❌ Error al escribir ${config.file}:`, error.message);
  }
});

console.log('\n🎉 Reemplazo de arrays completado.\n');
