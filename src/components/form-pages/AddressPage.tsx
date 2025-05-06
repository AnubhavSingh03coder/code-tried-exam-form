
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AddressPage = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  const handleSelectChange = (name, value) => {
    onChange({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Address Information</h2>
      <div className="space-y-6">
        <div>
          <Label htmlFor="street">Street Address <span className="text-red-500">*</span></Label>
          <Input 
            id="street" 
            name="street"
            value={data.street} 
            onChange={handleInputChange} 
            placeholder="Enter street address" 
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="city">City <span className="text-red-500">*</span></Label>
            <Input 
              id="city" 
              name="city"
              value={data.city} 
              onChange={handleInputChange} 
              placeholder="Enter city" 
              required
            />
          </div>
          
          <div>
            <Label htmlFor="state">State/Province <span className="text-red-500">*</span></Label>
            <Input 
              id="state" 
              name="state"
              value={data.state} 
              onChange={handleInputChange} 
              placeholder="Enter state/province" 
              required
            />
          </div>
          
          <div>
            <Label htmlFor="zipCode">Zip/Postal Code <span className="text-red-500">*</span></Label>
            <Input 
              id="zipCode" 
              name="zipCode"
              value={data.zipCode} 
              onChange={handleInputChange} 
              placeholder="Enter zip/postal code" 
              required
            />
          </div>
          
          <div>
            <Label htmlFor="country">Country <span className="text-red-500">*</span></Label>
            <Select 
              value={data.country} 
              onValueChange={(value) => handleSelectChange('country', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                  <SelectItem value="germany">Germany</SelectItem>
                  <SelectItem value="france">France</SelectItem>
                  <SelectItem value="japan">Japan</SelectItem>
                  <SelectItem value="china">China</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
