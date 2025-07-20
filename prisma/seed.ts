import { PrismaClient } from "../src/generated/prisma";
import bcrypt from "bcryptjs"; // برای هش کردن رمز عبور

const prisma = new PrismaClient();

async function main() {
  // Check if admin user already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { username: "admin" },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("admin", 10); // هش کردن "admin"
    await prisma.user.create({
      data: {
        username: "admin",
        password: hashedPassword,
      },
    });
    console.log("Admin user created successfully!");
  } else {
    console.log("Admin user already exists.");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
