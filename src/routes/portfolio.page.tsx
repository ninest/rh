import { useGame } from "../state/use-game";

export const PortfolioPage = () => {
  const { status, money } = useGame();
  return (
    <>
      <div>Buying power ${money}</div>
    </>
  );
};
