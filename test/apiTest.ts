import got from "got";
describe('API Requests', () => {
    it('should fetch a post successfully', async () => {
        const response = await got('https://jsonplaceholder.typicode.com/posts/1');
        const body = JSON.parse(response.body);

        expect(response.statusCode).toBe(200);
        expect(body).toHaveProperty('id', 1);
        expect(body).toHaveProperty('title');
        expect(body).toHaveProperty('body');
    });

    it('should create a new post successfully', async () => {
        const newPost = {
            title: 'foo',
            body: 'bar',
            userId: 1
        };

        const response = await got.post('https://jsonplaceholder.typicode.com/posts', {
            json: newPost,
            responseType: 'json'
        });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('title', newPost.title);
        expect(response.body).toHaveProperty('body', newPost.body);
        expect(response.body).toHaveProperty('userId', newPost.userId);
    });
});
