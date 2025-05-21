import { useState, useRef, useEffect } from "react"

export default function Shows() {
    const imgRef = useRef()
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const img_array = ['porse_side.png', 'porse_side2.png']
        if (imgRef.current) {
            imgRef.current.src = img_array[index]
        }
    }, [index])

    const switch_img = () => {
        const img_array = ['porse_side.png', 'porse_side2.png']
        setIndex(prev => (prev >= img_array.length - 1 ? 0 : prev + 1))
    }

    return (
        <>
            <div className="relative flex-center h-96 sm:h-screen">
                <img src="side_road.jpg"
                    className="object-cover sm:object-fill h-96 sm:h-full w-screen" />

                <img src="porse_side.png"
                    className="absolute z-20 bottom-12 sm:bottom-10 h-auto w-80 sm:w-6xl"
                    ref={imgRef}
                    onClick={switch_img} />

                <div className="absolute bottom-3 sm:bottom-6 h-10/12 w-10/12
                            flex flex-col items-center justify-between text-center">
                    <p className="text-4xl font-black tracking-widest text-shadow-lg text-black">Inggih E-Performance</p>

                    <p className=" line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        ac justo vitae urna malesuada tempus. Cras non pulvinar risus.
                        Sed vitae scelerisque nisl. Integer commodo justo nec est blandit,
                        vel egestas mi lobortis. Fusce tincidunt finibus purus, vitae interdum
                        odio aliquet sit amet. Suspendisse potenti.
                    </p>
                </div>
            </div>
        </>
    )
}