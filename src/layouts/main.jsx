import ThemeSwitcher from '../components/shared/theme-switcher/index.jsx';
import Navigation from '../components/shared/navigation/index.jsx';

function MainTemplate({ children }) {
    return(
        <main className="container app-wrapper sm:mx-auto px-5 my-10">
            <Navigation />
            <ThemeSwitcher />
            {children && children}
        </main>
    );
}

export default MainTemplate;