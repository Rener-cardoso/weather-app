import { CityWeather } from "@/entities/city-weather";
import { FavoriteCitiesRepository } from "@/repositories/contracts/favorite-cities-repository";

interface GetUserProfileUseCaseRequest {
  userId: string
}

interface ListFavoriteCitiesUseCaseResponse {
  cities: CityWeather[]
}

export class ListFavoriteCitiesUseCase {
  constructor(private favoritesRepository: FavoriteCitiesRepository) { }

  async execute({ userId }: GetUserProfileUseCaseRequest): Promise<ListFavoriteCitiesUseCaseResponse> {
    const cities = await this.favoritesRepository.listCitiesByUserId(userId)

    return {
      cities,
    }
  }
}