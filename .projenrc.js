const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Yury Kachubeyeu',
  authorAddress: 'yury_kachubeyeu@gmail.com',
  majorVersion: 1,
  cdkVersion: '2.74.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-fargate-public-dns',
  repositoryUrl: 'https://github.com/ykachube/cdk-fargate-public-dns.git',
  description: 'An AWS CDK module that listens for ECS Tasks to enter RUNNING state and then updates a Route 53 hosted zone with the public IP address attached to the task.',
  releaseToNpm: true,
  minNodeVersion: '16.14.0',
  catalog: {
    announce: false,
    twitter: 'ykachube',
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    '@types/prettier@2.6.0',
  ], /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
