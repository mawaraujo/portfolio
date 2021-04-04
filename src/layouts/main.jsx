import ThemeSwitcher from '../components/shared/theme-switcher/index.jsx';

function MainTemplate({ children }) {
    window.scrollTo(0, 0);
    
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