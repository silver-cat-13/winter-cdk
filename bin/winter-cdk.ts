#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { WinterCameraStack } from '../lib/winter-camera-stack';

const ACCOUNT_ID = process.env.ACCOUNT_ID || '';

if (ACCOUNT_ID === '') {
  throw Error('No ACCOUNT_ID set');
}

const app = new cdk.App();
new WinterCameraStack(app, 'WinterCdkStack', {
  env: {
    region: 'us-east-1',
    account: ACCOUNT_ID,
  },
  terminationProtection: true,
});