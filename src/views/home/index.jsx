import MainTemplate from '../../layouts/main.jsx';
import DynamicPresentation from '../../components/home/dynamicPresentation/index.jsx';
import NextPage from '../../components/shared/next-page/index.jsx';
import SEOHandler from '../../components/shared/seo-handler/index.jsx';

function Home() {
    return(
        <MainTemplate>  
            <SEOHandler 
                title="Bienvenido"
                description={{
                    name: 'Inicio',
                    content: 'Desarrollador de aplicaciones y sitios web'
                }}
            />

            <div className="pt-10">
                <DynamicPresentation />
                <NextPage title="Continuar" link="/about-me" />
            </div>
        </MainTemplate>
    );
};

export default Home;