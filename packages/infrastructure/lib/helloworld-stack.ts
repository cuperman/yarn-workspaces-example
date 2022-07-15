import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import path from 'path';

export class HelloWorldStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new nodejs.NodejsFunction(this, 'HelloWorld', {
      projectRoot: path.join(__dirname, '../../..'),
      entry: path.join(__dirname, '../../helloworld/src/index.ts'),
      handler: 'handler',
    });
  }
}
