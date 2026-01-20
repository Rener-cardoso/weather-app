import { FavoriteCitiesRepository } from "@/repositories/contracts/favorite-cities-repository"
import { FavoriteCityAlreadyExistsError } from "./errors/favorite-city-already-exists-error"
import { CityWeather } from "@/entities/city-weather"

interface AddFavoriteCityUseCaseRequest {
  userId: string
  city: CityWeather;
}

export class AddFavoriteCityUseCase {
  constructor(
    private favoritesRepository: FavoriteCitiesRepository
  ) {}

  async execute({
    userId,
    city,
  }: AddFavoriteCityUseCaseRequest): Promise<void> {

    const alreadyExists =
      await this.favoritesRepository.findCityByName(
        city.name,
        userId
      )

    if (alreadyExists) {
      throw new FavoriteCityAlreadyExistsError()
    }

    await this.favoritesRepository.addCity(
      city,
      userId
    )
  }
}
