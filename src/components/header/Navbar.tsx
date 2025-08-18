import type { Translations } from '../../translations'
import { DarkModeToggle } from '../DarkModeToggle'
import { LanguageDropdown } from '../LanguageDropdown'

export default function Navbar({
  t,
  isDark,
  toggleDarkMode,
}: {
  t: Translations
  isDark: boolean
  toggleDarkMode: () => void
}) {
  return (
    <>
      <div className="hidden md:flex items-center space-x-8">
        <a
          href="#about"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {t.about}
        </a>
        <a
          href="#services"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {t.services}
        </a>
        <a
          href="#why-us"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {t.whyChooseUs}
        </a>
        <LanguageDropdown />
        <DarkModeToggle isDark={isDark} onToggle={toggleDarkMode} />
      </div>
      <div className="md:hidden">
        <LanguageDropdown />
      </div>
      <div className="md:hidden">
        <DarkModeToggle isDark={isDark} onToggle={toggleDarkMode} />
      </div>
    </>
  )
}
