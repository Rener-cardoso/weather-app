import { CityWeather } from "@/entities/city-weather"

export interface FavoriteCitiesRepository {
  addCity(city: CityWeather, userId: string): Promise<any>
  removeCity(userId: string, cityId: string): Promise<any>
  findCityByName(name: string, userId: string): Promise<any>
  listCitiesByUserId(userId: string): Promise<any>
}