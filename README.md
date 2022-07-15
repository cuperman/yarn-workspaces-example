# Yarn Workspace Example

An example mono-repo that combines the following technologies:

* Yarn Workspaces - to manage packages and cross dependencies
* Typescript - for type definitions in Javascript
* Jest - for unit tests
* AWS CDK - for infrastructure as code

## Usage

Run commands from the root to apply to all relevant packages:

```bash
yarn install # install dependencies in all packages
yarn clean # clean build artifacts in all packages
yarn build # build all packages
yarn test # test all packages
yarn cdk synth # synthesize the infrastructure
```

Or run commands for an explicit workspace:

```bash
yarn workspace helloworld add moment # install moment to helloworld
yarn workspace helloworld add --dev @types/aws-lambda # install @types/aws-lambda as a dev dependency
yarn workspace helloworld test --watch # run and watch the tests in helloworld
```

Deploy the infrastructure to AWS using aws-vault:

```bash
aws-vault exec my-profile -- yarn cdk deploy HelloWorld
```