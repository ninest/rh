import { Debug } from "../components/debug";
import { useGame } from "../state/use-game";

export const PortfolioPage = () => {
  const { status, money, stocks } = useGame();
  return (
    <>
      <Debug data={{ stocks }} className="mb-5" />
      <div>Buying power ${money}</div>
    </>
  );
};
