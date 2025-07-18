const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.resolve(__dirname, 'src/assets'); // pasta com as imagens originais
const outputDir = path.resolve(__dirname, 'src/assets/resized'); // pasta para salvar as versões menores

// Cria a pasta de saída se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const sizes = [300, 600]; // larguras desejadas em px para as versões redimensionadas

// Pega todos os arquivos .webp da pasta de entrada
const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.webp'));

async function resizeImage(file) {
  const inputFile = path.join(inputDir, file);
  const fileName = path.parse(file).name;

  for (const size of sizes) {
    const outputFile = path.join(outputDir, `${fileName}-${size}.webp`);
    try {
      await sharp(inputFile)
        .resize(size)
        .toFile(outputFile);
      console.log(`Imagem redimensionada: ${outputFile}`);
    } catch (err) {
      console.error(`Erro ao redimensionar ${file}:`, err);
    }
  }
}

async function run() {
  for (const file of files) {
    await resizeImage(file);
  }
  console.log('Todas as imagens foram redimensionadas!');
}

run();
