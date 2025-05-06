
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AcademicInfoPage = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  const handleSelectChange = (name, value) => {
    onChange({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Academic Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="studentId">Student ID <span className="text-red-500">*</span></Label>
          <Input 
            id="studentId" 
            name="studentId"
            value={data.studentId} 
            onChange={handleInputChange} 
            placeholder="Enter your student ID" 
            required
          />
        </div>
        
        <div>
          <Label htmlFor="program">Program <span className="text-red-500">*</span></Label>
          <Select 
            value={data.program} 
            onValueChange={(value) => handleSelectChange('program', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select program" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="btech">B.Tech</SelectItem>
                <SelectItem value="mtech">M.Tech</SelectItem>
                <SelectItem value="bca">BCA</SelectItem>
                <SelectItem value="mca">MCA</SelectItem>
                <SelectItem value="bsc">B.Sc</SelectItem>
                <SelectItem value="msc">M.Sc</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="department">Department <span className="text-red-500">*</span></Label>
          <Select 
            value={data.department} 
            onValueChange={(value) => handleSelectChange('department', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="cse">Computer Science & Engineering</SelectItem>
                <SelectItem value="it">Information Technology</SelectItem>
                <SelectItem value="ece">Electronics & Communication</SelectItem>
                <SelectItem value="ee">Electrical Engineering</SelectItem>
                <SelectItem value="me">Mechanical Engineering</SelectItem>
                <SelectItem value="ce">Civil Engineering</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="year">Year <span className="text-red-500">*</span></Label>
          <Select 
            value={data.year} 
            onValueChange={(value) => handleSelectChange('year', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">First Year</SelectItem>
                <SelectItem value="2">Second Year</SelectItem>
                <SelectItem value="3">Third Year</SelectItem>
                <SelectItem value="4">Fourth Year</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="semester">Semester <span className="text-red-500">*</span></Label>
          <Select 
            value={data.semester} 
            onValueChange={(value) => handleSelectChange('semester', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">Semester 1</SelectItem>
                <SelectItem value="2">Semester 2</SelectItem>
                <SelectItem value="3">Semester 3</SelectItem>
                <SelectItem value="4">Semester 4</SelectItem>
                <SelectItem value="5">Semester 5</SelectItem>
                <SelectItem value="6">Semester 6</SelectItem>
                <SelectItem value="7">Semester 7</SelectItem>
                <SelectItem value="8">Semester 8</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default AcademicInfoPage;
