import {ActionDetail} from './ActionDetail';

export interface Action {
  // account: string;
  // authorizations?: any[];
  // blockId: number;
  // createdAt: number;
  // data?: any;
  // id: number;
  // parentId: number;
  // seq: number;
  // name: string;
  // transaction: string;

  receipt: any;
  act: ActionDetail;
  elapsed; number;
  cpu_usage: number;
  console?: string;
  total_cpu_usage: number;
  trx_id: string;
  bNum: number; // block-number
  bTime: any; // block-time : ("bTime" / "$date") -> timestamp millis
}
