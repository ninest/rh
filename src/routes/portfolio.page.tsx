import { useGame } from "../state/use-game";

export const PortfolioPage = () => {
  const { status, money, stocks } = useGame();
  return (
    <>
      <pre>{JSON.stringify(stocks)}</pre>
      <div>Buying power ${money}</div>
    </>
  );
};
