const request = require('supertest')
describe('GET /user', function() {
    it('responds with json', function(done) {
      request('https://jsonplaceholder.typicode.com')
        .get('/posts/1/comments')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  it('responds with a 200 and a message about baskets', (done) => {
    request('https://jsonplaceholder.typicode.com')
      .post('/posts')
      .send({
        "title": "Test",
        "body": "Test",
        "userId": 1
      })
      .expect(`Content-Type`,/json/)
      .expect(201, done)
  })
