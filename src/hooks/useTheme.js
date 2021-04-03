import { useState } from 'react';
import ThemeService from '../core/utils/theme-service';

function useThemeService() {
    const ThemeHandler = new ThemeService();
    const [ currentTheme, setCurrentTheme ] = useState(window.localStorage.theme);

    const initializeThemeService = () => ThemeHandler.initialize();
    const updateTheme = () => setCurrentTheme(ThemeHandler.toggleTheme());

    return [ 
        currentTheme, 
        updateTheme,
        initializeThemeService 
    ];
};

export default useThemeService;