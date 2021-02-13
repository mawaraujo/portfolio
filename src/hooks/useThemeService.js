import { useState } from 'react';
import ThemeService from '../core/utils/theme-service';

function useThemeService() {
    const ThemeHandler = new ThemeService();
    const [ theme, setTheme ] = useState(window.localStorage.theme);

    const initializeThemeService = () => ThemeHandler.initialize();
    const updateTheme = () => setTheme(ThemeHandler.toggleTheme());

    return [ 
        theme, 
        updateTheme,
        initializeThemeService 
    ];
};

export default useThemeService;