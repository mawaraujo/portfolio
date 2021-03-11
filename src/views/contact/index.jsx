import MainTemplate from '../../layouts/main.jsx';
import Presentation from '../../components/shared/presentation/index.jsx';
import BackPage from '../../components/shared/back-page/index.jsx';
import SEOHandler from '../../components/shared/seo-handler/index.jsx';

function Contact() {
  return(
    <MainTemplate>
      <SEOHandler 
        title="Contacto"
        description={{
            name: 'Contacto',
            content: 'Desarrollador de aplicaciones y sitios web'
        }}
      />

      <BackPage title="Portfolio" link="/portfolio" />

      <Presentation
        presentationTitle={`Contacto`}
        presentationDescription="A continuación dejaré información para que puedas comunicarte conmigo" />
    </MainTemplate>
  );
}

export default Contact;