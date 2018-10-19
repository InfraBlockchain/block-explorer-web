import {ActionDetail} from './ActionDetail';

export interface Action {
  receipt: any;
  act: ActionDetail;
  elapsed; number;
  cpu_usage: number;
  console?: string;
  total_cpu_usage: number;
  trx_id: string;
  block_num: number; // block-number
  block_time: string; // iso timestamp string
}
