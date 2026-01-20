import { WeatherRepository } from "@/repositories/contracts/weather-repository"
import { CityNotFoundError } from "./errors/city-not-found-error"
import { CityWeather } from "@/entities/city-weather"

interface GetWeatherByCityUseCaseRequest {
  city: string
}

interface GetWeatherByCityUseCaseResponse {
  weather: CityWeather;
}

export class GetWeatherNextFiveDaysByCityUseCase {
  constructor(
    private weatherRepository: WeatherRepository
  ) {}

  async execute({
    city,
  }: GetWeatherByCityUseCaseRequest): Promise<GetWeatherByCityUseCaseResponse> {
    const weather = await this.weatherRepository.getNextFiveDaysByCity(city)

    if (!weather) {
      throw new CityNotFoundError()
    }

    return {
      weather,
    }
  }
}
