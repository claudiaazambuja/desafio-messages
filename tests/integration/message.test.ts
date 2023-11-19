import supertest from 'supertest';
import app from '../../src/app';
import prisma from '@/database';
import { createMessage } from '../factories/message-factory';
import httpStatus from 'http-status';

const api = supertest(app);

beforeEach(async () => {
    await prisma.message.deleteMany();
});
describe('POST /messages', () => {
    it('deve retornar status OK e a resposta desejada', async () => {
        const requestBody = await createMessage()
        const response = await api
            .post('/messages')
            .send(requestBody);

        expect(response.status).toBe(httpStatus.CREATED);

    });

    it('deve retornar status 404 quando a rota nao existir', async () => {
        const requestBody = await createMessage()
        const response = await api
            .post('/sem-rota')
            .send(requestBody);

        expect(response.status).toBe(404);

    });
});


describe('GET /messages/:id', () => {
    it('deve retornar status OK e a mensagem correta', async () => {
        const createdMessage = await createMessage();

        const postResponse = await api
            .post('/messages')
            .send(createdMessage);

        const messageId = postResponse.body.id;
        const getResponse = await api
            .get(`/messages/${messageId}`);

        expect(getResponse.status).toBe(httpStatus.OK);
        expect(getResponse.body).toEqual(createdMessage);
    }, 1000);

    it('deve retornar status 404 se a mensagem não for encontrada', async () => {
        const nonExistentId = "lallalala";
        const getResponse = await api
            .get(`/messages/${nonExistentId}`);

        expect(getResponse.status).toBe(httpStatus.NOT_FOUND);
    }, 1000);
});

describe('GET /messages/', () => {
    it('deve retornar status 200 quando acessar a rota messages', async () => {
        const response = await api.get('/messages');
        expect(response.status).toBe(200);
    }, 1000);
});
