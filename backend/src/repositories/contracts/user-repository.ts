// import { Prisma, User } from "@prisma/client";

export interface UsersRepository {
  // findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<any | null>
  create(data: any): Promise<any>
}