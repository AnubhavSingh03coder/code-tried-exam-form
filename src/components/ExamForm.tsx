
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FormHeader from './FormHeader';
import PersonalInfoPage from './form-pages/PersonalInfoPage';
import AcademicInfoPage from './form-pages/AcademicInfoPage';
import CourseSelectionPage from './form-pages/CourseSelectionPage';
import AddressPage from './form-pages/AddressPage';
import EmergencyContactPage from './form-pages/EmergencyContactPage';
import HealthInfoPage from './form-pages/HealthInfoPage';
import PreviousEducationPage from './form-pages/PreviousEducationPage';
import DocumentsPage from './form-pages/DocumentsPage';
import DeclarationPage from './form-pages/DeclarationPage';
import PaymentPage from './form-pages/PaymentPage';
import FormNavigation from './FormNavigation';
import FormProgress from './FormProgress';
import { useToast } from "@/components/ui/use-toast";

const initialFormData = {
  personal: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: ''
  },
  academic: {
    studentId: '',
    program: '',
    department: '',
    year: '',
    semester: ''
  },
  courses: [],
  address: {
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  },
  emergency: {
    name: '',
    relationship: '',
    phone: '',
    email: ''
  },
  health: {
    conditions: '',
    allergies: '',
    medications: '',
    bloodGroup: ''
  },
  education: {
    highSchool: '',
    highSchoolYear: '',
    highSchoolScore: '',
    college: '',
    collegeYear: '',
    collegeScore: ''
  },
  documents: {
    idProof: false,
    previousMarksheets: false,
    photograph: false,
    domicile: false
  },
  declaration: {
    agreed: false
  },
  payment: {
    method: '',
    amount: '5000',
    transactionId: ''
  }
};

const ExamForm = ({ onPrint }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('examFormData');
    return savedData ? JSON.parse(savedData) : initialFormData;
  });
  const { toast } = useToast();
  
  const totalPages = 10;

  const handleChange = (section, data) => {
    const newFormData = { ...formData, [section]: { ...formData[section], ...data } };
    setFormData(newFormData);
    localStorage.setItem('examFormData', JSON.stringify(newFormData));
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrint = () => {
    // Basic validation
    for (const section in formData) {
      const data = formData[section];
      if (typeof data === 'object' && !Array.isArray(data)) {
        for (const key in data) {
          if (key !== 'agreed' && key !== 'transactionId' && !data[key] && typeof data[key] !== 'boolean') {
            toast({
              title: "Incomplete Form",
              description: "Please fill all required fields before printing.",
              variant: "destructive"
            });
            return;
          }
        }
      }
    }

    if (!formData.declaration.agreed) {
      toast({
        title: "Declaration Required",
        description: "You must agree to the declaration before proceeding.",
        variant: "destructive"
      });
      return;
    }

    onPrint(formData);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <PersonalInfoPage data={formData.personal} onChange={(data) => handleChange('personal', data)} />;
      case 2:
        return <AcademicInfoPage data={formData.academic} onChange={(data) => handleChange('academic', data)} />;
      case 3:
        return <CourseSelectionPage data={formData.courses} onChange={(data) => setFormData({...formData, courses: data})} />;
      case 4:
        return <AddressPage data={formData.address} onChange={(data) => handleChange('address', data)} />;
      case 5:
        return <EmergencyContactPage data={formData.emergency} onChange={(data) => handleChange('emergency', data)} />;
      case 6:
        return <HealthInfoPage data={formData.health} onChange={(data) => handleChange('health', data)} />;
      case 7:
        return <PreviousEducationPage data={formData.education} onChange={(data) => handleChange('education', data)} />;
      case 8:
        return <DocumentsPage data={formData.documents} onChange={(data) => handleChange('documents', data)} />;
      case 9:
        return <DeclarationPage data={formData.declaration} onChange={(data) => handleChange('declaration', data)} />;
      case 10:
        return <PaymentPage data={formData.payment} onChange={(data) => handleChange('payment', data)} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 print:hidden">
      <FormHeader />
      
      <FormProgress currentStep={currentPage} totalSteps={totalPages} />
      
      <Card className="mt-6 p-6 shadow-lg bg-white">
        {renderCurrentPage()}
        
        <FormNavigation 
          currentPage={currentPage}
          totalPages={totalPages}
          onBack={handleBack}
          onNext={handleNext}
          onPrint={handlePrint}
        />
      </Card>
    </div>
  );
};

export default ExamForm;
