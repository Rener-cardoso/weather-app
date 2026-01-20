import { prisma } from "@/lib/prisma";
import { UsersRepository } from "../contracts/user-repository";

export class PrismaUserRepository implements UsersRepository {
  async create(data: any): Promise<any> {
    const user = await prisma.user.create({
      data,
    })

    return user
  }

  async findByEmail(email: string): Promise<any | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      }
    })

    return user
  }
} 