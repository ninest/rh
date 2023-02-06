import { useGame } from "../state/game";

export const EndgamePage = () => {
  const { status, money } = useGame();

  return (
    <>
      <div>Game over</div>
      <div>Finished with ${money}</div>
    </>
  );
};
