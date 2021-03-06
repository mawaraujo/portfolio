import { useEffect } from 'react';
import useTheme from '../../../hooks/useTheme.js';

function LightRender() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="w-7 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
        </svg>
}

function NightRender() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
}

function ThemeSwitcher() {
    const [ currentTheme, updateTheme, initializeThemeService ] = useTheme();

    // eslint-disable-next-line
    useEffect(() => initializeThemeService(), []);

    return(
        <button
            className={
            `${currentTheme === 'light' ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-900 hover:bg-gray-800'} 
            fixed bottom-6 right-6 rounded-full text-white p-3 focus:outline-none outline-none`}
            onClick={updateTheme}>

            { currentTheme === 'light' ? <NightRender /> : <LightRender/> }
        </button>
    );
}

export default ThemeSwitcher;