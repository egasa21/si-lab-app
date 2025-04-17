import { ClipboardList } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type Activity = {
    title: string;
    link: string;
};

type CourseActivitiesCardProps = {
    activities: Activity[];
};

// Todo: change the colour schema
const CourseActivitiesCard = ({ activities }: CourseActivitiesCardProps) => {
    return (
        <div className="mt-4 rounded-md shadow-sm p-4">
            <div className="flex items-center gap-2">
                <ClipboardList className="h-6 w-6" />
                <span className="font-bold">Course Activities</span>
            </div>

            <Separator orientation="horizontal" className="pt-2 mt-2" />

            <div className="flex flex-col">
                {activities.map((activity, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 flex-col mt-4 p-4 border-l-4 border-yellow-300"
                    >
                        <p className="font-semibold">On Progress</p>
                        <div className="flex-row flex justify-between">
                            <p className="">
                                <span className="font-bold">{activity.title.split(":")[0]}</span>
                                {` : ${activity.title.split(":")[1]}`}
                            </p>
                            <Link href={activity.link} className="underline text-blue-400">
                                Continue
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseActivitiesCard;
