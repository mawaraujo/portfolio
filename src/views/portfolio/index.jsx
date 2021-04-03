import MainTemplate from '../../layouts/main.jsx';
import Presentation from '../../components/shared/presentation/index.jsx';
import NextPage from '../../components/shared/next-page/index.jsx';
import BackPage from '../../components/shared/back-page/index.jsx';
import Grid from '../../components/portfolio/grid/index.jsx';
import Seed from '../../core/seeders/seed.json';
import SEOComponent from '../../components/shared/seo-component/index.jsx';

function Home() {
    return(
        <MainTemplate>
            <SEOComponent 
                title="Portfolio"
                description={{
                    name: 'Inicio',
                    content: 'Desarrollador de aplicaciones y sitios web'
                }}
            />

            <div className="pt-10">
                <BackPage title="Acerca de" link="/about-me" />

                <Presentation
                    presentationTitle={`Portfolio`}
                    presentationDescription="En este apartado podrás visualizar todos mis trabajos realizados" />

                <Grid data={Seed} />
                <NextPage title="Contacto" link="/contact" />
            </div>
        </MainTemplate>
    );
};  

export default Home;