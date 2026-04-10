"use client"
import { nohemi, outfitBody } from "@/fonts/page"
import ElasticCards from "@/components/ElasticCards"
import { useState } from "react"

const cards = [
    {
        number: "23",
        title: "All Courses",
        desc: "courses you're powering through right now."
    },
    {
        number: "05",
        title: "Upcoming Courses",
        desc: "exciting new courses waiting to boost your skills."
    },
    {
        number: "10",
        title: "Ongoing Courses",
        desc: "currently happening—don’t miss out on the action!"
    },
]

const page = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    return (
        <div className={`min-h-screen w-full py-16 px-6 ${outfitBody.className}`}>
            <div className="max-w-7xl mx-auto">
                <p className="text-gray-800 font-medium text-[24px] pb-4">Explore our classes and master trending skills!</p>
                <h1 className={`text-[32px] md:text-5xl font-extrabold ${nohemi.className}`}>
                    Dive Into <span className="text-[#1DA077]">What’s Hot Right Now! </span>🔥
                </h1>
            </div>
            <div className="max-w-7xl mx-auto mt-[50px] flex gap-[28px]">
                {cards.map((card, index) => (
                    <div className="relative group">
                        {/* Floating pointer */}
                        <img
                            src="/click.svg"
                            alt="pointer"
                            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                        />
                        <ElasticCards
                            key={index}
                            {...card}
                            isActive={activeIndex === index}
                            onClick={() => setActiveIndex(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page