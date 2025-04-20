"use client";

import React, { useState, useEffect } from 'react';
import {
    CheckCircle,
    Clock,
    MapPin,
    School,
    User,
    QrCode,
    Loader2,
    AlertCircle
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

// Define types
interface ClassSession {
    id: string;
    course: string;
    courseName: string;
    instructor: string;
    room: string;
    startTime: string;
    endTime: string;
    date: string;
    checkinCode?: string;
    active: boolean;
}

interface CheckinResult {
    success: boolean;
    message: string;
    timestamp?: string;
    status?: "present" | "late";
}

// Mock current class sessions
const mockAvailableSessions: ClassSession[] = [
    {
        id: "1",
        course: "CSE101",
        courseName: "Web Technology",
        instructor: "Dr. Emily Chen",
        room: "Tech Building 305",
        startTime: "9:00 AM",
        endTime: "10:30 AM",
        date: "April 20, 2025",
        active: true
    },
    {
        id: "2",
        course: "CSE202",
        courseName: "Data Structures",
        instructor: "Prof. James Rodriguez",
        room: "Science Hall 210",
        startTime: "2:00 PM",
        endTime: "3:30 PM",
        date: "April 20, 2025",
        active: true
    }
];

const StudentCheckIn = () => {
    const [availableSessions, setAvailableSessions] = useState<ClassSession[]>(mockAvailableSessions);
    const [selectedSession, setSelectedSession] = useState<ClassSession | null>(null);
    const [checkinCode, setCheckinCode] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [result, setResult] = useState<CheckinResult | null>(null);
    const [checkinMethod, setCheckinMethod] = useState<"code" | "location" | "qr">("code");
    const [error, setError] = useState<string | null>(null);
    const [showCamera, setShowCamera] = useState<boolean>(false);

    // Check if the current time is within the class period + some buffer
    useEffect(() => {
        if (availableSessions.length === 1) {
            setSelectedSession(availableSessions[0]);
        }
    }, [availableSessions]);

    const handleSessionSelect = (session: ClassSession) => {
        setSelectedSession(session);
        setResult(null);
        setError(null);
    };

    const handleCheckinMethodChange = (method: "code" | "location" | "qr") => {
        setCheckinMethod(method);
        setResult(null);
        setError(null);

        if (method === "qr") {
            setShowCamera(true);
        } else {
            setShowCamera(false);
        }
    };

    const handleCheckin = async () => {
        if (!selectedSession) {
            setError("Please select a class session");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            if (checkinMethod === "code") {
                // Validate check-in code (mocked)
                const isValid = checkinCode.length > 0;

                if (!isValid) {
                    setError("Invalid check-in code");
                    setIsLoading(false);
                    return;
                }
            }

            // Determine if student is late based on current time vs class start time
            const currentHour = new Date().getHours();
            const isLate = currentHour >= 9; // Just a mock condition

            // Check-in success
            setResult({
                success: true,
                message: isLate ? "You've been marked as late" : "You've been marked as present",
                timestamp: new Date().toLocaleTimeString(),
                status: isLate ? "late" : "present"
            });
        } catch (err) {
            setError("Failed to check in. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    // Mock QR code scan completion
    const handleQrCodeScanned = () => {
        setShowCamera(false);
        setIsLoading(true);

        // Simulate processing
        setTimeout(() => {
            setIsLoading(false);
            setResult({
                success: true,
                message: "QR code scanned successfully. You've been marked as present",
                timestamp: new Date().toLocaleTimeString(),
                status: "present"
            });
        }, 1500);
    };

    return (
        <div className="mt-6 rounded-lg bg-white overflow-hidden h-full py-6 px-6 md:py-8 md:px-12 lg:px-24 xl:px-24 space-y-6 md:space-y-8">
            <div className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-indigo-500" />
                    <h3 className="text-lg font-semibold text-gray-800">
                        Check-in Attendance
                    </h3>
                </div>
            </div>
            <Separator className="my-2" />

            <div className="px-6 py-4 space-y-6">
                {/* Step 1: Select Class */}
                <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-3">
                        1. Select Available Class
                    </h4>

                    {availableSessions.length > 0 ? (
                        <div className="space-y-2">
                            {availableSessions.map((session) => (
                                <div
                                    key={session.id}
                                    className={`border rounded-md p-3 cursor-pointer transition-colors ${selectedSession?.id === session.id
                                        ? "border-indigo-500 bg-indigo-50"
                                        : "border-gray-200 hover:bg-gray-50"
                                        }`}
                                    onClick={() => handleSessionSelect(session)}
                                >
                                    <div className="flex justify-between">
                                        <div className="font-medium text-gray-800">{session.courseName}</div>
                                        <div className="text-sm text-gray-500">{session.course}</div>
                                    </div>

                                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                                        <Clock className="h-4 w-4 text-gray-400" />
                                        <span>{session.startTime} - {session.endTime}</span>
                                    </div>

                                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                                        <MapPin className="h-4 w-4 text-gray-400" />
                                        <span>{session.room}</span>
                                    </div>

                                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                                        <User className="h-4 w-4 text-gray-400" />
                                        <span>{session.instructor}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-gray-50 rounded-md py-4 px-3 text-center">
                            <AlertCircle className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-500">
                                No active classes available for check-in at the moment
                            </p>
                        </div>
                    )}
                </div>

                {/* Step 2: Choose Check-in Method */}
                {selectedSession && (
                    <div>
                        <h4 className="text-sm font-medium text-gray-600 mb-3">
                            2. Choose Check-in Method
                        </h4>

                        <div className="flex gap-3 mb-4">
                            <button
                                onClick={() => handleCheckinMethodChange("code")}
                                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 flex-1 justify-center ${checkinMethod === "code"
                                    ? "bg-indigo-100 text-indigo-700 border border-indigo-300"
                                    : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
                                    }`}
                            >
                                <School className="h-4 w-4" />
                                Class Code
                            </button>

                            <button
                                onClick={() => handleCheckinMethodChange("location")}
                                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 flex-1 justify-center ${checkinMethod === "location"
                                    ? "bg-indigo-100 text-indigo-700 border border-indigo-300"
                                    : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
                                    }`}
                            >
                                <MapPin className="h-4 w-4" />
                                Location
                            </button>

                            <button
                                onClick={() => handleCheckinMethodChange("qr")}
                                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 flex-1 justify-center ${checkinMethod === "qr"
                                    ? "bg-indigo-100 text-indigo-700 border border-indigo-300"
                                    : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
                                    }`}
                            >
                                <QrCode className="h-4 w-4" />
                                Scan QR
                            </button>
                        </div>

                        {/* Check-in Method Specific Content */}
                        <div className="mt-4">
                            {checkinMethod === "code" && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Enter the check-in code provided by your instructor
                                    </label>
                                    <input
                                        type="text"
                                        value={checkinCode}
                                        onChange={(e) => setCheckinCode(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        placeholder="Enter code"
                                    />
                                </div>
                            )}

                            {checkinMethod === "location" && (
                                <div className="bg-gray-50 rounded-md p-4 border border-gray-200">
                                    <div className="flex items-center justify-center mb-2">
                                        <MapPin className="h-6 w-6 text-gray-500" />
                                    </div>
                                    <p className="text-sm text-center text-gray-600">
                                        Your location will be used to verify you are in the correct classroom.
                                    </p>
                                    <div className="flex justify-center mt-2">
                                        <div className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-500 border border-gray-200">
                                            Current location: Campus Center
                                        </div>
                                    </div>
                                </div>
                            )}

                            {checkinMethod === "qr" && (
                                <div className="bg-gray-50 rounded-md p-4 border border-gray-200">
                                    {showCamera ? (
                                        <div>
                                            <div className="bg-black rounded-md h-48 flex items-center justify-center mb-2">
                                                <div className="text-white text-sm">Camera feed</div>
                                            </div>
                                            <div className="flex justify-center">
                                                <button
                                                    className="text-xs text-gray-500 underline"
                                                    onClick={handleQrCodeScanned}
                                                >
                                                    Simulate successful scan
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center">
                                            <QrCode className="h-8 w-8 text-gray-400 mb-2" />
                                            <p className="text-sm text-center text-gray-600">
                                                Scan the QR code displayed by your instructor
                                            </p>
                                            <button
                                                onClick={() => setShowCamera(true)}
                                                className="mt-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium"
                                            >
                                                Open Camera
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Check-in Button */}
                {selectedSession && (checkinMethod !== "qr" || !showCamera) && (
                    <button
                        className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handleCheckin}
                        disabled={isLoading || (checkinMethod === "code" && !checkinCode)}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                <CheckCircle className="h-4 w-4" />
                                Check-in Now
                            </>
                        )}
                    </button>
                )}

                {/* Error Message */}
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                        <div className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            {error}
                        </div>
                    </div>
                )}

                {/* Success Message */}
                {result && result.success && (
                    <div className={`px-4 py-3 rounded-md text-sm ${result.status === "late" ? "bg-amber-50 border border-amber-200 text-amber-700" : "bg-green-50 border border-green-200 text-green-700"
                        }`}>
                        <div className="flex items-center gap-2 font-medium">
                            {result.status === "late" ? (
                                <Clock className="h-5 w-5" />
                            ) : (
                                <CheckCircle className="h-5 w-5" />
                            )}
                            {result.message}
                        </div>
                        {selectedSession && (
                            <div className="mt-2 text-xs">
                                Checked in at {result.timestamp} for {selectedSession.courseName}
                            </div>
                        )}
                    </div>
                )}

                {/* Link to attendance history */}
                <div className="pt-2">
                    <Link
                        href="/dashboard/attendance"
                        className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                    >
                        View my attendance history
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StudentCheckIn;