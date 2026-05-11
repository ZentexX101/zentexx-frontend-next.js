"use client";

import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import {
    bannerRowsConfig,
    buildRows,
    logosData,
} from "../../Constants/bannerData.js";
import Image from "next/image";

const Hero = () => {
    const logos = buildRows(logosData, bannerRowsConfig.desktop);
    const splitIndex = Math.ceil(logosData.length / 2);
    const mobileRowOne = logosData.slice(0, splitIndex);
    const mobileRowTwo = logosData.slice(splitIndex);

    const [isLarge, setIsLarge] = useState(false);

    const words = ["Ai Products", "Ai Agent", "Ai Agentic", "Team Agentic"];
    const [typedText, setTypedText] = useState("");
    const wiRef = useRef(0);
    const ciRef = useRef(0);
    const deletingRef = useRef(false);

    useEffect(() => {
        const typeSpeed = 80;
        const deleteSpeed = 45;
        const pauseAfterType = 1400;
        const pauseAfterDelete = 300;

        let timer;

        const tick = () => {
            const word = words[wiRef.current];

            if (!deletingRef.current) {
                ciRef.current += 1;
                setTypedText(word.slice(0, ciRef.current));

                if (ciRef.current === word.length) {
                    deletingRef.current = true;
                    timer = setTimeout(tick, pauseAfterType);
                    return;
                }

                timer = setTimeout(tick, typeSpeed);
            } else {
                ciRef.current -= 1;
                setTypedText(word.slice(0, ciRef.current));

                if (ciRef.current === 0) {
                    deletingRef.current = false;
                    wiRef.current = (wiRef.current + 1) % words.length;
                    timer = setTimeout(tick, pauseAfterDelete);
                    return;
                }

                timer = setTimeout(tick, deleteSpeed);
            }
        };

        timer = setTimeout(tick, 500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsLarge(window.innerWidth > 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            style={{
                backgroundImage: isLarge
                    ? "url(/images/homepage/banner.png)"
                    : "url(/images/homepage/bannerMubile.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="lg:pb-19 pb-10.2 lg:px-0 px-4"
        >
            <div className="container max-w-7xl mx-auto items-center lg:pt-20 pt-13.5 text-center">
                <div className="justify-center items-center flex flex-col">
                    <button className="bg-input-from px-4 py-2 rounded-lg font-vietnam text-design-desc mb-4 lg:mb-5 text-base flex items-center gap-2">
                        Helping Teams
                        <span className="text-meet-btn inline-flex items-center">
                            {typedText}
                            <span
                                style={{
                                    display: "inline-block",
                                    width: "2px",
                                    height: "1em",
                                    backgroundColor: "currentColor",
                                    marginLeft: "2px",
                                    verticalAlign: "middle",
                                    animation: "blink 0.7s step-end infinite",
                                }}
                            />
                        </span>
                    </button>

                    <style>{`
                        @keyframes blink {
                            0%, 100% { opacity: 1; }
                            50% { opacity: 0; }
                        }
                    `}</style>

                    <h1 className="lg:leading-18 font-switzer font-medium leading-9.5 text-[35px] text-mission lg:text-[64px]">
                        Build & Launch{" "}
                        <span className="font-raleway italic font-normal">
                            AI Products
                        </span>
                        <br className="hidden lg:block" /> in Weeks, Not Months
                    </h1>

                    <p className="mt-4 font-vietnam text-design-desc text-sm lg:text-lg">
                        We design, build, and launch production-ready AI systems for
                        startups and mid- <br className="hidden lg:block" />
                        market teams - fast, scalable, and built for real ROI.
                    </p>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4 mt-8">
                        <button
                            type="button"
                            className="flex items-center book-call justify-center gap-2 bg-bookCall text-secondary lg:px-8 px-6 py-3.5 rounded-sm font-semibold lg:text-base text-sm bookCall-shadow"
                        >
                            <Image
                                src="/images/homepage/gogglemeet.png"
                                alt="Meet"
                                width={20}
                                height={20}
                            />
                            Book a Free Strategy Call
                        </button>

                        <button
                            type="button"
                            className="bg-secondary px-18 lg:px-5 py-3.5 border border-primary rounded-sm font-medium lg:text-base text-sm text-mission font-vietnam ourWork-shadow"
                        >
                            See Our Work
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-center lg:mt-7.25 mt-4 gap-2 mb-18 lg:mb-16">
                    <Image
                        src="/images/homepage/goggle.png"
                        alt="Google"
                        width={24}
                        height={24}
                    />

                    <p className="text-primary text-[12px] lg:text-lg font-vietnam">
                        Rated 4.9/5 by Startups & SaaS Teams
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <div>
                        <h2 className="text-mission lg:text-[40px] lg:leading-12 text-[20px] leading-6 font-switzer font-medium">
                            4 wks
                        </h2>
                        <p className="text-design-desc lg:leading-5.5 leading-5 lg:text-base mt-2 font-vietnam text-sm">
                            Avg AI MVP launch
                        </p>
                    </div>

                    <div>
                        <h2 className="text-mission lg:text-[40px] lg:leading-12 text-[20px] leading-6 font-switzer font-medium">
                            11+
                        </h2>
                        <p className="text-design-desc lg:leading-5.5 leading-5 lg:text-base mt-2 font-vietnam text-sm">
                            AI systems live
                        </p>
                    </div>

                    <div>
                        <h2 className="text-mission lg:text-[40px] lg:leading-12 text-[20px] leading-6 font-switzer font-medium">
                            1M+
                        </h2>
                        <p className="text-design-desc lg:leading-5.5 leading-5 lg:text-base mt-2 font-vietnam text-sm">
                            Users Impacted
                        </p>
                    </div>

                    <div>
                        <h2 className="text-mission lg:text-[40px] lg:leading-12 text-[20px] leading-6 font-switzer font-medium">
                            3+
                        </h2>
                        <p className="text-design-desc lg:leading-5.5 leading-5 lg:text-base mt-2 font-vietnam text-sm">
                            Years in Business
                        </p>
                    </div>
                </div>

                <div className="lg:mt-13.5 mt-10 mx-auto">
                    <div>
                        <p className="lg:text-lg text-design-desc font-vietnam text-[13px] text-center mb-6">
                            Trusted by Innovative Startups &
                            <br className="block lg:hidden" /> Growing Businesses
                        </p>

                        <div className="hidden lg:block">
                            {logos.map((row, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-wrap justify-center gap-10"
                                >
                                    {row.map(([key, def, color]) => (
                                        <div
                                            key={key}
                                            className="relative w-27.25 h-8 flex items-center justify-center overflow-hidden group cursor-pointer"
                                        >
                                            <Image
                                                src={def}
                                                alt={key}
                                                width={109}
                                                height={32}
                                                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                                            />

                                            <Image
                                                src={color}
                                                alt={key}
                                                width={109}
                                                height={32}
                                                className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="lg:hidden">
                            <Marquee speed={40} gradient={false} pauseOnHover>
                                {[...mobileRowOne, ...mobileRowTwo].map(
                                    ([key, def, color]) => (
                                        <div
                                            key={key}
                                            className="relative w-27.25 h-8 mx-6 flex items-center justify-center overflow-hidden group cursor-pointer"
                                        >
                                            <Image
                                                src={def}
                                                alt={key}
                                                width={109}
                                                height={32}
                                                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                                            />

                                            <Image
                                                src={color}
                                                alt={key}
                                                width={109}
                                                height={32}
                                                className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                            />
                                        </div>
                                    )
                                )}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;