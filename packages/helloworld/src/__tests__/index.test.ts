import { handler } from '../index';
import lambda from 'aws-lambda';

function buildEvent(overrides?: any): lambda.ScheduledEvent {
  return {
    ...overrides,
  };
}

describe('index', () => {
  it('returns greeting and time of day', async () => {
    const event = buildEvent({
      time: '2022-07-15T16:26:57.159Z',
    });
    const response = await handler(event);
    expect(response).toEqual("Hello, World!  It's 9:26 AM");
  });
});
