import { PrismaClient } from "../src/generated/prisma";
import bcrypt from "bcryptjs";

// مدیریت گلوبال PrismaClient مشابه سایر فایل‌ها
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}

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
    // فقط در محیط production disconnect کنیم
    if (process.env.NODE_ENV === "production") {
      await prisma.$disconnect();
    }
  });
