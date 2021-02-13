import PropTypes from 'prop-types';

function Presentation(props) {
    const { 
        presentationTitle, 
        presentationDescription 
    } = props;

    return(
        <section className="w-full">
            <h1 className="title mb-1">
                { presentationTitle }
            </h1>

            <p className="description">
                { presentationDescription }
            </p>
        </section>
    );
}

Presentation.propTypes = {
    presentationTitle: PropTypes.string.isRequired,
    presentationDescription: PropTypes.string.isRequired
};

export default Presentation;