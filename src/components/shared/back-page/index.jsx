import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BackPage({ link, title }) {
    return(
        <Link style={{display: 'contents'}} to={link}>
            <button className="primary-button flex mt-10">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="mr-3 sm:w-8 w-6 inline my-auto" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>

                {title}
            </button>
        </Link>
    );
}

BackPage.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default BackPage; 