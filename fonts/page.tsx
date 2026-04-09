import { Outfit } from "next/font/google"
import localfont from "next/font/local"

export const outfitHead = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    weight: "500",
    display: "swap",
})

export const outfitBody = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    weight: "400",
    display: "swap",
})

export const nohemi = localfont({
    src: "./nohemi.woff",
    variable: "--font-nohemi",
    weight: "700",

    display: "swap",
})

