-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "key" TEXT NOT NULL DEFAULT 'something',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
