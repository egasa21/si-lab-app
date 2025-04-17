"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, Award, ClipboardList, Coins, FileBadge, Terminal } from "lucide-react"
import Link from "next/link"
import CourseActivitiesCard from "./components/course-activities-card"

export default function Page() {
    return (
        <div className="py-8 px-6 md:px-12 lg:px-24 space-y-8">
            {/* Greeting Section */}
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="font-bold text-2xl md:text-3xl text-gray-900">Good morning, Adolf</h1>
                    <span className="text-sm text-gray-600">Welcome to SI Lab, check your priority learning.</span>
                </div>
                <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="flex items-center gap-2 border rounded-md p-2 bg-gray-50">
                        <Coins className="w-5 h-5 text-yellow-500" />
                        <div className="flex flex-col pe-2">
                            <span className="text-lg font-semibold text-gray-800">100</span>
                            <span className="text-xs text-gray-500">Points</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 border rounded-md p-2 bg-gray-50">
                        <Award className="w-5 h-5 text-green-500" />
                        <div className="flex flex-col pe-2">
                            <span className="text-lg font-semibold text-gray-800">100</span>
                            <span className="text-xs text-gray-500">Badges</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 border rounded-md p-2 bg-gray-50">
                        <FileBadge className="w-5 h-5 text-blue-500" />
                        <div className="flex flex-col pe-2">
                            <span className="text-lg font-semibold text-gray-800">100</span>
                            <span className="text-xs text-gray-500">Certificates</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alert Section */}
            <Alert className="rounded-md shadow-sm">
                <AlertCircle className="h-4 w-4 text-yellow-500" />
                <AlertTitle className="font-semibold">Announcement!</AlertTitle>
                <AlertDescription className="text-sm text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia! Libero laudantium impedit vero iste a voluptatibus dignissimos, eaque totam repellendus dolor numquam similique illum tempore recusandae, porro possimus! Culpa.
                </AlertDescription>
            </Alert>

            {/* Learning Content Section */}
            <div className="flex gap-6 md:gap-12">
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                            In progress learning content <AlertCircle className="h-4 w-4 text-indigo-500" />
                        </h2>
                        <Link
                            href=""
                            className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                        >
                            View all <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
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
                <div className="w-1/3 rounded-md border border-gray-200 bg-gray-50 p-4">
                    <h3 className="text-md font-semibold text-gray-800 mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#" className="text-indigo-600 hover:text-indigo-800 text-sm transition-colors duration-200">
                                <Terminal className="inline-block w-4 h-4 mr-2" /> Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-indigo-600 hover:text-indigo-800 text-sm transition-colors duration-200">
                                <ClipboardList className="inline-block w-4 h-4 mr-2" /> My Courses
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-indigo-600 hover:text-indigo-800 text-sm transition-colors duration-200">
                                <Award className="inline-block w-4 h-4 mr-2" /> Achievements
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-indigo-600 hover:text-indigo-800 text-sm transition-colors duration-200">
                                <FileBadge className="inline-block w-4 h-4 mr-2" /> Certificates
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

import { ChevronRight } from "lucide-react";