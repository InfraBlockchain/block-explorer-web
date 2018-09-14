// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  appName: 'YOSEMITE Blockchain Explorer',
  networkName: 'Public Test-Net',
  logoUrl: '/assets/logo.png',
  apiUrl: 'http://localhost:9000',
  blockchainUrl: 'http://localhost:8888',
  chainId: '6376573815dbd2de2d9929027a94aeab3f6e60e87caa953f94ee701ac8425811',
  // apiUrl: 'http://testnet-explorer-api.yosemitelabs.org',
  // blockchainUrl: 'http://testnet.yosemitelabs.org:8888',
  // chainId: '6376573815dbd2de2d9929027a94aeab3f6e60e87caa953f94ee701ac8425811',
  useChain: true
};
