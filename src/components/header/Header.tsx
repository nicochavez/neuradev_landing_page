import type { Translations } from '../../translations'
import Logo from './Logo'
import Navbar from './Navbar'

export interface HeaderParams {
  t: Translations
}

export default function Header({ t }: HeaderParams) {
  return (
    <header className="border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <Navbar t={t} />
        </div>
      </div>
    </header>
  )
}
