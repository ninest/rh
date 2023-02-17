import { Link } from "react-router-dom";
import { Security } from "../../securities/types";
import { useGame } from "../../state/use-game";
import { round } from "../../utils/number.utils";

export const SecurityListing = ({ stock }: { stock: Security }) => {
  const { numSharesOwned } = useGame();
  const currentValue = round(stock.values.at(-1) || stock.startingValue)
  return (
    <Link
      to={`/security/${stock.ticker}`}
      className="flex items-center justify-between"
    >
      <div>
        <div>{stock.ticker}</div>
        {/* How many owed? */}
        <div className="text-xs text-gray-500">
          {numSharesOwned(stock.ticker)} shares
        </div>
      </div>
      <div>
        {/* TODO: display chart */}
        {JSON.stringify(stock.values.slice(-5))}
      </div>
      <div className="bg-green-300 font-medium text-sm min-w-[50px] text-center tabular-nums px-4 py-1 rounded-md">
        {/* Current value */}${currentValue}
      </div>
    </Link>
  );
};
