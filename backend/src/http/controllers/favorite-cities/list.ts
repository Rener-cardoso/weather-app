import { makeListFavoriteCitiesUseCase } from "@/use-cases/factories/make-list-favorite-cities-use-case"
import { FastifyReply, FastifyRequest } from "fastify"

export async function listFavoriteCities(request: FastifyRequest, reply: FastifyReply) {
  const getCitiesList = makeListFavoriteCitiesUseCase()

  const { cities } = await getCitiesList.execute({
    userId: request.user.sub,
  })

  return reply.status(200).send({
    cities,
  })
}