import { useState, useEffect } from 'react';
import ThemeService from '../core/utils/theme-service';

function useThemeService() {
    const ThemeHandler = new ThemeService();
    const [ theme, setTheme ] = useState(window.localStorage.theme);

    // eslint-disable-next-line
    useEffect(() => ThemeHandler.initialize(), []);

    const updateTheme = () => setTheme(ThemeHandler.toggleTheme());
    return [ theme, updateTheme ];
};

export default useThemeService;