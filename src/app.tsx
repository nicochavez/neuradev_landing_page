import { ArrowRight, Brain, Zap, Cog, CheckCircle, Mail, Calendar, ChevronRight } from 'lucide-react';
import { useDarkMode } from './hooks/useDarkMode';
import { useLanguage } from './hooks/useLanguage';
import { DarkModeToggle } from './components/DarkModeToggle';
import { LanguageDropdown } from './components/LanguageDropdown';
import { getTranslations } from './translations';

export default function App() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const { currentLanguage } = useLanguage();
  const t = getTranslations(currentLanguage);

  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@youragency.com';
  };

  const handleBookingClick = () => {
    // Replace with your actual booking link
    window.open('https://calendly.com/youragency', '_blank');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Neuradev</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{t.about}</a>
              <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{t.services}</a>
              <a href="#why-us" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{t.whyChooseUs}</a>
              <LanguageDropdown />
              <DarkModeToggle isDark={isDark} onToggle={toggleDarkMode} />
            </div>
            <div className="flex items-center space-x-2">
              <div className="md:hidden">
                <LanguageDropdown />
              </div>
              <div className="md:hidden">
                <DarkModeToggle isDark={isDark} onToggle={toggleDarkMode} />
              </div>
              <button
                onClick={handleEmailClick}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-lg"
              >
                {t.getStarted}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 py-20 lg:py-32 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              {t.heroTagline}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t.heroTitle1}
              <br />
              <span className="text-blue-600">{t.heroTitle2}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEmailClick}
                className="group bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 hover:shadow-xl hover:shadow-blue-200/50 flex items-center justify-center text-lg font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t.sendMessage}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleBookingClick}
                className="group bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200 hover:shadow-xl hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50 flex items-center justify-center text-lg font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t.bookMeeting}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.whoWeAre}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.whoWeAreDescription}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.pioneersTitle}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t.pioneersDescription1}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.pioneersDescription2}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl transition-colors duration-300">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t.aiFirst}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t.aiFirstDesc}</p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl transition-colors duration-300">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t.lightningFast}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t.lightningFastDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.whatWeDo}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.whatWeDoDescription}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-lg dark:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.aiDevelopment}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.aiDevelopmentDesc}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                  {t.machineLearning}
                </li>
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                  {t.nlp}
                </li>
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                  {t.predictiveAnalytics}
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-lg dark:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.smartAutomation}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.smartAutomationDesc}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                  {t.processAutomation}
                </li>
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                  {t.workflowOptimization}
                </li>
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                  {t.integrationSolutions}
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-lg dark:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Cog className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.customSolutions}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.customSolutionsDesc}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                  {t.webApplications}
                </li>
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                  {t.apiDevelopment}
                </li>
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                  {t.systemIntegration}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.whyChooseUsTitle}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.whyChooseUsDescription}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.innovationFirst}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.innovationFirstDesc}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.maximumEfficiency}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.maximumEfficiencyDesc}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.fastResults}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.fastResultsDesc}
              </p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">{t.ctaTitle}</h3>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
              {t.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEmailClick}
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-xl flex items-center justify-center text-lg font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t.sendMessage}
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleBookingClick}
                className="group bg-transparent text-white px-8 py-4 rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 dark:hover:text-blue-600 transition-all duration-200 flex items-center justify-center text-lg font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t.bookMeeting}
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-8 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">AIFlow</span>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-gray-400 dark:text-gray-500">{t.readyToStart}</p>
              <div className="flex space-x-4">
                <button
                  onClick={handleEmailClick}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  hello@youragency.com
                </button>
                <button
                  onClick={handleBookingClick}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t.bookMeeting}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 dark:border-gray-700 text-center">
            <p className="text-gray-400 dark:text-gray-500">
              {t.footerText}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
