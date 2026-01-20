import { makeGetWeatherNextFiveDaysByCityUseCase } from "@/use-cases/factories/make-get-weather-next-five-days-by-city-use-case"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

export async function getWeatherNextFiveDaysByCity(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const getWeatherQuerySchema = z.object({
    city: z.string().min(1, "City is required"),
  })

  const { city } = getWeatherQuerySchema.parse(request.query)

  const getWeatherNextFiveDaysByCityUseCase = makeGetWeatherNextFiveDaysByCityUseCase()

  const { weather } = await getWeatherNextFiveDaysByCityUseCase.execute({
    city,
  })

  return reply.status(200).send({
    weather,
  })
}
