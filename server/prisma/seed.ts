import { PrismaClient } from '@prisma/client';

const fs = require('fs');
const path = require('path');
const dirPath = path.resolve(__dirname, './seeds');

type Seed = (client: PrismaClient) => Promise<void>;

const prismaClient = new PrismaClient();
const seedFiles = fs.readdirSync(dirPath);

async function main() {
  const runSeedFiles = (await prismaClient.seed.findMany()).map(
    (seedEntry) => seedEntry.file,
  );

  for (const seedFile of seedFiles) {
    const { seed } = require(`./seeds/${seedFile}`) as { seed: Seed };
    if (!runSeedFiles.includes(seedFile)) {
      await seed(prismaClient);
      await prismaClient.seed.create({
        data: { file: seedFile, runAt: new Date() },
      });
    }
  }
}

main()
  .then(async () => {
    await prismaClient.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
