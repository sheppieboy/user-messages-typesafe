import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //Delete all User and Message records that is in the db
  await prisma.message.deleteMany();
  await prisma.user.deleteMany();

  //Add new data to the db
  await prisma.user.create({
    data: {
      name: "Luke",
      messages: {
        create: [
          {
            body: "My birthday is tomorrow",
          },
          {
            body: "I'm not sure what I want for my birthday",
          },
        ],
      },
    },
  });

  await prisma.user.create({
    data: {
      name: "Dan",
      messages: {
        create: [
          {
            body: "I played triple (AAA) hockey as a defensemen",
          },
          {
            body: "I quit playing competitive hockey before there was a draft to the OHL",
          },
        ],
      },
    },
  });

  await prisma.user.create({
    data: {
      name: "Jake",
      messages: {
        create: [
          {
            body: "My 20 page law class essay is taking way too much time",
          },
          {
            body: "What should I write my 20 page law class essay about?",
          },
        ],
      },
    },
  });
}

main().then(() => {
  console.log("Data has been seeded to the database");
});
