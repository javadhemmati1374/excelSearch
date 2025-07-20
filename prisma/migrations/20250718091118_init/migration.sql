-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UploadedFile" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "recordCount" INTEGER NOT NULL,
    "uploadDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,

    CONSTRAINT "UploadedFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhoneData" (
    "id" TEXT NOT NULL,
    "fileId" TEXT NOT NULL,
    "telNum" TEXT NOT NULL,
    "customTitle" TEXT,
    "classificationName" TEXT,
    "parentClassificationName" TEXT,
    "city" TEXT,
    "address" TEXT,
    "regCity" TEXT,
    "regProvince" TEXT,

    CONSTRAINT "PhoneData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE INDEX "PhoneData_telNum_idx" ON "PhoneData"("telNum");

-- AddForeignKey
ALTER TABLE "PhoneData" ADD CONSTRAINT "PhoneData_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "UploadedFile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
