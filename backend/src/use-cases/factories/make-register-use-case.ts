import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository"
import { RegisterUseCase } from "../register"

export function makeRegisterUseCase() {
  const usersRepository = new PrismaUserRepository()
  const useCase = new RegisterUseCase(usersRepository)

  return useCase
}