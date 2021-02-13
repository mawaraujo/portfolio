class ThemeService {
    localStorageTheme = window.localStorage.theme;
    body = document.body;

    createThemeStorage() {
        return window.localStorage.theme = 'light';
    }

    /**
     * Initialize the application theme
     * @returns Add the theme the body
    */
    initialize() {
        if(this.localStorageTheme) {
            return this.body.classList.add(this.localStorageTheme);
        }

        this.createThemeStorage();
        return this.body.classList.add('light');
    };

    /**
     * update the application theme
     * @returns Add the theme the body and update localStorage value
    */   
    toggleTheme() {
        this.body.className = '';
  
        if(window.localStorage.theme === 'dark') {
           this.body.classList.add('light');
           window.localStorage.theme = 'light';
           return 'light';
        }
  
        this.body.classList.add('dark');
        window.localStorage.theme = 'dark';
        return 'dark';
    }
};

export default ThemeService;