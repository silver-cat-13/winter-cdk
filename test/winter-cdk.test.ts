import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { WinterCameraStack } from '../lib/stacks/winter-camera-stack';
import { WinterInfoStack } from '../lib/stacks/winter-info-stack';

test('Test WinterCameraStack', () => {
  const app = new cdk.App();
    // WHEN
  const stack = new WinterCameraStack(app, 'WinterCameraStackTest');
    // THEN
  const template = Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});

test('Test WinterInfoStack', () => {
    const app = new cdk.App();
      // WHEN
    const stack = new WinterInfoStack(app, 'WinterInfoStackTest');
      // THEN
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });