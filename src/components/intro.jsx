export default function Intro() {

    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-18">
                    <img
                        src="porse_front.png"
                        className="w-md h-auto"
                    />
                    <div className="max-w-[500px]">
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="text-justify py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}
