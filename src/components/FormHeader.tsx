
import { GraduationCap } from "lucide-react";

const FormHeader = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <GraduationCap className="h-12 w-12 text-purple-600 mr-2" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        THE CODE TRIED INSTITUTE OF TECHNOLOGY
      </h1>
      <h2 className="mt-2 text-xl font-medium text-gray-600">Student Examination Form</h2>
      <div className="mt-4 h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
    </div>
  );
};

export default FormHeader;
