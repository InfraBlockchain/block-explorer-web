export interface Transaction {
  id: string;
  blockNum: number;
  blockTime: string;
  expiration: number;
  pending: boolean;
  numActions: number;
  trxVote: number;
  irreversible: boolean;
  chainData?: any;
}
