import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { IResultModel } from './result.model';
export class RpcDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<IResultModel[]> = new BehaviorSubject<IResultModel[]>([]);
  get data(): IResultModel[] { return this.dataChange.value; }

  constructor() {
  }

  /** Adds a new result to the database. */
  addResult(result: IResultModel) {
    const copiedData = this.data.slice();
    copiedData.push(result);
    this.dataChange.next(copiedData);
  }

  clearData() {
    this.dataChange.next([]);
  }
}
