#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { WinterCameraStack } from '../lib/stacks/winter-camera-stack';
import { WinterInfoStack } from '../lib/stacks/winter-info-stack';

const ACCOUNT_ID = process.env.CDK_DEFAULT_ACCOUNT || '';

if (ACCOUNT_ID === '') {
  throw Error('No ACCOUNT_ID set');
}

const app = new cdk.App();

new WinterCameraStack(app, 'WinterCameraStack', {
  env: {
    region: 'us-east-1',
    account: ACCOUNT_ID,
  },
  terminationProtection: true,
});

new WinterInfoStack(app, 'WinterInfoStack', {
  env: {
    region: 'us-east-1',
    account: ACCOUNT_ID,
  },
  terminationProtection: true,
});

app.synth()