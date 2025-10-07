import { useDarkMode } from './hooks/useDarkMode'
import { useLanguage } from './hooks/useLanguage'
import { getTranslations } from './translations'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'

export default function App() {
  const { isDark, toggleDarkMode } = useDarkMode()
  const { currentLanguage } = useLanguage()
  const t = getTranslations(currentLanguage)

  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@youragency.com'
  }

  const handleBookingClick = () => {
    // Replace with your actual booking link
    window.open('https://calendly.com/youragency', '_blank')
  }

  return (
    <MainLayout
      isDark={isDark}
      toggleDarkMode={toggleDarkMode}
      t={t}
      handleEmailClick={handleEmailClick}
      handleBookingClick={handleBookingClick}
    >
      <Home t={t} handleEmailClick={handleEmailClick} handleBookingClick={handleBookingClick} />
    </MainLayout>
  )
}
