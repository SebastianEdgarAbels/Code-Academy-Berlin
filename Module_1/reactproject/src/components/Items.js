import React, { useContext, useEffect, useState } from "react";
import { GamesContext } from "../context/gamesContext.js";

import Cards from "./Cards.js";

function Items() {
  const { games, error, fetchGamesAsync } = useContext(GamesContext);

  useEffect(() => {
    fetchGamesAsync();
  }, []);

  return (
    <div>
      {games &&
        games.map((game, i) => {
          return (
            <div key={i}>
              {" "}
              <Cards game={game} />
            </div>
          );
        })}
      {error && <p>${error}</p>}
    </div>
  );
}

export default Items;
