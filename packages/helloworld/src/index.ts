import moment from 'moment';
import lambda from 'aws-lambda';

export async function handler(event: lambda.ScheduledEvent) {
  const time = moment(event.time);

  return `Hello, World!  It's ${time.format('LT')}`;
}
