// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  walletUrl: 'https://walleteos.com',
  votingUrl: 'https://eosportal.io',
  appName: 'YOSEMITE Explorer',
  logoUrl: '/assets/logo.png',
  apiUrl: 'http://localhost:9000',
  blockchainUrl: 'http://localhost:8888',
  chainId: '98e9e9f93d5865625c403b84d7ccb0dee22be45f082ed9741d43fdda0f7ad3d6',
  useChain: true
};
