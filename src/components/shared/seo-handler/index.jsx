import { Helmet, HelmetProvider } from 'react-helmet-async';

function SEOHandler({ title, description }) {
  return (
    <HelmetProvider>
      <Helmet>
        { title && <title>{title} | Mauro Araujo</title> }
        { description && <meta name={description.name} content={description.content} /> }
      </Helmet>
    </HelmetProvider>
  )
}

export default SEOHandler;