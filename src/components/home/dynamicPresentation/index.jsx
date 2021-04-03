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
                <h1 className="title mb-1">
                    Hola
                </h1>

                <p className="description mb-8">
                    Me encantaría que me indicaras tu nombre
                </p>

                <form 
                    action="#" 
                    onKeyPress={e => e.key === 'Enter' && handleSubmit(e)}>

                    <div className="form-field">
                        <input 
                            id="inputField"
                            type="text"
                            className="block rounded-lg max-w-lg py-4 bg-transparent border description-small focus:outline-none focus:border-gray-600 border-gray-400 px-5" 
                            placeholder="¿Como te llamas?"
                            ref={nameRef} />

                        <small className="font-bold text-gray-400">
                            O puedes omitirlo dando clic a "continuar"
                        </small>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default connect(null, { SET_USER})(Presentation);