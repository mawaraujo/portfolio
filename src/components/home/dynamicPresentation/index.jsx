import { useEffect, createRef } from 'react';
import { connect } from 'react-redux';
import { SET_USER } from '../../../redux/actions/user';

function Presentation({ SET_USER, setSubmit }) {
    useEffect(() => document.getElementById('inputField').focus(), []);
    const nameRef = createRef();

    function handleSubmit(event) {
        event.preventDefault();
        SET_USER({ name: nameRef.current.value });
        return setSubmit(true);
    }

    return(
        <section className="w-full mt-10">
            <div className="flex flex-col">
                <h1 className="title mb-4">
                    Hola
                </h1>

                <p className="description mb-5">
                    Me encantaría que me indicaras tu nombre
                </p>

                <form 
                    action="#" 
                    onKeyPress={e => e.key === 'Enter' && handleSubmit(e)}>

                    <input 
                        id="inputField"
                        type="text"
                        className="block rounded-lg max-w-md py-4 bg-transparent border description-small focus:outline-none focus:border-gray-600 border-gray-400 px-2" 
                        placeholder="¿Como te llamas?"
                        ref={nameRef} />
                </form>
            </div>
        </section>
    );
}

export default connect(null, { SET_USER})(Presentation);