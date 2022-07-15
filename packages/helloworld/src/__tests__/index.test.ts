import { handler } from '../index';

describe('index', () => {
  it('returns Hello, World!', async () => {
    const response = await handler();
    expect(response).toEqual('Hello, World!');
  });
});
