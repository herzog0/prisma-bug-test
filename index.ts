import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.user.update({
        where: {
            id: 1,
            name: {
                not: "Bob"
            }
        },
        data: {
            name: "Alice"
        }
    })

}

main().then(() => console.log("done")).catch(console.error)