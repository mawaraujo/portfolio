import ThemeSwitcher from '../components/shared/theme-switcher/index.jsx';
// import Navigation from '../components/shared/navigation/index.jsx';

function MainTemplate({ children }) {
    return(
        <main className="container app-wrapper sm:mx-auto px-5 my-10">
            { /* <Navigation /> */ }
            
            <div className="appear-anim">
                {children && children}
            </div>
            
            <ThemeSwitcher />
        </main>
    );
}

export default MainTemplate;