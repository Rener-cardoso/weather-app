import { env } from "@/env";
import { WeatherRepository } from "./contracts/weather-repository";

export class OpenWeatherRepository implements WeatherRepository {
  async getByCity(city: string): Promise<any> {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&lang=pt_br&appid=${env.OPENWEATHER_API_KEY}`
    )

    if (!response.ok) {
      throw new Error("Unable to fetch weather data")
    }

    const data = await response.json()

    return {
      city: data.name,
      temperature: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      condition: data.weather[0].description,
    }
  }

  async getNextFiveDaysByCity(city: string): Promise<any> {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
        city
      )}&units=metric&lang=pt_br&appid=${env.OPENWEATHER_API_KEY}`
    )

    if (!response.ok) {
      throw new Error("Unable to fetch weather data")
    }

    const data = await response.json()
    console.log("isso é só um teste:sdfgsdgsfdfgsdfgsdfgsdfgsdfg ", data.list[0])
    return {
      // city: data.name,
      // temperature: data.main.temp,
      // tempMin: data.main.temp_min,
      // tempMax: data.main.temp_max,
      // humidity: data.main.humidity,
      // condition: data.weather[0].description,
      teste: "teste"
    }
  }
}