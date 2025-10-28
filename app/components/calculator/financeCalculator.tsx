import { calculateFinanceQuote } from '@/utils/calculator';

interface Props {
  vehiclePrice: number;
}

const FinanceCalculator = ({ vehiclePrice }: Props) => {
  const { totalDeposit, totalAmountOfCredit, monthlyPayment } = calculateFinanceQuote(vehiclePrice);

  return (
    <div className="border p-4 rounded-md shadow-md  bg-white w-full">
      <h3 className="text-lg font-semibold mb-2 bg-primary text-white pl-2">Finance Calculator</h3>
      <ul className="space-y-1 text-gray-700 mt-4">
        <li>On The Road Price: £{vehiclePrice.toLocaleString()}</li>
        <li>Total Deposit: £{totalDeposit.toLocaleString()}</li>
        <li>Total Amount of Credit: £{totalAmountOfCredit.toLocaleString()}</li>
        <li>Number of Monthly Payments: 60</li>
        <li className="text-xl font-bold text-secondary mt-6">
          Monthly Payment: £{monthlyPayment.toFixed(2)}
        </li>
      </ul>
    </div>
  );
};

export default FinanceCalculator;
