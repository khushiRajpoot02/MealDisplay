import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);
  function addFavorite(id) {
    setFavoriteIds((curentFavoIds) => 
      [...curentFavoIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteIds((curentFavoIds) => {
     return  curentFavoIds.filter((mealId) =>  mealId !== id);
    });
  }

  const value = {
    ids: favoriteIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
