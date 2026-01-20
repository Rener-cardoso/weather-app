export class FavoriteCityAlreadyExistsError extends Error {
  constructor() {
    super('Favorite city already exists.')
  }
}