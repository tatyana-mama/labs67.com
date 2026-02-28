function setLang(lang) {
  // Check and set localStorage for language
  localStorage.setItem("labs67_lang_main", lang);
  // Verify if the language is in the i18n object
  if (!(lang in i18n)) {
    console.error(`Language ${lang} not found in i18n.`);
    return;
  }
}
