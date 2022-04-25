export enum E_THEME {
  LIGHT = "light",
  DARK = "dark",
}

const themeKeyInLocalStorage = "theme";

export const currentTheme = (() => {
  return (
    (localStorage.getItem(themeKeyInLocalStorage) as E_THEME) ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? E_THEME.DARK
      : E_THEME.LIGHT)
  );
})();

/** Загрузка темы из semantic-ui-sass
 *
 * @param {E_THEME} themeName Название темы (dark, light и т.д)
 */
export const loadTheme = () => {
  if (currentTheme === E_THEME.LIGHT) {
    return;
  }
  import(`../semantic-ui-sass/${currentTheme}/_index.scss`);
};

/** Переключение темы сайта
 *
 * @param {E_THEME} themeName Название темы (dark, light и т.д)
 */
export const switchTheme = (themeName: E_THEME) => {
  localStorage.setItem(themeKeyInLocalStorage, themeName);
  document.location.reload();
};
