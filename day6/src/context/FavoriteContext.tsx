import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ItemMealFavorite } from "../types/MealType";

export const FavoriteMealContext = createContext(null);

export default function FavoriteContext({ children }: any) {
  const [favorites, setFavorites] = useState([]);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  //Liste des plats favoris
  const getFavorites = async () => {
    try {
      const data = await AsyncStorage.getItem("favorites");
      const parsedData = data ? JSON.parse(data) : []; // Parse correctement

      setFavorites(parsedData);
    } catch (error) {
      console.log("error favorite: ", error);
    }
  };

  // Fonction pour ajouter un plat aux favoris
  const addFavorite = async (data: ItemMealFavorite) => {
    try {
      const existingData = await AsyncStorage.getItem("favorites");

      const parsedData = existingData ? JSON.parse(existingData) : [];

      const updateFavorites = [...parsedData, data];

      await AsyncStorage.setItem("favorites", JSON.stringify(updateFavorites));
      setIsLiked(true);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  // Vérifier si un plat est dans les favoris
  const isFavorite = (id: string) => {
    const isFav = favorites.some((favorite) => favorite.idMeal === id);
    setIsLiked(isFav);
  };

  // Fonction pour supprimer un plat aux favoris
  const delFavorite = async (id: string) => {
    try {
      const updateFavorite = favorites.filter(
        (favorite) => favorite.idMeal !== id
      );

      await AsyncStorage.setItem("favorites", JSON.stringify(updateFavorite));
      setFavorites(updateFavorite);
      setIsLiked(false);
    } catch (error) {
      console.log("ERROR DEL FAV: ", error);
    }
  };

  const clearAll = async () => {
    await AsyncStorage.removeItem("favorites");
    setFavorites([]);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <FavoriteMealContext.Provider
      value={{
        favorites,
        isLiked,
        isFavorite,
        getFavorites,
        addFavorite,
        delFavorite,
        clearAll,
      }}
    >
      {children}
    </FavoriteMealContext.Provider>
  );
}
