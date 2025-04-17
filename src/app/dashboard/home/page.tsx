"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Award, ChevronRight, ClipboardList, Coins, FileBadge } from "lucide-react";
import Link from "next/link";
import CourseActivitiesCard from "./components/course-activities-card";
import Leaderboard from "./components/leaderboard";
import { Announcement } from "./components/announcement";

export default function Page() {
    // dummy leaderboard data
    const leaderboardUsers = [
        { id: "1", name: "Maya Johnson", points: 1250, rank: 1, change: "same" as const },
        { id: "2", name: "David Kim", points: 1120, rank: 2, change: "up" as const },
        { id: "3", name: "Sarah Wilson", points: 980, rank: 3, change: "down" as const },
        { id: "4", name: "Adolf", points: 820, rank: 4, change: "up" as const }, // Current user
        { id: "5", name: "Raj Patel", points: 780, rank: 5, change: "down" as const },
    ];

    return (
        <div className="py-6 px-6 md:py-8 md:px-12 lg:px-24 xl:px-24 space-y-6 md:space-y-8">
            {/* Greeting Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                    <h1 className="font-bold text-2xl md:text-3xl text-gray-900">Good morning, Adolf</h1>
                    <span className="text-sm text-gray-600">Welcome to SI Lab, check your priority learning.</span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
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

            {/* Announcement Section */}
            <Announcement
                title="Announcement!"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia! Libero laudantium impedit vero iste a voluptatibus dignissimos, eaque totam repellendus dolor numquam similique illum tempore recusandae, porro possimus! Culpa."
            />

            {/* Learning Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
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
                <div className="lg:col-span-1">
                    <Leaderboard users={leaderboardUsers} currentUserId="4" />
                </div>
            </div>
        </div>
    );
}