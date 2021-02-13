import { useState } from 'react';
import ThemeService from '../core/utils/theme-service';

function useThemeService() {
    const ThemeHandler = new ThemeService();
    const [ theme, setTheme ] = useState(window.localStorage.theme);

    const initializeService = () => ThemeHandler.initialize();
    const updateTheme = () => setTheme(ThemeHandler.toggleTheme());

    return [ 
        theme, 
        updateTheme,
        initializeService 
    ];
};

export default useThemeService;