import {prisma} from "./db";
import "dotenv/config";

async function generateData(){
    await prisma.user.delete({
            where: {
                id: 4,
        }
    });

    const newUser = await prisma.user.create({
        data: {
            email: 'john.doe@coldmail.com',
            name: "johny",
            posts: {
                create: []
            }
        }
    })

    await prisma.post.create({
      data: {
        title: 'test',
        authorId: 5
      }
    })
}

generateData();