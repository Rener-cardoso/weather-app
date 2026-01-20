import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"
import { makeAddFavoriteCityUseCase } from "@/use-cases/factories/make-add-favorite-city-use-case"

export async function addFavoriteCity(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const addFavoriteCityBodySchema = z.object({
    name: z.string().min(1),
    temperature: z.number(),
    tempMin: z.number(),
    tempMax: z.number(),
    humidity: z.number(),
    condition: z.string().min(1),
  })

  const favoriteCity = addFavoriteCityBodySchema.parse(request.body)

  const userId = request.user.sub

  const addFavoriteCityUseCase = makeAddFavoriteCityUseCase()

  await addFavoriteCityUseCase.execute({
    userId,
    city: favoriteCity,
  })

  return reply.status(201).send()
}
