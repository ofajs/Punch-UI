import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ZipArchive } from 'archiver';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const skillName = process.argv[2];
if (!skillName) {
  console.error('请指定 skill 名称，例如: node scripts/build-skill.js punch-ui');
  process.exit(1);
}

const skillDir = path.resolve(__dirname, `../skills/${skillName}`);
const outputPath = path.resolve(__dirname, `../skills/${skillName}.zip`);

if (!fs.existsSync(skillDir)) {
  console.error(`skill 目录不存在: ${skillDir}`);
  process.exit(1);
}

const output = fs.createWriteStream(outputPath);
const archive = new ZipArchive({
  zlib: { level: 9 }
});

output.on('close', () => {
  console.log(`已创建 ${skillName}.zip，共 ${archive.pointer()} 字节`);
});

archive.on('error', (err) => {
  throw err;
});

archive.directory(skillDir, false, {
  ignore: ['.DS_Store']
});
archive.pipe(output);
await archive.finalize();
