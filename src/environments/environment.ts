// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,

  appName: 'YOSEMITE Explorer',
  networkName: 'Main Net',
  logoUrl: '/assets/logo.png',

  // // local-mainnet-ycard-bp-node
  // apiUrl: 'https://api.explorer.mainnet.yosemite.ycard.io\n',
  // blockchainUrl: 'https://api.mainnet.yosemite.ycard.io\n',
  // chainId: '453ccf7c671d91f9a8680dde46795fa38fe8f9ab9e70ba7e350dee14e851b6d5',

  // local-mainnet-yosemite-hq-bp-node
  apiUrl: 'https://api.explorer.mainnet.yosemite.yosemitehq.io\n',
  blockchainUrl: 'https://api.mainnet.yosemite.yosemitehq.io\n',
  chainId: '453ccf7c671d91f9a8680dde46795fa38fe8f9ab9e70ba7e350dee14e851b6d5',

  // appName: 'YOSEMITE Explorer',
  // networkName: 'Sentinel Public Test-Net',
  // logoUrl: '/assets/logo.png',

  // // local-testnet-sentinel
  // apiUrl: 'http://localhost:9000',
  // blockchainUrl: 'http://localhost:8888',
  // chainId: '047316f411b2db9ba0f600fdbca8e3bbd224d82a367ff02fbd355bb0675288e3',

  // // testnet-sentinel
  // apiUrl: 'http://testnet-sentinel-explorer-api.yosemitelabs.org',
  // blockchainUrl: 'http://testnet-sentinel.yosemitelabs.org:8888',
  // chainId: '047316f411b2db9ba0f600fdbca8e3bbd224d82a367ff02fbd355bb0675288e3',

  // // testnet-v1
  // apiUrl: 'http://testnet-explorer-api.yosemitelabs.org',
  // blockchainUrl: 'http://testnet.yosemitelabs.org:8888',
  // chainId: '6376573815dbd2de2d9929027a94aeab3f6e60e87caa953f94ee701ac8425811',
  useChain: true
};
