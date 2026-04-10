"use client"
import { Card } from "./ui/card";
import { nohemi, outfitHead, outfitBody } from "@/fonts/page";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type ElasticCardsProps = {
    number: string,
    title: string,
    desc: string,
    isActive: boolean,
    onClick: () => void
}

gsap.registerPlugin(useGSAP)

export default function ElasticCards({
    number,
    title,
    desc,
    isActive,
    onClick
}: ElasticCardsProps) {

    const cardRef = useRef<HTMLDivElement>(null)
    const descRef = useRef<HTMLDivElement>(null)
    const numberRef = useRef<HTMLDivElement>(null)
    const svgRef = useRef<HTMLDivElement>(null)


    useGSAP(() => {
        if (!cardRef.current) return

        if (isActive) {
            const tl = gsap.timeline()

            tl.to(cardRef.current, {
                width: 592,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)",
                // backgroundColor: "#c33241",
            })

                .to(descRef.current, {
                    // color: "#f9ebec",
                    rotate: 0,
                    x: 110,
                    y: 230,
                    width: 278,
                    duration: 0.6,
                    ease: "elastic.out(1, 3)",

                }, "<")

                .to(numberRef.current, {
                    // color: "#f9ebec",
                    x: -150,
                    duration: 1,
                    ease: "elastic.out(1, 0.5)",

                }, "<")
        }
    }, [isActive])

    return (
        <Card ref={cardRef} onClick={onClick} className={`  w-[280px] h-[461px] bg-[#F9EBEC] rounded-[32px]`}>

            <div className="grid grid-rows-2 h-[510px] mt-[40px] justify-center items-center place-items-center gap-[80px]">

                <div ref={descRef} className="rotate-[-90deg] w-[218px] h-[138px]  justify-center">
                    <h1 className={`text-[#c33241] text-[32px] font-bold ${outfitHead.className}`}>{title}</h1>
                    <p className={`text-[#c33241] text-[18px] font-normal ${outfitBody.className}`}>{desc}</p>
                </div>
                <div ref={numberRef} className="relative inline-block">
                    <h1 className={`text-[#c33241] text-[150px] font-bold leading-none ${nohemi.className}`}>
                        {number}
                    </h1>
                    <p className={`absolute -top-10 -right-4 text-[#c33241] text-[64px] font-bold transition-all duration-300 group-hover:translate-y-0.5 ${nohemi.className}`}>
                        +
                    </p>
                </div>
            </div>
        </Card>
    )
}