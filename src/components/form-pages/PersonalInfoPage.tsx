
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PersonalInfoPage = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  const handleSelectChange = (name, value) => {
    onChange({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
          <Input 
            id="firstName" 
            name="firstName"
            value={data.firstName} 
            onChange={handleInputChange} 
            placeholder="Enter your first name" 
            required
          />
        </div>
        
        <div>
          <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
          <Input 
            id="lastName" 
            name="lastName"
            value={data.lastName} 
            onChange={handleInputChange} 
            placeholder="Enter your last name" 
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
          <Input 
            id="email" 
            name="email"
            type="email" 
            value={data.email} 
            onChange={handleInputChange} 
            placeholder="Enter your email address" 
            required
          />
        </div>
        
        <div>
          <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
          <Input 
            id="phone" 
            name="phone"
            value={data.phone} 
            onChange={handleInputChange} 
            placeholder="Enter your phone number" 
            required
          />
        </div>
        
        <div>
          <Label htmlFor="dateOfBirth">Date of Birth <span className="text-red-500">*</span></Label>
          <Input 
            id="dateOfBirth" 
            name="dateOfBirth"
            type="date" 
            value={data.dateOfBirth} 
            onChange={handleInputChange} 
            required
          />
        </div>
        
        <div>
          <Label htmlFor="gender">Gender <span className="text-red-500">*</span></Label>
          <Select 
            value={data.gender} 
            onValueChange={(value) => handleSelectChange('gender', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoPage;
