export interface BlockDetail {
  block_id: string;
  block_num: number;
  block: any;
  trx_votes: any;
  irrAt: any; // irreversible-at : ("irrAt" / "$date") -> timestamp millis
  validated: boolean;
  in_current_chain: boolean;
}
