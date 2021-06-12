type Props = {
  totalValue: number;
  percentValue: number;
};

export const percentCalculationResult = ({
  totalValue,
  percentValue,
}: Props) => {
  const mathematicalFormula = totalValue - totalValue * (percentValue / 100);

  if (mathematicalFormula <= 0) {
    return 0;
  }

  return totalValue < 10
    ? Number(mathematicalFormula.toFixed(3))
    : Number(Math.floor(mathematicalFormula));
};
