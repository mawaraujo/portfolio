import { useHistory } from 'react-router-dom';
import MainTemplate from '../../layouts/main.jsx';
import DynamicPresentation from '../../components/home/dynamicPresentation/index.jsx';
import NextPage from '../../components/shared/next-page/index.jsx';
import SEOHandler from '../../components/shared/seo-handler/index.jsx';

function Home() {
    const history = useHistory();
    const storageName = window.localStorage.mawsitename;

    if(storageName && storageName !== 'undefined') history.push('/about-me');

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