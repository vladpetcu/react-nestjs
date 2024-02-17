import { PrismaClient } from '@prisma/client';

export const seed = async (prismaClient: PrismaClient) =>
  // Seed some users
  await prismaClient.user.createMany({
    data: [
      { email: 'vlad.petcu@nest-starter.com', name: 'Vlad Petcu' },
      { email: 'john.doe@nest-starter.com', name: 'John Doe' },
    ],
  });
