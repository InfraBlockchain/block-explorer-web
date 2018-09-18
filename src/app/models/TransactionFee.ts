export interface TransactionFee {
  position?: number;
  operationName?: string;
  actionAccount?: string;
  actionName?: string;
  feeStr?: string;
  note?: string;
  operation: string; // chain data
  fee: number; // chain data
}
