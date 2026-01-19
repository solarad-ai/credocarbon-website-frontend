import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ChevronDown } from 'lucide-react';

export default function LanguageBar() {
    const { i18n } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(true);

    // Load collapsed state from localStorage
    useEffect(() => {
        const savedState = localStorage.getItem('languageBarExpanded');
        if (savedState !== null) {
            setIsExpanded(savedState === 'true');
        }
    }, []);

    // Save collapsed state to localStorage
    const toggleExpanded = (expanded: boolean) => {
        setIsExpanded(expanded);
        localStorage.setItem('languageBarExpanded', String(expanded));
    };

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const currentLang = i18n.language?.split('-')[0] || 'en';

    // Collapsed state - thin dark line
    if (!isExpanded) {
        return (
            <div
                onClick={() => toggleExpanded(true)}
                className="w-full h-1.5 bg-slate-800/90 cursor-pointer hover:bg-slate-700 transition-colors duration-300 flex items-center justify-center group"
            >
                <ChevronDown className="w-3 h-3 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        );
    }

    // Expanded state - full language bar
    return (
        <div className="w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 transition-all duration-300 ease-out">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
                {/* Language Tabs */}
                <div className="flex items-center gap-1">
                    <button
                        onClick={() => changeLanguage('ar')}
                        className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${currentLang === 'ar'
                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                            }`}
                    >
                        العربية
                    </button>
                    <button
                        onClick={() => changeLanguage('en')}
                        className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${currentLang === 'en'
                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                            }`}
                    >
                        English
                    </button>
                </div>

                {/* Close Button */}
                <button
                    onClick={() => toggleExpanded(false)}
                    className="p-1.5 text-slate-500 hover:text-slate-300 hover:bg-slate-800/50 rounded-md transition-colors"
                    aria-label="Close language bar"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
