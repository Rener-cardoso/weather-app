import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"
import { makeRemoveFavoriteCityUseCase } from "@/use-cases/factories/make-remove-favorite-city-use-case"

export async function removeFavoriteCity(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const removeFavoriteCityBodySchema = z.object({
    cityId: z.string(),
  })

  const { cityId } = removeFavoriteCityBodySchema.parse(request.query)

  const userId = request.user.sub

  const removeFavoriteCityUseCase = makeRemoveFavoriteCityUseCase()

  await removeFavoriteCityUseCase.execute({
    userId,
    cityId,
  })

  return reply.status(201).send()
}
