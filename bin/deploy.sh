#!/usr/bin/env bash

# This script riuns tests and deploys
# This script does not bootstrap the account

npm install

echo "Running tests"
npm test || exit 1

echo "Deploying stacks"
npx cdk deploy WinterCameraStack WinterInfoStack