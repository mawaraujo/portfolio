import MainTemplate from '../../layouts/main.jsx';
import NextPage from '../../components/shared/next-page/index.jsx';
import SEOComponent from '../../components/shared/seo-component/index.jsx';
import { connect } from 'react-redux';

function AboutMe({ GET_USER }) {
    const userName = GET_USER?.name?.slice(0, 15) || false;

    return(
        <MainTemplate>
            <SEOComponent 
                title="Acerca de mí"
                description={{
                    name: 'Inicio',
                    content: 'Desarrollador de aplicaciones y sitios web'
                }}
            />

            <div className="pt-10">
                <h1 className="title">
                    {
                        userName && userName !== 'undefined' 
                        ? `Saludos, ${userName}`
                        : `Saludos, Estimado`
                    }
                </h1>

                <p className="description-small mt-10">
                    Me presento, 
                </p>

                <p className="description-small mt-5">
                    Soy <span className="text-blue-500">Mauro,</span> tengo 22 años y resido en Buenos Aires, Argentina. Me encuentro trabajando <br /> como <span className="text-blue-500">desarrollador de aplicaciones web</span> de forma remota para una startup de España.
                </p>

                <p className="description-small mt-5">
                    Me considero un entusiasta del Frontend, pero cuento también con mucho interés en el Backend. <br /> Intento —de forma constante— <span className="text-blue-500">aprender nuevas herramientas y/o tecnologías</span> que ayude a la hora de trabajar, <br /> aporte valor agregado y mejore tanto mis actuales como futuros desarrollos. 
                </p>

                <NextPage title="Portfolio" link="/portfolio" />
            </div>
        </MainTemplate>
    );
};

const mapStateProps = (state, props) => {
    return {
        GET_USER: state.user
    }
}

export default connect(mapStateProps, null)(AboutMe);