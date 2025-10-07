import { useDarkMode } from './hooks/useDarkMode'
import { useLanguage } from './hooks/useLanguage'
import { getTranslations } from './translations'
import Header from './components/header/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/whyUs'
import Footer from './components/footer'
import BackgroundCanvas from './components/BackgroundCanvas'

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
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative">
      <BackgroundCanvas />
      <div className="relative z-10">
      <Header
        isDark={isDark}
        toggleDarkMode={toggleDarkMode}
        t={t}
        handleEmailClick={handleEmailClick}
      />
      <Hero t={t} handleEmailClick={handleEmailClick} handleBookingClick={handleBookingClick} />
      <About t={t} />
      <Services t={t} />
      <WhyUs t={t} handleEmailClick={handleEmailClick} handleBookingClick={handleBookingClick} />
      <Footer t={t} handleEmailClick={handleEmailClick} handleBookingClick={handleBookingClick} />
      </div>
    </div>
  )
}
