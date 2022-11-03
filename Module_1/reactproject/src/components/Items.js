import React, { useEffect, useState } from "react";

function Items() {
  const [games, setGames] = useState();
  const [error, setError] = useState(null);

  const fetchGamesAsync = async () => {
    try {
      const url =
        "https://cab-cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games";
      const response = await fetch(url);
      const results = await response.json();
      // console.log("results :>> ", results);
      setGames(results);
    } catch (error) {
      setError(error.message);
      // console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    fetchGamesAsync();
  }, []);

  return (
    <div>
      {games.map((game, i) => {
        return <div key={i}>`${game}`</div>;
      })}
      {error && <p>${error}</p>}
    </div>
  );
}

export default Items;
