import { FastifyInstance } from "fastify";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { addFavoriteCity } from "./create";
import { removeFavoriteCity } from "./remove";
import { listFavoriteCities } from "./list";

export async function favoriteRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.post('/favorites', addFavoriteCity)
  app.get('/favorites/list', listFavoriteCities)
  app.delete('/favorites', removeFavoriteCity)
}