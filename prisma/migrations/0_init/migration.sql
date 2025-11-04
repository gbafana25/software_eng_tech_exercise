-- CreateTable
CREATE TABLE "GroceryItem" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "GroceryItem_pkey" PRIMARY KEY ("id")
);

