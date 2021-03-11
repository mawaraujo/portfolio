import { Helmet } from 'react-helmet';

function SEOHandler({ title, description }) {
  return (
    <Helmet>
      { title && <title>{title} | Mauro Araujo</title> }
      { description && <meta name={description.name} content={description.content} /> }
    </Helmet>
  )
}

export default SEOHandler;