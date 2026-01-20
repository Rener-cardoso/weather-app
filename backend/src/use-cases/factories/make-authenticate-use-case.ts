import { AuthenticateUseCase } from "../authenticate"
import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository"

export function makeAuthenticateUseCase() {
  const usersRepository = new PrismaUserRepository()
  const useCase = new AuthenticateUseCase(usersRepository)

  return useCase
}