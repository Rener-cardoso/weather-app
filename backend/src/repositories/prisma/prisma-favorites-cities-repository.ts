import { prisma } from "@/lib/prisma";
import { FavoriteCitiesRepository } from "../contracts/favorite-cities-repository";
import { CityWeather } from "@/entities/city-weather";

export class OpenPrismaFavoritesCities implements FavoriteCitiesRepository {
  async addCity(city: CityWeather, userId: string): Promise<any> {
    const user = await prisma.city.create({
      data: {
        ...city,
        user_id: userId,
      }
    })

    return user
  }

  async listCitiesByUserId(userId: string): Promise<any> {
    const cities = await prisma.city.findMany({
      where: {
        user_id: userId,
      }
    })

    return cities
  }

  async removeCity(userId: string, cityId: string): Promise<any> {
    await prisma.city.delete({
      where: {
        id: cityId,
        user_id: userId,
      }
    })
  }

  async findCityByName(name: string, userId: string): Promise<any> {
    const user = await prisma.city.findFirst({
      where: {
        name,
        user_id: userId,
      }
    })

    return user
  }
}