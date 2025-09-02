import { Brain, Mail, Calendar } from 'lucide-react'
import type { Translations } from '../translations'

export default function Footer({
  t,
  handleEmailClick,
  handleBookingClick,
}: {
  t: Translations
  handleEmailClick: () => void
  handleBookingClick: () => void
}) {
  return (
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
          <p className="text-gray-400 dark:text-gray-500">{t.footerText}</p>
        </div>
      </div>
    </footer>
  )
}
