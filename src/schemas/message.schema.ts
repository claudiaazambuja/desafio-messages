import Joi from 'joi';

export const messageSchema = Joi.object<Message>({
  text: Joi.string().required(),
  
});

export type Message = {
    text: string;
  };