import prisma from '@/database';

async function findMessage(id: number) {
    return prisma.message.findFirst({
        where: {
            id,
        }
    });
}

async function createMessage(text) {
    const result = await prisma.message.create({
        data: {
         text
        }
    })

    return result;
}

async function messages() {
    return prisma.message.findMany()
}

const messageRepository = {
    messages,
    createMessage,
    findMessage
};

export default messageRepository;