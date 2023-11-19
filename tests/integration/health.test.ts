import supertest from 'supertest';
import app from '../../src/app';

const api = supertest(app);

describe('GET /health', () => {
  it('deve retornar status 200 e a mensagem "I\'m ok!"', async () => {
    const response = await api.get('/health');
    expect(response.status).toBe(200);
    expect(response.text).toBe("I'm ok!");
  });
});
