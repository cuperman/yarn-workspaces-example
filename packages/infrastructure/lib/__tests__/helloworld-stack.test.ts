import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { HelloWorldStack } from '../helloworld-stack';

describe('HelloWorldStack', () => {
  const app = new cdk.App();
  const stack = new HelloWorldStack(app, 'MyStack');
  const template = Template.fromStack(stack);

  it('has a lambda function', () => {
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'index.handler',
      Runtime: 'nodejs14.x',
    });
  });
});
