import { Button } from "../components/button";
import { Navbar } from "../components/navbar";
import { useGame } from "../state/use-game";

export const IndexPage = () => {
  const { startGame } = useGame();

  return (
    <>
      <Navbar />
      <div className="p-page">
        <Button
          intent={"primary"}
          onClick={() => {
            startGame({ days: 9000, money: 100 });
          }}
        >
          Start game
        </Button>
      </div>
    </>
  );
};
