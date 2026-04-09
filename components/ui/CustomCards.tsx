"use client"
import { nohemi, outfitHead } from "@/fonts/page"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"


type CustomCardProps = {
    title: string
    subTitle?: string
    description: string
    image: string
    bgColor: string
    imagePosition: string
    imageCoords: string
    hoverData?: {
        content: string;
        image: string;
        imageCoords: string;
        contentSize: string;
        contentPosition: string;
        bgImage: string;
    }[]
}

gsap.registerPlugin(useGSAP)

export default function CustomCards({
    title,
    subTitle,
    description,
    image,
    bgColor,
    imagePosition,
    imageCoords,
    hoverData
}: CustomCardProps) {
    const svgRef = useRef<HTMLDivElement>(null)
    const defaultRef = useRef<HTMLDivElement>(null)
    const hoverRef = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        gsap.from(svgRef.current, {
            y: -15,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        })
    }, [])

    const hasHoverContent = Boolean(hoverData && hoverData.length > 0);
    const [currentHoverIndex, setCurrentHoverIndex] = useState(0);
    const currentHover = hasHoverContent ? hoverData![currentHoverIndex] : null;

    const handleNextHover = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (hoverData) setCurrentHoverIndex((prev) => (prev + 1) % hoverData.length);
    };

    const handlePrevHover = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (hoverData) setCurrentHoverIndex((prev) => (prev - 1 + hoverData.length) % hoverData.length);
    };

    const handleMouseOver = () => {
        if (!hasHoverContent) return;

        gsap.to(defaultRef.current, {
            opacity: 0,
            x: -400,
            filter: "blur(5px)",
            duration: 1,
            ease: "power2.out",
            onStart: () => {
                if (defaultRef.current) defaultRef.current.style.pointerEvents = "none";
            }
        })

        gsap.to(hoverRef.current, {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power2.out",
            onStart: () => {
                if (hoverRef.current) hoverRef.current.style.pointerEvents = "auto";
            }
        })
    }

    const handleMouseLeave = () => {
        if (!hasHoverContent) return;

        gsap.to(defaultRef.current, {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                if (defaultRef.current) defaultRef.current.style.pointerEvents = "auto";
            }
        })

        gsap.to(hoverRef.current, {
            opacity: 0,
            x: 40,
            filter: "blur(5px)",
            duration: 0.5,
            ease: "power2.out",
            onStart: () => {
                if (hoverRef.current) hoverRef.current.style.pointerEvents = "none";
            }
        })
    }

    return (
        <div className="card relative" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <div className="absolute inset-0 z-0" ></div>
            <Card className="mainContent w-[592px] h-[341px] !overflow-visible relative z-10" style={{ backgroundColor: bgColor }} ref={defaultRef}>
                <div className={`absolute ${imageCoords} z-10`} ref={svgRef}>
                    <img src={image} alt={title} />
                </div>
                {imagePosition === "left" ? (
                    <div className="w-full pr-8 py-8 text-right text-white relative z-20 flex flex-col justify-center h-full gap-[32px]">
                        <div className="flex flex-col gap-[10px]">
                            <h2 className={`text-[32px] tracking-[0.05em] font-bold ${nohemi.className}`}>{title}</h2>
                            <p className={`text-[24px] font-medium ${outfitHead.className}`}>
                                {subTitle}
                            </p>
                        </div>
                        <p className={`text-[18px] pl-[206px] font-normal ${outfitHead.className}`}>
                            {description}
                        </p>
                    </div>
                ) : (
                    <div className="w-full pl-8 py-8  text-left text-white relative z-20 flex flex-col justify-center h-full gap-[32px]">
                        <div className="flex flex-col gap-[10px]">
                            <h2 className={`text-[32px] font-bold ${nohemi.className}`}>{title}</h2>
                            <p className={`text-[24px] font-medium ${outfitHead.className}`}>
                                {subTitle}
                            </p>
                        </div>
                        <p className={`text-[18px] pr-[206px] font-normal ${outfitHead.className}`}>
                            {description}
                        </p>
                    </div>
                )}
            </Card>
            {/* hover content */}
            {hasHoverContent && currentHover && (
                <Card className="hoverContent border-none opacity-0 w-[592px] h-[341px] overflow-hidden absolute top-0 left-0" style={{ backgroundImage: `url(${currentHover.bgImage})` }} ref={hoverRef}>
                    <div className={`relative ${currentHover.imageCoords} z-10`}>
                        <img src={currentHover.image} alt={title} />
                    </div>
                    <h2 className={`text-[20px] text-white ${currentHover.contentSize} relative ${currentHover.contentPosition} font-bold ${nohemi.className}`}>{currentHover.content}</h2>
                    <div className="absolute top-1/2 -translate-y-1/2 z-30 p-3 rounded-full shadow-lg flex items-center justify-center">
                        <Button variant="default" size="icon" className="rounded-full w-10 h-10" onClick={handlePrevHover}>
                            <img src="/arrow-left.svg" alt="left arrow" />
                        </Button>
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 right-0 z-30 bg-white p-3 rounded-full shadow-lg flex items-center justify-center">
                        <Button variant="default" size="icon" className="rounded-full w-10 h-10" onClick={handleNextHover}>
                            <img src="/arrow-right.svg" alt="right arrow" />
                        </Button>
                    </div>
                </Card>
            )}
        </div>
    )
}