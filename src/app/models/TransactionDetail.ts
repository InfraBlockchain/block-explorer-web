export interface TransactionDetail {
  trx_id: string;
  expiration: string;
  ref_block_num: number;
  ref_block_prefix: number;
  max_net_usage_words: number;
  max_cpu_usage_ms: number;
  delay_sec: number;
  context_free_actions?: any[];
  actions?: any;
  transaction_extensions?: any[];
  signatures: string[];
  context_free_data?: any[];
  signing_keys: any;
  accepted: boolean;
  implicit: boolean;
  scheduled: boolean;
  irrAt: any; // irreversible-at : ("irrAt" / "$date") -> timestamp millis
  bId: string; // block-id
  bNum: number; // block-number
  bTime: any; // block-time : : ("bTime" / "$date") -> timestamp millis
  receipt: any;
  elapsed: number;
  net_usage: number;
  action_traces: any[];
  trx_vote?: any;
}
