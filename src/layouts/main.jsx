import ThemeSwitcher from '../components/shared/theme-switcher/index.jsx';

function MainTemplate({ children }) {
    return(
        <main className="container app-wrapper sm:mx-auto px-5 my-10">
            <div className="appear-anim">
                {children && children}
            </div>
            
            <ThemeSwitcher />
        </main>
    );
}

export default MainTemplate;