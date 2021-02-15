import PropTypes from 'prop-types';

function Presentation(props) {
    const { presentationTitle, presentationDescription, ignoreDescription } = props;

    return(
        <section className="w-full mt-10">
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
    ignoreDescription: PropTypes.bool
};

export default Presentation;