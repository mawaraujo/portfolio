function Grid({ data }) {
    return(
        <section className="grid gap-y-4 mt-12">
            {
                data && data.map((el, index) => (
                    <div
                        className="grid-card shadow-xl w-full overflow-hidden flex md:flex-row flex-col" 
                        key={index + '__grid'}>

                        <div className="left-top flex-1">
                            <img 
                                src={el.image} 
                                alt={el.name}
                                className="card-max-height-image bg-white"
                                width="100" 
                                height="100" />
                        </div>

                        <div className="right-bottom flex justify-center bg-dynamic flex-col h-full px-10 py-10 flex-1">
                            <h2 className="title-card">{el.name}</h2>
                            <p className="text-gray-400 text-sm w-auto">{el.work}</p>

                            <p className="description-small mt-4">{el.description}</p>

                            <div className="buttons">
                                <button className="inline px-10 rounded-lg text-lg py-1 mt-5 font-bold text-blue-500 button border-2 border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none">
                                    <a 
                                        without rel="noreferrer"
                                        target="_blank" 
                                        href={el.url}>
                                        Ir al sitio
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    );
}

export default Grid;