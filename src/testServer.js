import { rest } from 'msw';
import { setupServer } from 'msw/node';

const mockUsers = require('./__tests__/mockUsers.json');

//test server used when running jest tests
const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users', (req, resp, ctx) => {
    return resp(
      ctx.status(200),
      ctx.json(mockUsers)
    );
  }),

  rest.get('https://jsonplaceholder.typicode.com/users/:userId', (req, resp, ctx) => {
    const { userId } = req.params;
    return resp(
      ctx.status(200),
      ctx.json(mockUsers.find(element => element.id == userId))
    );
  }),

  rest.delete('https://jsonplaceholder.typicode.com/users/:userId', (req, resp, ctx) => {
    const { userId } = req.params;
    return resp(
      ctx.status(200),
      ctx.json({result: 'success', userId })
    );
  }),

  rest.get("*", (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: 'Please add request handler'})
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export {
  server,
  rest
}