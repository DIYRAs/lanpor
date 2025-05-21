export default function Carousel() {

    const carousel = () => {
        const img_array = ['porse_side.png', 'porse_side2.png', 'porse_front.png', 'porse.png', 'stephan-louis.png']

        return (
            <div className="carousel carousel-center rounded-box p-20 gap-10">
                {img_array.map((img, index) => (
                    <div className="carousel-item flex-center" key={index}>
                        <img src={img}
                        className="w-[300px] h-[150px] sm:w-[1000px] sm:h-[300px] object-contain object-center border-x" />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <>
            {carousel()}
        </>
    )

}