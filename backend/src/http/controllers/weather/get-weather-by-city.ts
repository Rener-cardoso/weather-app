import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"
import { makeGetWeatherByCityUseCase } from "@/use-cases/factories/make-get-weather-by-city-use-case"

export async function getWeatherByCity(
  request: FastifyRequest,
  reply: FastifyReply
) {

  const getWeatherQuerySchema = z.object({
    city: z.string().min(1, "City is required"),
  })

  const { city } = getWeatherQuerySchema.parse(request.query)

  const getWeatherByCityUseCase = makeGetWeatherByCityUseCase()

  const { weather } = await getWeatherByCityUseCase.execute({
    city,
  })

  return reply.status(200).send({
    weather,
  })
}
