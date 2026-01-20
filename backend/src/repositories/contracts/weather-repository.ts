export interface WeatherRepository {
  getByCity(city: string): Promise<any>
  getNextFiveDaysByCity(city: string): Promise<any>
}