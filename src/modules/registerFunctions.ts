export const totalCharge = (chargeAmounts: Array<string>): number => {
  return chargeAmounts.reduce((acc, amount) => acc + parseFloat(amount), 0);
};
