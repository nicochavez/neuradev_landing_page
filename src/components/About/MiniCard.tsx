import { type JSX } from 'react'
import type { Translations } from '../../translations'

interface MiniCardProps {
  t: Translations
  icon: JSX.Element
}

export default function MiniCard({ t, icon }: MiniCardProps) {
  return (
    <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl transition-colors duration-300">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t.aiFirst}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">{t.aiFirstDesc}</p>
    </div>
  )
}
