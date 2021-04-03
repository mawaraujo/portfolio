import { Helmet, HelmetProvider } from 'react-helmet-async';

function SEOComponent({ title, description }) {
  return (
    <HelmetProvider>
      <Helmet>
        { title && <title>{title} | Mauro Araujo</title> }
        { description && <meta name={description.name} content={description.content} /> }
      </Helmet>
    </HelmetProvider>
  )
}

export default SEOComponent;