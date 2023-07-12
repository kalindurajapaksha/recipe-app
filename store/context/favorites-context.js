import React, { useState } from "react";
export const FavoritesContext = React.createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  const addFavoritesHandler = (id) => {
    setFavoriteMealIds((currIds) => [id, ...currIds]);
  };
  const removeFavoritesHandler = (id) => {
    setFavoriteMealIds((currIds) => currIds.filter((mealId) => mealId !== id));
  };
  return (
    <FavoritesContext.Provider
      value={{
        ids: favoriteMealIds,
        addFavorites: addFavoritesHandler,
        removeFavorites: removeFavoritesHandler,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
