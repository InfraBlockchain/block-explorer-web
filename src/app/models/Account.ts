export interface Account {
  name: string;
  createdAt: number;
  updatedAt?: number;
  abi?: {
    tables?: any[];
  };
}
