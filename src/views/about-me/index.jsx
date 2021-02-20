import MainTemplate from '../../layouts/main.jsx';
import NextPage from '../../components/shared/next-page/index.jsx';

function Home() {
    const userName = window.localStorage.mawsitename.slice(0, 15);

    return(
        <MainTemplate>
            <div className="pt-10">
                <h1 className="title">
                    {`¡Hey, ${userName || 'Bienvenido'}!`}
                </h1>

                <h1 className="mt-10">AÑDIR UN BOTON QUE DIGA "CAMBIAR NOMBRE", ESO DESPLIEGA UN MODAL</h1>

                <p className="description mt-10">
                    Saludos desde Buenos Aires, Argentina.
                </p>

                <p className="description-small mt-3">
                    Soy <span className="text-blue-500">Mauro Araujo</span>, tengo 22 años.
                </p>

                <p className="description-small">
                    Actualmente, me encuentro trabajando como desarrollador de <span className="text-blue-500">aplicaciones y sitios web</span>.
                </p>

                <NextPage title="Portfolio" link="/portfolio" />
            </div>
        </MainTemplate>
    );
};

export default Home;