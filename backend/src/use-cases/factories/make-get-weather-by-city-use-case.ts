import { OpenWeatherRepository } from "@/repositories/weather-repository";
import { GetWeatherByCityUseCase } from "../get-weather-by-city";

export function makeGetWeatherByCityUseCase() {
  const weatherRepository = new OpenWeatherRepository()
  const useCase = new GetWeatherByCityUseCase(weatherRepository)

  return useCase;
}