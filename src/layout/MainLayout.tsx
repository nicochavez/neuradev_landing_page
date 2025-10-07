import Header from '../components/header/Header'
import Footer from '../components/Footer'
import BackgroundCanvas from '../components/BackgroundCanvas'
import type { ReactNode } from 'preact/compat'

interface MainLayoutProps {
  children: ReactNode
  isDark: boolean
  toggleDarkMode: () => void
  t: any
  handleEmailClick: () => void
  handleBookingClick: () => void
}

export default function MainLayout({
  children,
  isDark,
  toggleDarkMode,
  t,
  handleEmailClick,
  handleBookingClick,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative">
      <BackgroundCanvas />
      <div className="relative z-10">
        <Header
          isDark={isDark}
          toggleDarkMode={toggleDarkMode}
          t={t}
          handleEmailClick={handleEmailClick}
        />
        {children}
        <Footer t={t} handleEmailClick={handleEmailClick} handleBookingClick={handleBookingClick} />
      </div>
    </div>
  )
}


