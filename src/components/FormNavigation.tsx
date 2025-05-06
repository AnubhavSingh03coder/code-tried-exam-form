
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Printer } from "lucide-react";

interface FormNavigationProps {
  currentPage: number;
  totalPages: number;
  onBack: () => void;
  onNext: () => void;
  onPrint: () => void;
}

const FormNavigation = ({ currentPage, totalPages, onBack, onNext, onPrint }: FormNavigationProps) => {
  return (
    <div className="mt-10 flex justify-between">
      <Button
        variant="outline"
        onClick={onBack}
        disabled={currentPage === 1}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
      
      {currentPage === totalPages ? (
        <Button 
          onClick={onPrint}
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white flex items-center gap-2"
        >
          <Printer className="h-4 w-4" />
          Print Form
        </Button>
      ) : (
        <Button 
          onClick={onNext}
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white flex items-center gap-2"
        >
          Next
          <ArrowRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default FormNavigation;
