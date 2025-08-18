import type { Translations } from '../../translations'
import GetStarted from './GetStarted'
import Logo from './Logo'
import Navbar from './Navbar'

export interface HeaderParams {
  isDark: boolean
  toggleDarkMode: () => void
  handleEmailClick: () => void
  t: Translations
}

export default function Header({ isDark, toggleDarkMode, handleEmailClick, t }: HeaderParams) {
  return (
    <header className="border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <Navbar t={t} isDark={isDark} toggleDarkMode={toggleDarkMode} />
          <GetStarted handleEmailClick={handleEmailClick} t={t} />
        </div>
      </div>
    </header>
  )
}
