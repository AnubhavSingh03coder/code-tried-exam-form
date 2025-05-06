
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const EmergencyContactPage = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  const handleSelectChange = (name, value) => {
    onChange({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Emergency Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Contact Name <span className="text-red-500">*</span></Label>
          <Input 
            id="name" 
            name="name"
            value={data.name} 
            onChange={handleInputChange} 
            placeholder="Enter emergency contact name" 
            required
          />
        </div>
        
        <div>
          <Label htmlFor="relationship">Relationship <span className="text-red-500">*</span></Label>
          <Select 
            value={data.relationship} 
            onValueChange={(value) => handleSelectChange('relationship', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select relationship" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="parent">Parent</SelectItem>
                <SelectItem value="spouse">Spouse</SelectItem>
                <SelectItem value="sibling">Sibling</SelectItem>
                <SelectItem value="relative">Other Relative</SelectItem>
                <SelectItem value="guardian">Legal Guardian</SelectItem>
                <SelectItem value="friend">Friend</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
          <Input 
            id="phone" 
            name="phone"
            value={data.phone} 
            onChange={handleInputChange} 
            placeholder="Enter emergency contact phone" 
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            name="email"
            type="email" 
            value={data.email} 
            onChange={handleInputChange} 
            placeholder="Enter emergency contact email" 
          />
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-md">
        <p className="text-sm text-blue-700">
          <strong>Note:</strong> This contact will only be used in case of an emergency situation.
        </p>
      </div>
    </div>
  );
};

export default EmergencyContactPage;
