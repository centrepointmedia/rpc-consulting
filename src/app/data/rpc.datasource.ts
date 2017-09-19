import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import { IResultModel } from './result.model';
import { RpcDatabase } from './rpc.database';
export class RpcDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: RpcDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IResultModel[]> {
    return this._exampleDatabase.dataChange;
  }

  disconnect() {}
}
