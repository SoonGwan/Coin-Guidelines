export const unitStrategyUS = (dollar: number) => {
  return "$" + dollar.toLocaleString("en-US");
};

export const addDollar = (money: string | number) => {
  const dollar = Number(money);
  return unitStrategyUS(dollar);
};

export const shortHitProfit = (money: string, ratio: number) => {
  const dollar = Number(money);
  const result = dollar * (1 + ratio / 100);

  return unitStrategyUS(result);
};

export const shortHitLoss = (money: string, ratio: number) => {
  const dollar = Number(money);
  const result = dollar * (1 - ratio / 100);

  return unitStrategyUS(result);
};
