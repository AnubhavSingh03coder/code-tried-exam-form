
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const DocumentsPage = ({ data, onChange }) => {
  const handleCheckboxChange = (name, checked) => {
    onChange({ [name]: checked });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Document Submission</h2>
      <p className="mb-4 text-gray-600">Please confirm which documents you are submitting with this application:</p>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Checkbox 
            id="idProof" 
            checked={data.idProof}
            onCheckedChange={(checked) => handleCheckboxChange('idProof', checked)}
          />
          <Label htmlFor="idProof" className="cursor-pointer">
            <span className="font-medium">ID Proof</span> 
            <span className="block text-sm text-gray-500">(Aadhaar Card/PAN Card/Passport/Driver's License)</span>
          </Label>
        </div>
        
        <div className="flex items-center space-x-3">
          <Checkbox 
            id="previousMarksheets" 
            checked={data.previousMarksheets}
            onCheckedChange={(checked) => handleCheckboxChange('previousMarksheets', checked)}
          />
          <Label htmlFor="previousMarksheets" className="cursor-pointer">
            <span className="font-medium">Previous Education Marksheets</span>
            <span className="block text-sm text-gray-500">(High School/College/University)</span>
          </Label>
        </div>
        
        <div className="flex items-center space-x-3">
          <Checkbox 
            id="photograph" 
            checked={data.photograph}
            onCheckedChange={(checked) => handleCheckboxChange('photograph', checked)}
          />
          <Label htmlFor="photograph" className="cursor-pointer">
            <span className="font-medium">Passport Size Photograph</span>
            <span className="block text-sm text-gray-500">(Recent, color photograph with white background)</span>
          </Label>
        </div>
        
        <div className="flex items-center space-x-3">
          <Checkbox 
            id="domicile" 
            checked={data.domicile}
            onCheckedChange={(checked) => handleCheckboxChange('domicile', checked)}
          />
          <Label htmlFor="domicile" className="cursor-pointer">
            <span className="font-medium">Domicile Certificate</span>
            <span className="block text-sm text-gray-500">(If applicable for state quota)</span>
          </Label>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 rounded-md">
        <p className="text-sm text-yellow-700">
          <strong>Important:</strong> Please ensure all documents are self-attested copies. Original documents will be verified during the physical document verification process.
        </p>
      </div>
    </div>
  );
};

export default DocumentsPage;
