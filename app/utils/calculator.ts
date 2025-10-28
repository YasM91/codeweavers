export const calculateFinanceQuote = (vehiclePrice: number) => {
  const totalDeposit = (vehiclePrice * 10) / 100;
  const totalAmountOfCredit = vehiclePrice - totalDeposit;
  const monthlyPayment = totalAmountOfCredit / 60;

  return { totalDeposit, totalAmountOfCredit, monthlyPayment };
};
