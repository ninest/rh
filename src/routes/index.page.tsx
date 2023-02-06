import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { useGame } from "../state/use-game";

export const IndexPage = () => {
  const { status, startGame } = useGame();

  return (
    <>
      <Button
        intent={"primary"}
        onClick={() => {
          startGame({ days: 3, money: 100 });
        }}
      >
        Start game
      </Button>
    </>
  );
};
