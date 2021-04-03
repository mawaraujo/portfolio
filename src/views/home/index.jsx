import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import MainTemplate from '../../layouts/main.jsx';
import DynamicPresentation from '../../components/home/dynamicPresentation/index.jsx';
import NextPage from '../../components/shared/next-page/index.jsx';
import SEOComponent from '../../components/shared/seo-handler/index.jsx';

function Home() {
    const history = useHistory();
    const [submit, setSubmit] = useState(false);
    
    useEffect(function() {
        if(submit) return history.push('/about-me');
        // eslint-disable-next-line
    }, [submit]);

    return(
        <MainTemplate>  
            <SEOComponent 
                title="Bienvenido"
                description={{
                    name: 'Inicio',
                    content: 'Desarrollador de aplicaciones y sitios web'
                }}
            />

            <div className="pt-10">
                <DynamicPresentation 
                    setSubmit={setSubmit} />

                <NextPage 
                    title="Continuar" 
                    link="/about-me" />
            </div>
        </MainTemplate>
    );
};

export default Home;