import messageService from '@/services/message.service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

async function allMessages(req: Request, res: Response) {
    const messages = await messageService.getAllMessages()

    return res.status(httpStatus.OK).send(messages);
}

async function messageById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const message = await messageService.getMessageById(id)

    return res.status(httpStatus.OK).send(message);
}

async function newMessage(req: Request, res: Response) {
    const { text } = req.body;
    const createdMessage = await messageService.create(text)

    return res.status(httpStatus.CREATED).json(createdMessage)
}


const messageController = {
    allMessages,
    messageById,
    newMessage
};

export default messageController;