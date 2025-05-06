
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const DeclarationPage = ({ data, onChange }) => {
  const handleCheckboxChange = (name, checked) => {
    onChange({ [name]: checked });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Declaration</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
        <p className="mb-4">I, <em>[Your Name as filled in Personal Information]</em>, hereby declare that:</p>
        
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>All the information provided in this examination form is true and correct to the best of my knowledge.</li>
          <li>I have read and understood all the examination rules and regulations of THE CODE TRIED INSTITUTE OF TECHNOLOGY.</li>
          <li>I understand that providing false information may result in the cancellation of my examination and/or appropriate disciplinary action.</li>
          <li>I will abide by the examination code of conduct during all examination activities.</li>
          <li>I am aware that any form of malpractice during examination will lead to disqualification.</li>
          <li>I have paid all required academic and examination fees as stipulated by the institution.</li>
          <li>I give consent to the institute to process my personal data for academic and administrative purposes.</li>
        </ol>
        
        <p className="mt-4">This declaration is made on the date of submission of this form for the academic year {currentYear}-{currentYear+1}.</p>
      </div>
      
      <div className="flex items-start space-x-3 mt-6">
        <Checkbox 
          id="agreed" 
          checked={data.agreed}
          onCheckedChange={(checked) => handleCheckboxChange('agreed', checked)}
          className="mt-1"
        />
        <Label htmlFor="agreed" className="text-base font-medium">
          I confirm that I have read, understood, and agree to the above declaration.
        </Label>
      </div>
      
      <div className="mt-6 p-4 bg-red-50 rounded-md">
        <p className="text-sm text-red-700">
          <strong>Note:</strong> You must agree to this declaration to proceed with the examination registration.
        </p>
      </div>
    </div>
  );
};

export default DeclarationPage;
