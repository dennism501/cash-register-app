export const totalCharge = (chargeAmounts: Array<number>): number => {
  return chargeAmounts.reduce((acc, amount) => acc + amount, 0);
};
