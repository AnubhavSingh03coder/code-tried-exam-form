
import { useState } from 'react';
import ExamForm from '@/components/ExamForm';
import PrintableForm from '@/components/PrintableForm';

const Index = () => {
  const [isPrinting, setIsPrinting] = useState(false);
  const [formData, setFormData] = useState(null);

  const handlePrint = (data) => {
    setFormData(data);
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {!isPrinting ? (
        <ExamForm onPrint={handlePrint} />
      ) : (
        <PrintableForm formData={formData} />
      )}
    </div>
  );
};

export default Index;
