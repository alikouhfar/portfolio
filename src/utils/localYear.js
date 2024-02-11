function localYear(language) {
  const locale = language === "en" ? "en-US" : "fa-IR";
  const currentYear = new Intl.DateTimeFormat(locale, {
    year: "numeric",
  }).format(Date.now());
}
