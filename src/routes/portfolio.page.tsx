import { useGame } from "../state/game";

export const PortfolioPage = () => {
  const { status, money } = useGame();
  return (
    <>
      <div>Buying power ${money}</div>
    </>
  );
};
