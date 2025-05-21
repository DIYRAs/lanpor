export default function Specifi() {

    const specs = ({ numbers, numbers_sub, desc }) => (
        <div className="flex-col-start border-l pl-2">
            <p><span className="text-4xl">{numbers}</span> {numbers_sub}</p>
            <p className="-mt-2">{desc}</p>
        </div>
    )

    return (
        <>
            <div className="flex w-full min-h-screen flex-col lg:flex-row text-white">
                <div className="relative h-[400px] sm:h-auto sm:flex-1/6 grow bg-[url(/road.jpg)]
                        bg-center bg-cover bg-base-300 flex-col-center items-stretch">
                    <img src="/stephan-louis.png"
                        className="absolute bottom-16 right-4 md:bottom-24 md:right-14 h-auto w-72 md:w-lg brightness-[65%]" />
                </div>

                <div className="bg-base-300 h-[400px] sm:h-auto sm:flex-1 grow flex-col-center gap-16 md:gap-36 items-stretch py-8">
                    <p className="text-2xl md:text-4xl max-w-[400px] font-semibold tracking-widest text-center">Performance And Specifications</p>

                    <div className="w-85 h-max flex-center gap-x-26 gap-y-5">
                        {specs({ numbers: '00', numbers_sub: 'xxx', desc: 'xxx xx' })}
                        {specs({ numbers: '00', numbers_sub: 'xxx', desc: 'xxx xx' })}
                        {specs({ numbers: '00', numbers_sub: 'xxx', desc: 'xxx xx' })}
                        {specs({ numbers: '00', numbers_sub: 'xxx', desc: 'xxx xx' })}
                    </div>
                </div>
            </div>
        </>
    )
}