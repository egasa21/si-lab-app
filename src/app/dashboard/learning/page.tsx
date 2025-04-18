import LastCoursesCard from "../home/components/last-courses-card"
import placeholderImage from '../../../../public/placeholder-img.jpg'

const LearningPage = () => {
    return (
        <div className="py-6 px-4 md:py-8 md:px-8 lg:px-12 xl:px-24 space-y-6 md:space-y-8">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                Continue Learning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <LastCoursesCard
                    id="ui-ux-best-practices"
                    title="Creating Engaging Learning Journeys: UI/UX Best Practices"
                    progress={80}
                    materialsCount={12}
                    imageUrl={placeholderImage}
                />
                <LastCoursesCard
                    id="ui-ux-best-practices"
                    title="Creating Engaging Learning Journeys: UI/UX Best Practices"
                    progress={80}
                    materialsCount={12}
                    imageUrl={placeholderImage}
                />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                All Materials
            </h2>
        </div>
    )
}

export default LearningPage