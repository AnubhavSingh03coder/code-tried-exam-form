
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const HealthInfoPage = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  const handleSelectChange = (name, value) => {
    onChange({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Health Information</h2>
      
      <div className="space-y-6">
        <div>
          <Label htmlFor="conditions">Medical Conditions (if any)</Label>
          <Textarea 
            id="conditions" 
            name="conditions"
            value={data.conditions} 
            onChange={handleInputChange} 
            placeholder="List any medical conditions you have" 
          />
        </div>
        
        <div>
          <Label htmlFor="allergies">Allergies (if any)</Label>
          <Textarea 
            id="allergies" 
            name="allergies"
            value={data.allergies} 
            onChange={handleInputChange} 
            placeholder="List any allergies you have" 
          />
        </div>
        
        <div>
          <Label htmlFor="medications">Current Medications (if any)</Label>
          <Textarea 
            id="medications" 
            name="medications"
            value={data.medications} 
            onChange={handleInputChange} 
            placeholder="List any medications you are currently taking" 
          />
        </div>
        
        <div>
          <Label htmlFor="bloodGroup">Blood Group <span className="text-red-500">*</span></Label>
          <Select 
            value={data.bloodGroup} 
            onValueChange={(value) => handleSelectChange('bloodGroup', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select blood group" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="A+">A+</SelectItem>
                <SelectItem value="A-">A-</SelectItem>
                <SelectItem value="B+">B+</SelectItem>
                <SelectItem value="B-">B-</SelectItem>
                <SelectItem value="AB+">AB+</SelectItem>
                <SelectItem value="AB-">AB-</SelectItem>
                <SelectItem value="O+">O+</SelectItem>
                <SelectItem value="O-">O-</SelectItem>
                <SelectItem value="unknown">Don't Know</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-md">
        <p className="text-sm text-blue-700">
          <strong>Note:</strong> This health information is confidential and will only be used in case of medical emergencies.
        </p>
      </div>
    </div>
  );
};

export default HealthInfoPage;
