import messageRepository from '@/repositories/message.repository';
import { notFoundError } from '../errors/not-found-error';


async function create(text) {
    const newMessage = await messageRepository.createMessage(text)

    return newMessage.id
}


async function getAllMessages() {
    const res = await messageRepository.messages()

    return res;
}

async function getMessageById(id: number) {
    if (typeof id !== 'number') {
        throw notFoundError()
    }

    return await messageRepository.findMessage(id);
}

const messageService = {
    create,
    getAllMessages,
    getMessageById
};

export default messageService;