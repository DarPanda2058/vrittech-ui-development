import { nohemi, outfitBody } from "../fonts/page"
import CustomCards from "@/components/ui/CustomCards"

const cards = [
    {
        title: "Start with Clarity",
        subTitle: "Step into a better learning path.",
        description: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
        image: "/Clarity.svg",
        bgColor: "#F45b5b",
        imagePosition: "left",
        imageCoords: "-left-20 -top-[-8px]"
    },
    {
        title: "Learn by Doing",
        subTitle: "Practical skills, real projects.",
        description: "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
        image: "/Doing.svg",
        bgColor: "#5492a0",
        imagePosition: "right",
        imageCoords: "-left-[-380px] -top-[-14px]"
    },
    {
        title: "Get Mentored & Supported",
        subTitle: "You're not learning alone.",
        description: "Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.",
        image: "/Mentored.svg",
        bgColor: "#6c64a8",
        imagePosition: "left",
        imageCoords: "-left-[48.92px] -top-[-106px]"
    },
    {
        title: "Achieve & Showcase",
        subTitle: "Build your portfolio, get job-ready.",
        description: "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
        image: "/Achieve.svg",
        bgColor: "#a88964",
        imagePosition: "right",
        imageCoords: "-right-[20px] -top-[-60px] rotate-[-6.05deg]"
    }
]

const page = () => {
    return (
        <div className={`min-h-screen w-full bg-[#FAFAFC] flex flex-col items-center py-16 px-6 ${outfitBody.className}`}>
            <div className="max-w-7xl">
                <div className="mb-16 space-y-2">
                    <p className="text-gray-800 font-medium text-[24px] pb-4">Your SkillShikshya Journey</p>
                    <h1 className={`text-[32px] md:text-5xl font-extrabold ${nohemi.className}`}>
                        <span className="text-[#1DA077]">Step</span> In. <span className="text-[#1DA077]">Skill</span> Up. <span className="text-[#1DA077]">Stand</span> Out. 🚀
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[32px] gap-y-[40px]">
                    {cards.map((card, index) => (
                        <CustomCards
                            key={index}
                            {...card}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page