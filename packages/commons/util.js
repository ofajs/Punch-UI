export function convertToRGBA(colorString, opacity = "0.1") {
  if (colorString.startsWith("#")) {
    const hexColor = colorString.slice(1);
    const red = parseInt(hexColor.slice(0, 2), 16);
    const green = parseInt(hexColor.slice(2, 4), 16);
    const blue = parseInt(hexColor.slice(4, 6), 16);

    const rgbaColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    return rgbaColor;
  } else if (colorString.startsWith("rgb")) {
    return colorString.replace("rgb", "rgba").replace(")", `, ${opacity})`);
  } else {
    return "";
  }
}

// const color1 = "#FF5733";
// const color2 = "rgb(120, 45, 200)";

// const rgbaColor1 = convertToRGBA(color1);
// const rgbaColor2 = convertToRGBA(color2);

// console.log(rgbaColor1); // 输出 "rgba(255, 87, 51, 0.1)"
// console.log(rgbaColor2); // 输出 "rgba(120, 45, 200, 0.1)"
