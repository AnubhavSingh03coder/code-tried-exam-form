
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

const PaymentPage = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  const handleSelectChange = (name, value) => {
    onChange({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Payment Details</h2>
      
      <div className="mb-6 p-4 bg-green-50 rounded-md flex items-start gap-3">
        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
        <p className="text-green-700">
          <strong>Examination Fee:</strong> ₹5,000/- (Five Thousand Rupees Only)
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <Label htmlFor="method">Payment Method <span className="text-red-500">*</span></Label>
          <Select 
            value={data.method} 
            onValueChange={(value) => handleSelectChange('method', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="credit-card">Credit Card</SelectItem>
                <SelectItem value="debit-card">Debit Card</SelectItem>
                <SelectItem value="net-banking">Net Banking</SelectItem>
                <SelectItem value="upi">UPI</SelectItem>
                <SelectItem value="wallet">Digital Wallet</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="amount">Amount (₹) <span className="text-red-500">*</span></Label>
          <Input 
            id="amount" 
            name="amount"
            value={data.amount} 
            onChange={handleInputChange} 
            placeholder="Enter amount" 
            required
            readOnly
          />
        </div>
        
        <div>
          <Label htmlFor="transactionId">Transaction ID (Optional)</Label>
          <Input 
            id="transactionId" 
            name="transactionId"
            value={data.transactionId} 
            onChange={handleInputChange} 
            placeholder="Enter transaction ID if available" 
          />
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 rounded-md">
        <h3 className="font-semibold mb-2 text-blue-800">Payment Instructions:</h3>
        <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
          <li>All fees are non-refundable once the examination form is submitted.</li>
          <li>For online payments, please save a copy of the transaction receipt.</li>
          <li>If you've already paid via bank transfer, please enter the UTR/Transaction ID.</li>
          <li>For any payment issues, please contact the accounts department at accounts@codetried.edu</li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentPage;
