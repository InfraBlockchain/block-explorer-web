import { Transaction } from './Transaction';

export interface Block {
  actionMerkleRoot: string;
  blockNumber: number;
  confirmed: number;
  id: string;
  irreversible?: boolean;
  newProducers: any;
  numTransactions: number;
  trxVotes: number;
  prevBlockId: string;
  producer: string;
  blockTime: string;
  transactionMerkleRoot: string;
  version: number;
  transactions?: Transaction[];
  chainData?: any;
}
