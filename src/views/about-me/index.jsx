import MainTemplate from '../../layouts/main.jsx';
import NextPage from '../../components/shared/next-page/index.jsx';
import SEOHandler from '../../components/shared/seo-handler/index.jsx';
import { connect } from 'react-redux';

function AboutMe({ GET_USER }) {
    const userName = GET_USER?.name?.slice(0, 15) || false;

    return(
        <MainTemplate>
            <SEOHandler 
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
                        ? `Saludos, ${userName}!`
                        : `Hey, Bienvenido!`
                    }
                </h1>

                <p className="description-small mt-5">
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

const mapStateProps = (state, props) => {
    return {
        GET_USER: state.user
    }
}

export default connect(mapStateProps, null)(AboutMe);