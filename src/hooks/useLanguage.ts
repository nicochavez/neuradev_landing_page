import { useState, useEffect } from 'preact/hooks';

export type Language = 'en' | 'es' | 'fr' | 'de' | 'pt';

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

export const languages: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
];

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Check localStorage first, then browser language, then default to English
    const saved = localStorage.getItem('language') as Language;
    if (saved && languages.find(lang => lang.code === saved)) {
      return saved;
    }
    
    const browserLang = navigator.language.split('-')[0] as Language;
    if (languages.find(lang => lang.code === browserLang)) {
      return browserLang;
    }
    
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  return { currentLanguage, changeLanguage, getCurrentLanguage };
};