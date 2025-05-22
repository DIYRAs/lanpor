import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Reveal({ children, direction, duration = 0.6, delay = 0.2, text = false }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const getInitial = () => {
        switch (direction) {
            case 'up':
                return { opacity: 0, y: 100 }
            case 'down':
                return { opacity: 0, y: -100 }
            case 'left':
                return { opacity: 0, x: 100 }
            case 'right':
                return { opacity: 0, x: -100 }
            default:
                return { opacity: 0 }
        }
    }

    return (
        <>
            {text ? (
                <>
                    <motion.span
                        className='inline-block'
                        ref={ref}
                        initial={getInitial()}
                        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                        transition={{ duration: duration, ease: 'easeInOut', delay }} >
                        {children}
                    </motion.span>
                </>
            ) : (
                <>
                    <motion.div
                        className='inline-block'
                        ref={ref}
                        initial={getInitial()}
                        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                        transition={{ duration: duration, ease: 'easeInOut', delay }} >
                        {children}
                    </motion.div>
                </>
            )}
        </>
    )
}