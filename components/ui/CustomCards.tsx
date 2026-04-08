"use client"
import { nohemi, outfitHead } from "@/app/fonts/page"
import { Card } from "@/components/ui/card"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

type CustomCardProps = {
    title: string
    subTitle?: string
    description: string
    image: string
    bgColor: string
    imagePosition: string
    imageCoords: string
}

gsap.registerPlugin(useGSAP)

export default function CustomCards({
    title,
    subTitle,
    description,
    image,
    bgColor,
    imagePosition,
    imageCoords
}: CustomCardProps) {
    const svgRef = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        gsap.from(svgRef.current, {
            y: -15,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        })
    }, [])
    return (
        <Card className="w-[592px] h-[341px] !overflow-visible relative" style={{ backgroundColor: bgColor }}>
            <div className={`absolute ${imageCoords} z-10`} ref={svgRef}>
                <img src={image} alt={title} />
            </div>
            {imagePosition === "left" ? (
                <div className="w-full pr-8 py-8 text-right text-white relative z-20 flex flex-col justify-center h-full gap-[32px]">
                    <div className="flex flex-col gap-[10px]">
                        <h2 className={`text-[32px] font-bold ${nohemi.className}`}>{title}</h2>
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
    )
}