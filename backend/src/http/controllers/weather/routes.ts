import { FastifyInstance } from "fastify";
import { getWeatherByCity } from "./get-weather-by-city";
import { getWeatherNextFiveDaysByCity } from "./get-weather-next-five-days-by-city";

export async function weatherRoutes(app: FastifyInstance) {
  app.get('/weather/get-by-city', getWeatherByCity)
  app.get('/weather/get-next-five-days-by-city', getWeatherNextFiveDaysByCity)
}