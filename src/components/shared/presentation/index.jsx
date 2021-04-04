import PropTypes from 'prop-types';

function Presentation({ presentationTitle, presentationDescription, ignoreDescription, ignoreMarginTop }) {
    return(
        <section className={`${!ignoreMarginTop && 'mt-10'} w-full`}>
            <h1 className="title mb-1">
                { presentationTitle }
            </h1>

            <p className="description">
                { 
                ignoreDescription 
                ? <span>Desarrollador de <span className="text-blue-500">aplicaciones y sitios web</span></span>
                : presentationDescription
                }
            </p>
        </section>
    );
}

Presentation.propTypes = {
    presentationTitle: PropTypes.string.isRequired,
    presentationDescription: PropTypes.string.isRequired,
    ignoreDescription: PropTypes.bool,
    ignoreMarginTop: PropTypes.bool
};

export default Presentation;