import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { WinterModelConstruct } from '../constructs/winter-model-construct';

export class WinterCameraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new WinterModelConstruct(this, 'WinterModelConstruct', {
      accountId: props?.env?.account!,
    });
  }
}