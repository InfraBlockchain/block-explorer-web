export const trxfeemeta = {
  symbol: 'DKRW',
  precisionScale: 100,
  txfeeAccount: 'yx.txfee',
  operations: {
    'tf.newacc': {
      opName: 'New Account',
      actAccount: 'yosemite',
      actName: 'newaccount',
      note: ''
    },
    'tf.regprod': {
      opName: 'Register Block Producer Account',
      actAccount: 'yosemite',
      actName: 'regprod',
      note: ''
    },
    'tf.regsysdep': {
      opName: 'Register System Depository Account',
      actAccount: 'yosemite',
      actName: 'regsysdep',
      note: ''
    },
    'tf.regidauth': {
      opName: 'Register Identity Authority Account',
      actAccount: 'yosemite',
      actName: 'regidauth',
      note: ''
    },
    'tf.nissue': {
      opName: 'Issue Native (System) Token',
      actAccount: 'yx.ntoken',
      actName: 'nissue',
      note: ''
    },
    'tf.nredeem': {
      opName: 'Redeem Native (System) Token',
      actAccount: 'yx.ntoken',
      actName: 'nredeem',
      note: ''
    },
    'tf.transfer': {
      opName: 'Transfer Native (System) Token',
      actAccount: 'yx.ntoken',
      actName: 'transfer',
      note: 'same fee amount for yx.ntoken/wptransfer'
    },
    'tf.ntransfer': {
      opName: 'Transfer Native (System) Token issued by Specific System Depository',
      actAccount: 'yx.ntoken',
      actName: 'ntransfer',
      note: 'same fee amount for yx.ntoken/wpntransfer'
    },
    'tf.tcreate': {
      opName: 'Create Non-Native (User) Token',
      actAccount: 'yx.token',
      actName: 'create',
      note: ''
    },
    'tf.tissue': {
      opName: 'Issue Non-Native (User) Token',
      actAccount: 'yx.token',
      actName: 'issue',
      note: ''
    },
    'tf.tredeem': {
      opName: 'Redeem Non-Native (User) Token',
      actAccount: 'yx.token',
      actName: 'redeem',
      note: ''
    },
    'tf.ttransfer': {
      opName: 'Transfer Non-Native (User) Token',
      actAccount: 'yx.token',
      actName: 'transfer',
      note: 'same fee amount for yx.token/wptransfer'
    },
    'tf.tsetkyc': {
      opName: 'Set KYC Rule for Non-Native (User) Token',
      actAccount: 'yx.token',
      actName: 'setkyc',
      note: ''
    },
    'tf.tsetopts': {
      opName: 'Set Options for Non-Native (User) Token',
      actAccount: 'yx.token',
      actName: 'setoptions',
      note: ''
    },
    'tf.tfreezeac': {
      opName: 'Freeze Account for Non-Native (User) Token',
      actAccount: 'yx.token',
      actName: 'freezeacc',
      note: ''
    },
    'tf.dccreate': {
      opName: 'Create Digital Contract Document',
      actAccount: 'yx.dcontract',
      actName: 'create',
      note: ''
    },
    'tf.dcaddsign': {
      opName: 'Add Signers for Digital Contract Document',
      actAccount: 'yx.dcontract',
      actName: 'addsigners',
      note: ''
    },
    'tf.dcsign': {
      opName: 'Sign Digital Contract Document',
      actAccount: 'yx.dcontract',
      actName: 'sign',
      note: ''
    },
    'tf.dcupadd': {
      opName: 'Updates Additional Document Hash',
      actAccount: 'yx.dcontract',
      actName: 'upadddochash',
      note: ''
    },
    'tf.dcremove': {
      opName: 'Remove Digital Contract Document',
      actAccount: 'yx.dcontract',
      actName: 'remove',
      note: ''
    }
  }
};
