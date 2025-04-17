"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, Award, ClipboardList, Coins, FileBadge, Terminal } from "lucide-react"
import Link from "next/link"
import CourseActivitiesCard from "./components/course-activities-card"

export default function page() {
    return (
        <div>
            {/* greeting section */}
            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-3xl">Good morning, Adolf</h1>
                    <span className="text-sm">Welcome to SI Lab, check your priority learning.</span>
                </div>
                <div className="flex flex-row gap-2">
                    <div className="flex flex-row gap-4 border rounded-md p-2">
                        <Coins className="w-6 h-6" />
                        <div className="flex flex-col pe-4">
                            <span className="text-xl font-semibold">100</span>
                            <span className="text-gray-600">Points</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 border rounded-md p-2">
                        <Award className="w-6 h-6" />
                        <div className="flex flex-col pe-4">
                            <span className="text-xl font-semibold">100</span>
                            <span className="text-gray-600">Badges</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 border rounded-md p-2">
                        <FileBadge className="w-6 h-6" />
                        <div className="flex flex-col pe-4">
                            <span className="text-xl font-semibold">100</span>
                            <span className="text-gray-600">Sertificates</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* alert section */}
            <Alert className="mt-8">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Announcement!</AlertTitle>
                <AlertDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia! Libero laudantium impedit vero iste a voluptatibus dignissimos, eaque totam repellendus dolor numquam similique illum tempore recusandae, porro possimus! Culpa.
                </AlertDescription>
            </Alert>

            <div className="flex gap-16 mt-8">
                <div className="max-w-3/4 w-full">
                    <div className="justify-between flex items-center">
                        <span className="flex items-center gap-2 justify-center font-bold">In progress learning content <AlertCircle className="h-4 w-4" /></span>
                        <Link href="" className="underline text-blue-400 font-medium">View all</Link>
                    </div>
                    <CourseActivitiesCard
                        activities={[
                            {
                                title: "Web technology : Module 1 - Introduction",
                                link: "/courses/web-tech/module-1",
                            },
                            {
                                title: "Data Structures : Module 2 - Linked Lists",
                                link: "/courses/data-structures/module-2",
                            },
                        ]}
                    />

                </div>
                <div className="max-w-1/3 w-full border">b</div>
            </div>

        </div>
    )
}
