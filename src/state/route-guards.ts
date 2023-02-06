import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GameStatus, useGame } from "./game";

export const useRouteGuards = () => {
  const { status } = useGame();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    switch (status) {
      case GameStatus.NOT_STARTED: {
        if (!["/"].includes(location.pathname)) {
          navigate("/");
        }
        break;
      }
      case GameStatus.STARTED: {
        if (!["/portfolio"].includes(location.pathname)) {
          navigate("/portfolio");
        }
        break;
      }
      case GameStatus.ENDED: {
        if (!["/endgame"].includes(location.pathname)) {
          navigate("/endgame");
        }
        break;
      }
    }
  }, [status]);
};
