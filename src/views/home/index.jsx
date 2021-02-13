import MainTemplate from '../../layouts/main.jsx';
import Presentation from '../../components/home/presentation/index.jsx';
import NextPage from '../../components/shared/next-page/index.jsx';

function Home() {
    return(
        <MainTemplate>
            <div className="pt-10">
                <Presentation
                    presentationTitle="Mauro Araujo"
                    presentationDescription="Desarrollador de aplicaciones y sitios web" />

                <NextPage title="Siguiente pagina" link="/portfolio" />
            </div>
        </MainTemplate>
    );
};

export default Home;