import { Link } from 'react-router-dom';

function NextPage({ link, title }) {
    return(
        <Link to={link}>
            <button className="primary-button flex mt-10">
                {title}

                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="ml-3 sm:w-8 w-6 inline my-auto" 
                    fill="none"
                    viewBox="0 0 24 24" 
                    stroke="currentColor">

                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>       
            </button>
        </Link>
    );
}

export default NextPage;