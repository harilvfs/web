import Typed from "typed.js";
import React, { useEffect, useRef } from "react";

const TypeWriter = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Linux Developer.", "Photographer.", "R & D."],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 25,
            backDelay: 500,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return <span ref = { el } > < /span>;
};

export default TypeWriter;