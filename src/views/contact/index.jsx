import MainTemplate from '../../layouts/main.jsx';
import SEOComponent from '../../components/shared/seo-component/index.jsx';
import Presentation from '../../components/shared/presentation/index.jsx';
import BackPage from '../../components/shared/back-page/index.jsx';

// Assets
import Illustration from '../../assets/static/home_contact.svg';
import LinkedinIcon from '../../assets/static/linkedin.svg';
import EmailIcon from '../../assets/static/gmail.svg';
import GithubIcon from '../../assets/static/github.svg';

function Contact() {
  return(
    <MainTemplate>
      <SEOComponent 
        title="Contacto"
        description={{
            name: 'Contacto',
            content: 'Desarrollador de aplicaciones y sitios web'
        }}
      />

      <section className="illustration-wrapper flex justify-center my-0 py-10 rounded-xl">
        <img 
          loading="lazy" 
          src={Illustration}
          className="expand-anim my-0" 
          alt="Portfolio Contact Illustration"/>
      </section>

      <BackPage title="Portfolio" link="/portfolio" />

      <Presentation
        presentationTitle={`Contacto`}
        presentationDescription="A continuación dejaré información para que puedas comunicarte conmigo" />
    
      <section className="links-wrapper flex justify-center mt-20 mb-20">
        <a target="__blank" className="description-link mb-10 text-center anim-bounce-hover" href="mailto:e.mauroar@gmail.com">
          <img 
            loading="lazy" 
            src={EmailIcon}
            width="70px"
            className="my-0"
            alt="Portfolio Email Illustration"/>
        </a>

        <a target="__blank" className="description-link mb-10 mx-12 text-center anim-bounce-hover" href="https://linkedin.com/in/mawaraujo">
          <img 
            loading="lazy" 
            src={LinkedinIcon}
            width="70px"
            className="my-0 max-w-md" 
            alt="Portfolio Linkedin Illustration"/>
        </a>

        <a target="__blank" className="description-link mb-10 text-center anim-bounce-hover" href="https://github.com/mawaraujo">
          <img 
            loading="lazy" 
            src={GithubIcon}
            width="70px"
            className="my-0 invert-icon" 
            alt="Portfolio Github Illustration"/>
        </a>
      </section>
    </MainTemplate>
  );
}

export default Contact;