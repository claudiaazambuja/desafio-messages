import messageController from '@/controllers/message.controller';
import { validateSchemaMiddleware } from '@/middlewares/validate-middleware';
import { messageSchema } from '@/schemas/message.schema';
import { Router } from 'express';


const messageRouter = Router();

messageRouter
    .get('/', messageController.allMessages)
    .get('/:id', messageController.messageById)
    .post('/', validateSchemaMiddleware(messageSchema), messageController.newMessage)

export { messageRouter };