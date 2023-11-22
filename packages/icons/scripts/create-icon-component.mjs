import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import myDestRewriter from "./rename.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgDirname = path.join(__dirname, "../material-icons");
const componentDirname = path.join(__dirname, "../lib");

function generateHTML(svgContent, convertedName) {
  const templatePath = path.join(__dirname, "template.html");
  let templateContent = fs.readFileSync(templatePath, "utf8");

  const svgPattern = "<!-- SVG content will be inserted here -->";
  templateContent = templateContent.replace(svgPattern, svgContent);

  const namePattern = "component-name-placeholder";
  const componentName = `${convertedName}-icon`;
  templateContent = templateContent.replace(namePattern, componentName);
  return templateContent;
}

function generateJSON(svgFiles) {
  const fileNames = svgFiles.map((file) => ({
    name: myDestRewriter(file),
  }));
  const result = {
    total: svgFiles.length,
    fileNames: fileNames,
  };
  const jsonResult = JSON.stringify(result, null, 2);
  const htmlFilePath = path.join(componentDirname, "svg-files.json");

  fs.writeFileSync(htmlFilePath, jsonResult, "utf8");

  console.log(`Generated ${htmlFilePath}`);
}

function cleanSvgPath(svgContent) {
  const processedSvg = svgContent.replace(/<path[^>]*fill="none"[^>]*>/g, "");
  const finalSvg = processedSvg.replace(/<path/g, '<path fill="currentColor"');
  return finalSvg;
}

// Get all SVG files in the target file
const svgFiles = fs
  .readdirSync(svgDirname)
  .filter((file) => path.extname(file) === ".svg");

// The contents of each SVG file are read and the corresponding HTML file is generated
svgFiles.forEach((svgFile) => {
  const svgFilePath = path.join(svgDirname, svgFile);
  const convertedName = myDestRewriter(svgFile);
  const svgContent = fs.readFileSync(svgFilePath, "utf8");
  const finalSvg = cleanSvgPath(svgContent);

  const htmlContent = generateHTML(finalSvg, convertedName);
  const htmlFileName = `${convertedName}-icon.html`;
  const htmlFilePath = path.join(componentDirname, htmlFileName);

  fs.writeFileSync(htmlFilePath, htmlContent, "utf8");

  console.log(`Generated ${htmlFileName}`);
});

generateJSON(svgFiles);
