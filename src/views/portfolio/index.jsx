import MainTemplate from '../../layouts/main.jsx';
import Presentation from '../../components/home/presentation/index.jsx';
// import NextPage from '../../components/shared/next-page/index.jsx';
import Grid from '../../components/portfolio/grid/index.jsx';
import Database from '../../core/lowdb/database.json';

function Home() {
    return(
        <MainTemplate>
            <div className="pt-10">
                <Presentation
                    presentationTitle="Portfolio"
                    presentationDescription="En este apartado podrás visualizar todos mis trabajos realizados" />

                <Grid data={Database} />

                {/* <NextPage title="Siguiente pagina" link="/" /> */}
            </div>
        </MainTemplate>
    );
};

export default Home;