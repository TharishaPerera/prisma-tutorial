import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // create a user
    const user = await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john@doe.com',
        }
    })
    console.log(user)

    // get all users
    const users = await prisma.user.findMany({
        include: {
            articles: true
        }
    });
    console.log(users)

    // create an article and associate it with user
    const article = await prisma.article.create({
        data: {
            title: "first article",
            body: "first article",
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })
    console.log(article)

    // get all articles.
    const articles = await prisma.article.findMany()
    console.log(articles)

    // create user and article and associate them
    const user = await prisma.user.create({
        data: {
            name: "smith",
            email: "smith@sara.com",
            articles: {
                create: {
                    title: "test title",
                    body: "test body",
                }
            }
        }
    })
    console.log(user)

    // create another article
    const article = await prisma.article.create({
        data: {
            title: "articel 3",
            body: "body for article 3",
            author: {
                connect: {
                    id: 2
                }
            }
        }
    })
    console.log(article)

    users.forEach((user) => {
        console.log(`email: ${user.email} `)
        console.log('Articles')
        user.articles.forEach((article) => {
            console.log(`- Title: ${article.title}`)
        })
        console.log('\n')
    })

    // update data
    const user = await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            name: "updated",
        }
    })
    console.log(user)

    // remove data
    const article = await prisma.article.delete({
        where: {
            id: 2
        }
    })
    console.log(article)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (err) => {
        console.error(err)
        await prisma.$disconnect()
        process.exit(1)
    })

