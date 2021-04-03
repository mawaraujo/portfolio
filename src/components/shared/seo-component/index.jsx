import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';

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

Presentation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default SEOComponent;