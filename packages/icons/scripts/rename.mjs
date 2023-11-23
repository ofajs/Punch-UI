const singleDigitNumbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const twoDigitNumbers1 = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

export default function myDestRewriter(svgName) {
  let fileName = svgName;

  fileName = fileName.replace(/_([0-9]+)px\.svg/, "").replace(/_/g, "-");
  // 3d-rotation
  if (fileName.startsWith("3d-rotation")) {
    return `three${fileName.slice(2)}`;
  }

  if (fileName.startsWith("3p")) {
    return `three-p${fileName.slice(2)}`;
  }

  if (fileName.startsWith("30fps")) {
    return `thirty-fps${fileName.slice(5)}`;
  }
  if (fileName.startsWith("60fps")) {
    return `sixty-fps${fileName.slice(5)}`;
  }
  if (fileName.startsWith("360")) {
    return `three-sixty${fileName.slice(3)}`;
  }
  // 是否以数字后跟字母 "K" 的形式结尾
  if (/\dk/.test(fileName)) {
    return `${singleDigitNumbers[fileName[0]]}K${fileName.slice(2)}`;
  }
  //以数字开头且紧随其后有字母 "m" 和 "p" 
  if (/^\dmp/.test(fileName)) {
    return `${singleDigitNumbers[fileName[0]]}M${fileName.slice(2)}`;
  }
  // 以数字 1 开头且紧随其后有字母 "m" 和 "p" 
  if (/^1\dmp/.test(fileName)) {
    return `${twoDigitNumbers1[fileName[1]]}M${fileName.slice(3)}`;
  }
  if (/^2\dmp/.test(fileName)) {
    return `twenty-${singleDigitNumbers[fileName[1]]}M${fileName.slice(3)}`;
  }

  if (fileName.startsWith("1x")) {
    return `times-one-${fileName.slice(2)}`;
  }

  if (fileName.startsWith("3g")) {
    return `three-g-${fileName.slice(2)}`;
  }
  if (fileName.startsWith("4g")) {
    return `four-g-${fileName.slice(2)}`;
  }
  if (fileName.startsWith("5g")) {
    return `five-g${fileName.slice(2)}`;
  }

  // All other names starting with a number between 10 and 19
  if (/^1\d/.test(fileName)) {
    return `${twoDigitNumbers1[fileName[1]]}${fileName.slice(2)}`;
  }

  return fileName;
}
