import { Prisma } from '@prisma/client'

import prisma from '../lib/prisma'

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alice',
    email: 'alice@example.com',
    posts: {
      create: [
        {
          title: 'OK Alice',
          content: 'This is main content',
          published: true,
        }
      ]
    },
  }
]

async function main() {
  // eslint-disable-next-line no-console
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u
    })
    // eslint-disable-next-line no-console
    console.log(`Created user with id: ${user.id}`)
  }
  // eslint-disable-next-line no-console
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
