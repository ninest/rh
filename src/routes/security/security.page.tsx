import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { Debug } from "../../components/debug";
import { Title } from "../../components/title";
import { getLastValue } from "../../securities/functions";
import { useGame } from "../../state/use-game";

export const SecurityPage = () => {
  const navigate = useNavigate();
  const { ticker } = useParams<{ ticker: string }>();
  const { buyMarket, sellMarket, numSharesOwned, findSecurityByTicker } =
    useGame();
  const security = findSecurityByTicker(ticker!);

  if (!security) return navigate("/portfolio");

  return (
    <>
      <div className="p-page">
        <div className="text-sm">{security.ticker}</div>
        <Title intent="h1">{security.name}</Title>
        <div className="text-2xl tabular-nums">${getLastValue(security)}</div>

        {/* TODO: chart */}
        <div className="mt-2">
          <Debug data={security} />
        </div>

        <section className="mt-2 flex items-center justify-between space-x-2">
          <Button
            onClick={() => buyMarket(security.ticker, 1)}
            className="w-full"
          >
            Buy
          </Button>
          <Button
            onClick={() => sellMarket(security.ticker, 1)}
            className="w-full"
          >
            Sell
          </Button>
        </section>

        <section className="mt-2">
          <h2 className="text-xl">Your Position</h2>
          <div className="grid grid-cols-2">
            <div>
              <div>Shares</div>
              <div className="tabular-nums">
                {numSharesOwned(security.ticker)}
              </div>
            </div>
            <div>
              <div>Market value</div>
              <div className="tabular-nums">${getLastValue(security)}</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
