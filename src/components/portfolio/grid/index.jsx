function Grid({ data }) {
    return(
        <section className="grid gap-y-4 mt-12">
            {
                data && data.map((el, index) => (
                    <div
                        className="grid-card shadow-xl w-full overflow-hidden grid md:grid-cols-2 grid-cols-1" 
                        key={index + '__grid'}>

                        <div className="left-top">
                            <img 
                                src={el.image} 
                                alt={el.name}
                                className="card-max-height-image bg-white"
                                width="100" 
                                height="100" />
                        </div>

                        <div className="right-bottom flex justify-center bg-dynamic flex-col h-full md:px-10 px-5 py-10">
                            <h2 className="self-title xl:text-5xl lg:text-5xl text-4xl">{el.name}</h2>
                            <p className="text-gray-400 text-md w-auto mb-4">{el.work}</p>

                            { 
                                el.technologies && 
                                <div className="tags flex flex-wrap">{ 
                                    el.technologies.map((tech, index) => (
                                        <div 
                                            class="inline mt-2 mr-2 font-medium px-4 rounded-lg text-white bg-gray-900" 
                                            key={index + '__technology'}>
                                            <small className="font-bold">{ tech }</small>
                                        </div>
                                    ))
                                }</div>
                            }

                            <p className="description-small mt-4">{el.description}</p>

                            <div className="buttons text-right">
                                <a 
                                    without rel="noreferrer"
                                    target="_blank" 
                                    href={el.url}>
                                        
                                    <button 
                                        className="inline px-10 rounded-lg text-lg py-1 mt-5 font-bold text-blue-500 button border-2 border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none">
                                        Ir al sitio
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    );
}

export default Grid;