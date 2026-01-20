import { OpenPrismaFavoritesCities } from "@/repositories/prisma/prisma-favorites-cities-repository"
import { AddFavoriteCityUseCase } from "../add-favorite-city"

export function makeAddFavoriteCityUseCase() {
  const favoriteCitiesRepository = new OpenPrismaFavoritesCities()
  const useCase = new AddFavoriteCityUseCase(favoriteCitiesRepository)

  return useCase
}