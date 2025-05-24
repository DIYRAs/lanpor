import { useEffect, useState } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";

function randomChar() {
    return characters[Math.floor(Math.random() * characters.length)];
}

export default function ScrambleText({ children, interval = 30, revealDelay = 100 }) {
    const text = String(children);
    const [displayedText, setDisplayedText] = useState("");
    const [revealedCount, setRevealedCount] = useState(0);
    const [hasFinished, setHasFinished] = useState(false); // ⬅️ Tambahan penting

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {

            if (hasFinished) return; // ⬅️ Stop kalau sudah selesai

            let scrambleInterval;
            let revealTimeout;

            const scramble = () => {
                let result = "";
                for (let i = 0; i < text.length; i++) {
                    if (i < revealedCount) {
                        result += text[i];
                    } else if (text[i] === " ") {
                        result += " ";
                    } else {
                        result += randomChar();
                    }
                }
                setDisplayedText(result);
            };

            scrambleInterval = setInterval(scramble, interval);
            revealTimeout = setInterval(() => {
                setRevealedCount((prev) => {
                    if (prev >= text.length) {
                        clearInterval(revealTimeout);
                        clearInterval(scrambleInterval);
                        setHasFinished(true); // ⬅️ Mark selesai
                        return prev;
                    }
                    return prev + 1;
                });
            }, revealDelay);

            return () => {
                clearInterval(scrambleInterval);
                clearInterval(revealTimeout);
            };
        }
    }, [isInView, text, interval, revealDelay, revealedCount, hasFinished]);

    return (
        <span ref={ref}>
            {displayedText}
        </span>
    );
}