import { Brain, Zap } from 'lucide-react'
import type { Translations } from '../translations'

export default function About({ t }: { t: Translations }) {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.whoWeAre}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.whoWeAreDescription}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t.pioneersTitle}
            </h3>
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {t.lightningFast}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t.lightningFastDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
