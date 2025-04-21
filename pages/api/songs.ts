import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const songs = await prisma.song.findMany()
    res.status(200).json(songs)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch songs' })
  }
}
