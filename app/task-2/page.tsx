import { nohemi, outfitBody } from "@/fonts/page"
import ElasticCards from "@/components/ElasticCards"

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
    return (
        <div className={`min-h-screen w-full py-16 px-6 ${outfitBody.className}`}>
            <div className="max-w-7xl mx-auto">
                <p className="text-gray-800 font-medium text-[24px] pb-4">Your SkillShikshya Journey</p>
                <h1 className={`text-[32px] md:text-5xl font-extrabold ${nohemi.className}`}>
                    <span className="text-[#1DA077]">Step</span> In. <span className="text-[#1DA077]">Skill</span> Up. <span className="text-[#1DA077]">Stand</span> Out. 🚀
                </h1>
            </div>
            <div className="max-w-7xl mx-auto mt-[50px] flex gap-[28px]">
                {cards.map((card, index) => (
                    <ElasticCards
                        key={index}
                        {...card}
                    />
                ))}
            </div>
        </div>
    )
}

export default page