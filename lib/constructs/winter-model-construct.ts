import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface WinterModelConstructProps {
  accountId: string;
}

export class WinterModelConstruct extends Construct {
    constructor(scope: Construct, id: string, props: WinterModelConstructProps) {
      super(scope, id);

      const bucketName = 'winter-model-data';

      new s3.Bucket(this, bucketName, {
        blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
        bucketName: bucketName,
      });
    }
  }
  