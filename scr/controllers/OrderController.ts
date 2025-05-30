import { PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient()

export class OrderController {
  static async create({ title, price }: { title: string; price: number }) {
    return await prisma.order.create({
      data: { title, price }
    })
  }

  static async getAll() {
    return await prisma.order.findMany()
  }

  static async getById({ id }: { id: number }) {
    return await prisma.order.findUnique({
      where: { id }
    })
  }

  static async deleteById({ id }: { id: number }) {
    return await prisma.order.delete({
      where: { id }
    })
  }
}
