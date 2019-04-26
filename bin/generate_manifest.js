const MANIFEST_FILE = __dirname + '/../manifest.json';
const ASSET_DIR = __dirname + '/../assets';

const fs = require('fs');
const path = require('path');
const manifest = JSON.parse(fs.readFileSync(MANIFEST_FILE, 'utf-8'));

Object.keys(manifest).forEach((fileType) => {
  Object.keys(manifest[fileType]).forEach((key) => {
    const entry = manifest[fileType][key];
    const stats = fs.statSync(path.join(ASSET_DIR, fileType, entry.file));

    entry.size = stats.size;

    console.log('Adding', entry.file, entry.size);
  });
});

fs.writeFileSync(MANIFEST_FILE, JSON.stringify(manifest));
