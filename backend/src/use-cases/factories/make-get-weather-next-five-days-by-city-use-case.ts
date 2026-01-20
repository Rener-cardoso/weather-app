import { OpenWeatherRepository } from "@/repositories/weather-repository";
import { GetWeatherNextFiveDaysByCityUseCase } from "../get-weather-next-five-days-by-city";

export function makeGetWeatherNextFiveDaysByCityUseCase() {
  const weatherRepository = new OpenWeatherRepository()
  const useCase = new GetWeatherNextFiveDaysByCityUseCase(weatherRepository)

  return useCase;
}