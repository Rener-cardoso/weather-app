import { FavoriteCitiesRepository } from "@/repositories/contracts/favorite-cities-repository"

interface removeFavoriteCityUseCaseRequest {
  userId: string;
  cityId: string;
}

export class RemoveFavoriteCityUseCase {
  constructor(
    private favoritesRepository: FavoriteCitiesRepository
  ) {}

  async execute({
    userId,
    cityId,
  }: removeFavoriteCityUseCaseRequest): Promise<void> {

    await this.favoritesRepository.removeCity(userId, cityId);
  }
}
