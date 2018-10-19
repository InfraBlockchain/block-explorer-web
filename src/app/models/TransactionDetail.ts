export interface TransactionDetail {
  id: string;
  block_num: number; // block-number
  block_time: string; // iso timestamp string
  producer_block_id: string;
  receipt: any;
  elapsed: number;
  net_usage: number;
  scheduled: boolean;
  action_traces: any[];
  trx_vote?: any;
  except?: any;
  BN?: number;
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
  block_id: string;
  irrAt: any; // irreversible-at : ("irrAt" / "$date") -> timestamp millis
}
