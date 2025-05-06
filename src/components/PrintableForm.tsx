
import FormHeader from './FormHeader';
import { Card } from "@/components/ui/card";

const PrintableForm = ({ formData }) => {
  if (!formData) return null;

  return (
    <div className="container mx-auto p-8 bg-white">
      <FormHeader />
      
      <div className="text-right mb-4">
        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
      </div>
      
      <Card className="p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-purple-700">Personal Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p><strong>Name:</strong> {formData.personal.firstName} {formData.personal.lastName}</p>
            <p><strong>Email:</strong> {formData.personal.email}</p>
            <p><strong>Phone:</strong> {formData.personal.phone}</p>
          </div>
          <div>
            <p><strong>Date of Birth:</strong> {formData.personal.dateOfBirth}</p>
            <p><strong>Gender:</strong> {formData.personal.gender}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-purple-700">Academic Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p><strong>Student ID:</strong> {formData.academic.studentId}</p>
            <p><strong>Program:</strong> {formData.academic.program}</p>
            <p><strong>Department:</strong> {formData.academic.department}</p>
          </div>
          <div>
            <p><strong>Year:</strong> {formData.academic.year}</p>
            <p><strong>Semester:</strong> {formData.academic.semester}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-purple-700">Course Selection</h3>
        <ul className="list-disc pl-5">
          {formData.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </Card>

      <Card className="p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-purple-700">Address</h3>
        <p>{formData.address.street}</p>
        <p>{formData.address.city}, {formData.address.state} {formData.address.zipCode}</p>
        <p>{formData.address.country}</p>
      </Card>

      <Card className="p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-purple-700">Emergency Contact</h3>
        <p><strong>Name:</strong> {formData.emergency.name}</p>
        <p><strong>Relationship:</strong> {formData.emergency.relationship}</p>
        <p><strong>Phone:</strong> {formData.emergency.phone}</p>
        <p><strong>Email:</strong> {formData.emergency.email}</p>
      </Card>

      <Card className="p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-purple-700">Health Information</h3>
        <p><strong>Medical Conditions:</strong> {formData.health.conditions || "None"}</p>
        <p><strong>Allergies:</strong> {formData.health.allergies || "None"}</p>
        <p><strong>Medications:</strong> {formData.health.medications || "None"}</p>
        <p><strong>Blood Group:</strong> {formData.health.bloodGroup}</p>
      </Card>

      <Card className="p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-purple-700">Previous Education</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p><strong>High School:</strong> {formData.education.highSchool}</p>
            <p><strong>Year of Completion:</strong> {formData.education.highSchoolYear}</p>
            <p><strong>Percentage/GPA:</strong> {formData.education.highSchoolScore}</p>
          </div>
          <div>
            <p><strong>College/University:</strong> {formData.education.college}</p>
            <p><strong>Year of Completion:</strong> {formData.education.collegeYear}</p>
            <p><strong>Percentage/GPA:</strong> {formData.education.collegeScore}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-purple-700">Documents Submitted</h3>
        <ul className="list-disc pl-5">
          {formData.documents.idProof && <li>ID Proof</li>}
          {formData.documents.previousMarksheets && <li>Previous Marksheets</li>}
          {formData.documents.photograph && <li>Photograph</li>}
          {formData.documents.domicile && <li>Domicile Certificate</li>}
        </ul>
      </Card>

      <Card className="p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-purple-700">Payment Details</h3>
        <p><strong>Payment Method:</strong> {formData.payment.method}</p>
        <p><strong>Amount:</strong> ₹{formData.payment.amount}</p>
        <p><strong>Transaction ID:</strong> {formData.payment.transactionId || "Not provided"}</p>
      </Card>

      <div className="mt-10 border-t pt-6">
        <p className="font-semibold">Declaration:</p>
        <p className="mb-6">I hereby declare that all the information provided in this form is true and correct to the best of my knowledge.</p>
        
        <div className="flex justify-between mt-10">
          <div>
            <div className="mt-16 border-t border-gray-400 w-48">
              <p className="text-center mt-2">Student's Signature</p>
            </div>
          </div>
          <div>
            <div className="mt-16 border-t border-gray-400 w-48">
              <p className="text-center mt-2">Date</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-10 text-center text-gray-500 text-sm">
        <p>THE CODE TRIED INSTITUTE OF TECHNOLOGY</p>
        <p>Form ID: CTIT-{new Date().getFullYear()}-{String(Math.floor(Math.random() * 10000)).padStart(4, '0')}</p>
      </div>
    </div>
  );
};

export default PrintableForm;
