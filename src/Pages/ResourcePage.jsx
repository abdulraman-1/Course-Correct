import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf, 
  faFileZipper,
  faChartSimple
} from "@fortawesome/free-solid-svg-icons";
import ResourceCard from "../Components/ResourceCard";

const ResourcePage = () => {
  return (
       <section className="px-4 sm:px-6 lg:px-8 py-8">
            {/* Downloadable Materials */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-3 mb-6">
                <FontAwesomeIcon 
                    icon={faFileZipper} 
                    className="text-purple-600 text-xl" 
                />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Downloadable Materials
                </h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ResourceCard
                    icon={faFilePdf}
                    title="Complete Lesson Notes"
                    description="Detailed explanation with step-by-step examples"
                    type="PDF"
                    size="2.4 MB"
                    color="text-red-500"
                    link="#"
                />
                <ResourceCard
                    icon={faFilePdf}
                    title="Practice Worksheets"
                    description="10 practice problems with answer key"
                    type="PDF"
                    size="1.8 MB"
                    color="text-red-500"
                    link="#"
                />
                <ResourceCard
                    icon={faChartSimple}
                    title="Lecture Slides"
                    description="Class presentation slides in editable format"
                    type="PPTX"
                    size="3.1 MB"
                    color="text-orange-500"
                    link="#"
                />
                </div>
            </div>

        </section>
    )
}



export default ResourcePage