import { Debug } from "../../components/debug";
import { useGame } from "../../state/use-game";
import { SecurityListing } from "./security-listing";

export const PortfolioPage = () => {
  const { status, money, securities } = useGame();
  const crypto = securities.filter((sec) => sec.type === "CRYPTO");
  const stocks = securities.filter((sec) => sec.type === "STOCK");

  return (
    <>
      <Debug data={{ securities }} className="mb-5" />

      <div className="flex items-center justify-between">
        <div>Buying power</div>
        <div className="tabular-nums">${money}</div>
      </div>

      <section className="mt-5">
        <h2 className="text-medium text-xl">Crypto</h2>

        <div className="divide-y">
          {crypto.map((stock) => (
            <div key={stock.ticker} className="py-2">
              <SecurityListing stock={stock} />
            </div>
          ))}
        </div>
      </section>
      <section className="mt-5">
        <h2 className="text-medium text-xl">Stocks</h2>

        <div className="divide-y">
          {stocks.map((stock) => (
            <div key={stock.ticker} className="py-2">
              <SecurityListing stock={stock} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
