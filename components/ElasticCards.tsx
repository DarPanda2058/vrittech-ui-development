import { Card } from "./ui/card";
import { nohemi, outfitHead, outfitBody } from "@/fonts/page";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type ElasticCardsProps = {
    number: string,
    title: string,
    desc: string
}

gsap.registerPlugin(useGSAP)

export default function ElasticCards({
    number,
    title,
    desc
}: ElasticCardsProps) {
    return (
        <Card className={` w-[280px] h-[461px] bg-[#F9EBEC] rounded-[32px]`}>
            <div className="grid grid-rows-2 h-[510px] mt-[40px] justify-center items-center place-items-center gap-[80px]">
                <div className="rotate-[-90deg] w-[218px] h-[138px] flex flex-col gap-[12px] justify-center">
                    <h1 className={`text-[#c33241] text-[32px] font-bold ${outfitHead.className}`}>{title}</h1>
                    <p className={`text-[#c33241] text-[18px] font-normal ${outfitBody.className}`}>{desc}</p>
                </div>
                <div className="relative inline-block">
                    <h1 className={`text-[#c33241] text-[150px] font-bold leading-none ${nohemi.className}`}>
                        {number}
                    </h1>
                    <span className={`absolute -top-10 -right-4 text-[#c33241] text-[64px] font-bold ${nohemi.className}`}>
                        +
                    </span>
                </div>
            </div>
        </Card>
    )
}