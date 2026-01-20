import { OpenPrismaFavoritesCities } from "@/repositories/prisma/prisma-favorites-cities-repository"
import { RemoveFavoriteCityUseCase } from "../remove-favorite-city"

export function makeRemoveFavoriteCityUseCase() {
  const favoriteCitiesRepository = new OpenPrismaFavoritesCities()
  const useCase = new RemoveFavoriteCityUseCase(favoriteCitiesRepository)

  return useCase
}