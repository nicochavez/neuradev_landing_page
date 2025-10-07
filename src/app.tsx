import { useLanguage } from './hooks/useLanguage'
import { getTranslations } from './translations'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'

export default function App() {
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
      t={t}
      handleBookingClick={handleBookingClick}
    >
      <Home t={t} handleEmailClick={handleEmailClick} handleBookingClick={handleBookingClick} />
    </MainLayout>
  )
}
