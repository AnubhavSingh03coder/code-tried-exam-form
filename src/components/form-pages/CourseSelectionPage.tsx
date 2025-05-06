
import { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const coursesData = {
  'cse': [
    "Data Structures & Algorithms",
    "Object Oriented Programming",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Web Development",
    "Machine Learning",
    "Artificial Intelligence",
    "Computer Graphics"
  ],
  'it': [
    "Information Security",
    "Cloud Computing",
    "Data Warehousing",
    "Software Engineering",
    "Mobile App Development",
    "IoT Systems",
    "Big Data Analytics",
    "Enterprise Resource Planning"
  ],
  'ece': [
    "Digital Electronics",
    "Analog Circuits",
    "VLSI Design",
    "Microprocessors",
    "Communication Systems",
    "Signal Processing",
    "Embedded Systems"
  ],
  'ee': [
    "Power Systems",
    "Electric Machines",
    "Control Systems",
    "Power Electronics",
    "High Voltage Engineering",
    "Electrical Measurements",
    "Renewable Energy Systems"
  ],
  'me': [
    "Thermodynamics",
    "Fluid Mechanics",
    "Manufacturing Processes",
    "Machine Design",
    "Heat Transfer",
    "Robotics",
    "Mechanics of Materials"
  ],
  'ce': [
    "Structural Engineering",
    "Geotechnical Engineering",
    "Transportation Engineering",
    "Environmental Engineering",
    "Concrete Structures",
    "Hydraulics",
    "Surveying"
  ]
};

const CourseSelectionPage = ({ data, onChange }) => {
  const [selectedCourses, setSelectedCourses] = useState(data || []);
  
  // Default to CSE courses for demo, in a real app this would be based on user's department
  const availableCourses = coursesData.cse;

  const handleCourseToggle = (course) => {
    const updatedCourses = selectedCourses.includes(course)
      ? selectedCourses.filter(c => c !== course)
      : [...selectedCourses, course];
    
    setSelectedCourses(updatedCourses);
    onChange(updatedCourses);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Course Selection</h2>
      <p className="mb-4 text-gray-600">Select the courses you wish to be examined for (select at least 4 courses):</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {availableCourses.map((course, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Checkbox 
              id={`course-${index}`} 
              checked={selectedCourses.includes(course)}
              onCheckedChange={() => handleCourseToggle(course)}
            />
            <Label htmlFor={`course-${index}`} className="cursor-pointer">{course}</Label>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-purple-50 rounded-md">
        <h3 className="font-semibold mb-2">Selected Courses ({selectedCourses.length}):</h3>
        {selectedCourses.length > 0 ? (
          <ul className="list-disc list-inside">
            {selectedCourses.map((course, index) => (
              <li key={index} className="text-gray-700">{course}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No courses selected yet.</p>
        )}
      </div>
    </div>
  );
};

export default CourseSelectionPage;
