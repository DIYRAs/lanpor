import Reveal from "./reveal"

export default function Slide_text({ children, duration = 0.6, direction = 'down', split = '', delay = 0.2, text = true }) {

    return (
        <>
            {children.split(split).map((char, index) => (
                <Reveal direction={direction} duration={duration} delay={0.2 * index + delay} key={index} text={text}>
                    {split == '' ? char === ' ' ? '\u00A0' : char : char + '\u00A0'}
                </Reveal>
            ))}
        </>
    )
}