import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class WinterInfoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // table to manage data for each añoñi like date of birth, adoption date, ...
    const winterBasicInfoTable = new dynamodb.Table(this, id, {
      billingMode: dynamodb.BillingMode.PROVISIONED,
      tableName: 'WinterBasicInfo',
      readCapacity: 1,
      writeCapacity: 1,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      partitionKey: {name: 'name', type: dynamodb.AttributeType.STRING},
      pointInTimeRecovery: true,
    });

    // 👇 configure auto scaling on table
    const writeAutoScaling = winterBasicInfoTable.autoScaleWriteCapacity({
      minCapacity: 1,
      maxCapacity: 2,
    });
  
    // 👇 scale up when write capacity hits 75%
    writeAutoScaling.scaleOnUtilization({
      targetUtilizationPercent: 75,
    });
  }
}