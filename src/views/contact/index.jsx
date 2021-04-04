import MainTemplate from '../../layouts/main.jsx';
import SEOComponent from '../../components/shared/seo-component/index.jsx';
import Presentation from '../../components/shared/presentation/index.jsx';
import BackPage from '../../components/shared/back-page/index.jsx';

// Assets
import Illustration from '../../assets/static/home_contact.svg';

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
          <svg xmlns="http://www.w3.org/2000/svg" className="bounce title-card h-20 w-20 mx-auto mb-2 hover:text-white rounded-full px-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          E-mail
        </a>

        <a target="__blank" className="description-link mb-10 mx-12 text-center anim-bounce-hover" href="https://linkedin.com/in/mawaraujo">
        <svg xmlns="http://www.w3.org/2000/svg" className="bounce title-card h-20 w-20 mx-auto mb-2 hover:text-white rounded-full px-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
          Linkedin
        </a>

        <a target="__blank" className="description-link mb-10 text-center anim-bounce-hover" href="https://github.com/mawaraujo">
          <svg xmlns="http://www.w3.org/2000/svg" className="bounce title-card h-20 w-20 mx-auto mb-2 hover:text-white rounded-full px-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Github
        </a>
      </section>
    </MainTemplate>
  );
}

export default Contact;