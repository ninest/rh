import { useNavigate, useParams } from "react-router-dom";
import { findSecurityByTicker } from "../../securities/functions";

export const SecurityPage = () => {
  const navigate = useNavigate();
  const { ticker } = useParams<{ ticker: string }>();
  const security = findSecurityByTicker(ticker!);

  if (!security) return navigate("/portfolio");

  return (
    <>
      <div className="p-page">
        <div className="text-sm">{security.ticker}</div>
        <h1 className="text-2xl">{security.name}</h1>
      </div>
    </>
  );
};
