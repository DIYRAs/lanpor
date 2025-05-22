import Reveal from "../animations/reveal"

function Card({ title, sub_title, desc, sub_desc, delay }) {
    return (
        <Reveal direction={'up'} delay={delay}>
            <div className="card bg-base-300 w-80 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{desc}</p>

                    <h2 className="card-title mt-7">{sub_title}</h2>
                    <p>{sub_desc}</p>

                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Check Now</button>
                    </div>
                </div>
            </div>
        </Reveal>
    );
}

export default function Cards() {
    const data = [
        {
            title: 'First',
            sub_title: 'Sub',
            desc: 'lorem lorem ipsum dimsum dimakan dicelup misum diminus dimsum dimakan dicelup misum diminus',
            sub_desc: 'lorem lorem ipsum dimsum dimsum'
        },
        {
            title: 'Second',
            sub_title: 'Sub',
            desc: 'lorem lorem ipsum dimsum dimakan dicelup misum diminus dimsum dimakan dicelup misum diminus',
            sub_desc: 'lorem lorem ipsum dimsum dimsum'
        },
        {
            title: 'Third',
            sub_title: 'Sub',
            desc: 'lorem lorem ipsum dimsum dimakan dicelup misum diminus dimsum dimakan dicelup misum diminus',
            sub_desc: 'lorem lorem ipsum dimsum dimsum'
        }
    ];

    return (
        <div className="py-16 w-full flex-center gap-10 text-white">
            {data.map((item, index) => (
                <Card
                    key={index}
                    {...item}
                    delay={0.2 * index}
                />
            ))}
        </div>
    );
}
