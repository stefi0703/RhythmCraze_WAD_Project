import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (concert) => {
        if (!favorites.some(fav => fav.id === concert.id)) {
            setFavorites((prevFavorites) => [...prevFavorites, concert]);
        }
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

