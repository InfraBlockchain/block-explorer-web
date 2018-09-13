import {Action} from './Action';

export interface ActionsForAccount {
  lastIrrBlkNum: number;
  actions: Action[];
}
