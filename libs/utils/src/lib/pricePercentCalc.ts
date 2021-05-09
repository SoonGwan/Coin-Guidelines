type Props = {
  totalValue: number;
  percentValue: number;
};

export const percentCalculationResult = ({
  totalValue,
  percentValue,
}: Props) => {
  console.log(totalValue);
  const mathematicalFormula = totalValue - totalValue * (percentValue / 100);

  return totalValue < 10
    ? mathematicalFormula.toFixed(3)
    : Math.floor(mathematicalFormula);
};
