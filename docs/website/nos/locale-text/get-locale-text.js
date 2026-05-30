let defaultLang =
  sessionStorage.getItem("lang") || localStorage.getItem("lang");

if (!defaultLang) {
  // 根据本地语言，进行修正
  if (navigator.language.toLowerCase().includes("zh")) {
    defaultLang = "cn";
  } else if (navigator.language.toLowerCase().includes("ja")) {
    defaultLang = "ja";
  }
}

if (!defaultLang) {
  defaultLang = "en";
}

export const getLang = () => {
  return defaultLang;
};

// 通过对象获取对应语言的文本
export const getLocaleText = (obj, options) => {
  let text = obj[getLang()];

  // 如果没有对应语言的文本，查找en
  if (text === undefined && obj.en !== undefined) {
    text = obj.en;
  }

  // 如果没有en，返回第一个文本
  if (text === undefined) {
    text = obj[Object.keys(obj)[0]];
  }

  return text;
};

export default getLocaleText;
