export interface Transaction {
  id: string;
  blockNum: number;
  timestamp: number;
  expiration: number;
  pending: boolean;
  numActions: number;
  trxVote: number;
  irrAt: number;
  chainData?: any;
}
