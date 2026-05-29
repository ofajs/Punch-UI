export const getCurrentLang = () => {
  if (location.href.includes("$mount-")) {
    const segments = location.href.split("/");
    const websiteIndex = segments.indexOf("website");
    const lang = segments[websiteIndex + 1];
    return lang;
  }

  return location.pathname.split("/")[1];
  // return "en";
};

const currentLang = getCurrentLang();

if (currentLang) {
  sessionStorage.setItem("lang", currentLang);
}
