import { hasClass } from './utils/css/hasClass.js'
import { addClass } from './utils/css/addClass.js'
import { toggleClass } from './utils/css/toggleClass.js'
import { APP_CONFIG } from './config.js'

export function setListenerForThemeMode({ selector }: { selector: HTMLElement}): void {
  const { THEMES: { DARK_MODE, LIGHT_MODE }, THEME_MODE } = APP_CONFIG

  selector.addEventListener('click', () => {
    const isDarkMode = hasClass({ selector: document.body, name: DARK_MODE })
    selector.innerText = `Change to ${ isDarkMode ? DARK_MODE : LIGHT_MODE}`
    document.body.classList.toggle(DARK_MODE)
    localStorage.setItem(THEME_MODE, isDarkMode ? LIGHT_MODE : DARK_MODE)
  })
}

export function changeThemeMode(): void {
  const { THEMES: { DARK_MODE, LIGHT_MODE }, THEME_MODE } = APP_CONFIG
  const isDarkModeInSystem = window.matchMedia('(prefers-color-scheme: dark)').matches
  const getThemeModeFromLocalStorage = localStorage.getItem(THEME_MODE)

  if(isDarkModeInSystem && getThemeModeFromLocalStorage || !isDarkModeInSystem && getThemeModeFromLocalStorage) {
    getThemeModeFromLocalStorage == DARK_MODE ? toggleClass({ selector: document.body, name: DARK_MODE }) : null
  } else if(isDarkModeInSystem && !getThemeModeFromLocalStorage) {
    localStorage.setItem(THEME_MODE, DARK_MODE)
    addClass({ selector: document.body, name: DARK_MODE })
  } else {
    localStorage.setItem(THEME_MODE, LIGHT_MODE)
  }
}