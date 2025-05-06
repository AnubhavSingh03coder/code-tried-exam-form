
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PreviousEducationPage = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Previous Education</h2>
      
      <div className="space-y-8">
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-4">High School</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="highSchool">School Name <span className="text-red-500">*</span></Label>
              <Input 
                id="highSchool" 
                name="highSchool"
                value={data.highSchool} 
                onChange={handleInputChange} 
                placeholder="Enter your high school name" 
                required
              />
            </div>
            
            <div>
              <Label htmlFor="highSchoolYear">Year of Completion <span className="text-red-500">*</span></Label>
              <Input 
                id="highSchoolYear" 
                name="highSchoolYear"
                value={data.highSchoolYear} 
                onChange={handleInputChange} 
                placeholder="YYYY" 
                required
              />
            </div>
            
            <div className="md:col-span-2">
              <Label htmlFor="highSchoolScore">Percentage/GPA <span className="text-red-500">*</span></Label>
              <Input 
                id="highSchoolScore" 
                name="highSchoolScore"
                value={data.highSchoolScore} 
                onChange={handleInputChange} 
                placeholder="Enter your high school percentage/GPA" 
                required
              />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-4">College/University (If applicable)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="college">Institution Name</Label>
              <Input 
                id="college" 
                name="college"
                value={data.college} 
                onChange={handleInputChange} 
                placeholder="Enter your college/university name" 
              />
            </div>
            
            <div>
              <Label htmlFor="collegeYear">Year of Completion</Label>
              <Input 
                id="collegeYear" 
                name="collegeYear"
                value={data.collegeYear} 
                onChange={handleInputChange} 
                placeholder="YYYY" 
              />
            </div>
            
            <div className="md:col-span-2">
              <Label htmlFor="collegeScore">Percentage/GPA</Label>
              <Input 
                id="collegeScore" 
                name="collegeScore"
                value={data.collegeScore} 
                onChange={handleInputChange} 
                placeholder="Enter your college percentage/GPA" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousEducationPage;
