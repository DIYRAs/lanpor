import Reveal from "../animations/reveal"
import Slide_text from "../animations/slide_text"

export default function Intro() {

    return (
        <>
            <div id="intro" className="hero min-h-screen py-8 text-white">
                <div className="hero-content flex-col lg:flex-row-reverse gap-18">
                    <Reveal direction='down'>
                        <img
                            src="porse_front.png"
                            className="w-md h-auto"
                        />
                    </Reveal>
                    <div className="max-w-[500px]">
                        <h1 className="text-5xl font-bold">
                            <Slide_text split=" " direction="up">
                                Box Office News!
                            </Slide_text>
                        </h1>
                        <p className="text-justify py-6">
                            <Slide_text split=" " direction="left">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </Slide_text>
                        </p>

                        <Reveal direction={'up'}>
                            <button className="btn btn-primary">Get Started</button>
                        </Reveal>
                    </div>
                </div>
            </div>
        </>
    )
}
