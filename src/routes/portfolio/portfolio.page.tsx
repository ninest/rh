import { Button } from "../../components/button";
import { Debug } from "../../components/debug";
import { Title } from "../../components/title";
import { useGame } from "../../state/use-game";
import { round } from "../../utils/number.utils";
import { SecurityListing } from "./security-listing";

export const PortfolioPage = () => {
  const { status, money, totalEquity, securities, buyMarket, sellMarket } =
    useGame();
  const crypto = securities.filter((sec) => sec.type === "CRYPTO");
  const stocks = securities.filter((sec) => sec.type === "STOCK");

  return (
    <>
      <div className="p-page">
        <Title intent="h1">${round(totalEquity)}</Title>

        <Debug data={{ securities }} className="my-5" />
        {/* TODO: chart */}

        <div className="flex items-center justify-between">
          <div>Buying power</div>
          <div className="tabular-nums">${round(money)}</div>
        </div>

        <section className="mt-5">
          <Title intent="h2">Crypto</Title>

          <div className="divide-y">
            {crypto.map((stock) => (
              <div key={stock.ticker} className="py-2">
                <SecurityListing stock={stock} />
              </div>
            ))}
          </div>
        </section>
        <section className="mt-5">
        <Title intent="h2">Stocks</Title>

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
