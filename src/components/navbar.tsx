import { GameStatus, useGame } from "../state/use-game";

export const Navbar = () => {
  const { status, daysLeft } = useGame();

  return (
    <header className="border-b flex justify-between px-5 py-5">
      <div className="font-bold tracking-wide">Robbinghood</div>
      {status === GameStatus.STARTED && (
        <div className="tabular-nums">{daysLeft} days left</div>
      )}
    </header>
  );
};
