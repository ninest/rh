import { Button } from "../../components/button";
import { Debug } from "../../components/debug";
import { useGame } from "../../state/use-game";
import { SecurityListing } from "./security-listing";

export const PortfolioPage = () => {
  const { status, money, totalEquity, securities, buyMarket, sellMarket } =
    useGame();
  const crypto = securities.filter((sec) => sec.type === "CRYPTO");
  const stocks = securities.filter((sec) => sec.type === "STOCK");

  return (
    <>
      <div className="p-page">
        <div className="text-2xl tabular-nums">${totalEquity}</div>

        <Debug data={{ securities }} className="my-5" />
        {/* TODO: chart */}

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
                <Button onClick={() => buyMarket(stock.ticker, 1)}>
                  Buy 1
                </Button>
                <Button onClick={() => sellMarket(stock.ticker, 1)}>
                  Sell 1
                </Button>
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
      </div>
    </>
  );
};
