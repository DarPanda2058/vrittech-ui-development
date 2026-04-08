import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { nohemi, outfitHead, outfitBody } from "./fonts/page"
import { ArrowRight, LayoutDashboard, Settings } from "lucide-react"

const page = () => {
  return (
    <div className={`min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center p-6 md:p-12`}>
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h1 className={`text-4xl md:text-5xl font-bold tracking-tight ${nohemi.className}`}>
            Select a Task
          </h1>
          <p className={`text-lg max-w-xl mx-auto ${outfitBody.className}`}>
            Choose one of the tasks below to proceed to its respective page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          <Link href="/task-1" className="group">
            <Card className="border-gray-200 bg-custom-purple group-hover:bg-custom-blue hover:border-gray-300 hover:shadow-xl hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 ease-out">
              <CardHeader className="pb-4">
                <CardTitle className={`text-2xl text-white ${outfitHead.className}`}>Task 1</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`flex items-center text-sm font-medium text-white ${outfitHead.className}`}>
                  Go to Task 1
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/task-2" className="group">
            <Card className="border-gray-200 bg-custom-light-red hover:bg-custom-dark-red hover:border-gray-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1.5 transition-all duration-300 ease-out">
              <CardHeader className="pb-4">
                <CardTitle className={`text-2xl text-custom-dark-red group-hover:text-custom-light-red transition-all duration-300 ease-out ${outfitHead.className}`}>Task 2</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`flex items-center text-sm font-medium text-custom-dark-red group-hover:text-custom-light-red ${outfitHead.className}`}>
                  Go to Task 2
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page