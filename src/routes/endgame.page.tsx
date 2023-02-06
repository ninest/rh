import { Button } from "../components/button";
import { useGame } from "../state/use-game";

export const EndgamePage = () => {
  const { status, money } = useGame();

  return (
    <>
      <div>Game over</div>
      <div>Finished with ${money}</div>
      <Button intent={"secondary"} href="/">Go home</Button>
    </>
  );
};
