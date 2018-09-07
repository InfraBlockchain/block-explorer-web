export interface Transaction {
  id: string;
  blockNum: number;
  timestamp: number;
  expiration: number;
  pending: boolean;
  numActions: number;
  trxVote: number;
  irreversible: boolean;
  chainData?: any;
}
