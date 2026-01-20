import { OpenPrismaFavoritesCities } from "@/repositories/prisma/prisma-favorites-cities-repository";
import { ListFavoriteCitiesUseCase } from "../list-favorite-cities";

export function makeListFavoriteCitiesUseCase() {
  const favoriteCitiesRepository = new OpenPrismaFavoritesCities()
  const useCase = new ListFavoriteCitiesUseCase(favoriteCitiesRepository)

  return useCase;
}