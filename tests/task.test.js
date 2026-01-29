const request = require('supertest');
const app = require('../src/app');

describe('Task API', () => {
  it('GET /tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
  });

  it('POST /tasks', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Test' });
    expect(res.statusCode).toBe(201);
  });

  it('DELETE /tasks', async () => {
    const post = await request(app).post('/tasks').send({ title: 'Delete' });
    const res = await request(app).delete(`/tasks/${post.body.id}`);
    expect(res.statusCode).toBe(204);
  });
});