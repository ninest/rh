import { Button } from "../components/button";
import { useGame } from "../state/game";

export const IndexPage = () => {
  const { startGame } = useGame();
  return (
    <>
      <Button
        intent={"primary"}
        onClick={() => {
          startGame();
        }}
      >
        Start game
      </Button>
    </>
  );
};
