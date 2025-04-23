import React from 'react';
import { Button } from '@/components/ui/button'; // If you have custom button
import { cn } from '@/lib/utils'; // If you have a utility for class names

const ComingSoonPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
                    Coming Soon
                </h1>
                <p className="text-lg sm:text-xl text-gray-600">
                    We're preparing something special. Stay tuned!
                </p>
                <Button
                    variant="default"
                    size="lg"
                    className={cn(
                        "bg-blue-600 text-white font-semibold px-6 py-3 rounded-full",
                        "hover:bg-blue-700 transition-colors duration-300",
                        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    )}
                >
                    Get Notified
                </Button>
            </div>
        </div>
    );
};

export default ComingSoonPage;
