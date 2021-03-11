import { useEffect, useState } from 'react';

function Presentation() {
    const [name, setName] = useState(window.localStorage.mawsitename);
    useEffect(() => window.localStorage.mawsitename = name, [name]);

    return(
        <section className="w-full mt-10">
            <div className="flex flex-col">
                <h1 className="title mb-4">
                    Hola,
                </h1>

                <p className="description mb-5">
                    Me encantaría que me indicaras tu nombre
                </p>

                <input 
                    type="text" 
                    className="block rounded-lg max-w-md py-4 bg-transparent border description-small focus:outline-none focus:border-gray-600 border-gray-400 px-2" 
                    placeholder="Escribe aquí"
                    onChange={(e) => setName(e.target.value)} />
            </div>
        </section>
    );
}

export default Presentation;