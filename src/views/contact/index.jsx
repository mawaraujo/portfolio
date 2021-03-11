import MainTemplate from '../../layouts/main.jsx';
import Presentation from '../../components/shared/presentation/index.jsx';
import BackPage from '../../components/shared/back-page/index.jsx';

function Contact() {
  return(
    <MainTemplate>
      <BackPage title="Portfolio" link="/portfolio" />

      <Presentation
        presentationTitle={`Contacto`}
        presentationDescription="A continuación dejaré información para que puedas comunicarte conmigo" />
    </MainTemplate>
  );
}

export default Contact;