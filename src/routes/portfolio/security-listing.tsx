import { Security } from "../../securities/types";

export const SecurityListing = ({ stock }: { stock: Security }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div>{stock.ticker}</div>
        {/* How many owed? */}
        <div className="text-xs text-gray-500">X shares</div>
      </div>
      <div>
        {/* TODO: display chart */}
        {JSON.stringify(stock.values.slice(-5))}
      </div>
      <div className="bg-green-300 tabular-nums px-4 py-1 rounded-md">
        {/* Current value */}${stock.values.at(-1) || stock.startingValue}
      </div>
    </div>
  );
};
