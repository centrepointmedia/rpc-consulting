import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { IResultModel } from '../data/result.model';

@Injectable()
export class CalculationService {

  constructor() { }

  public calculateActuarial({limit, retention, type}): Observable<any> {
    return this._mockData({limit, retention, type}).delay(3000);
  }

  private _mockData({limit, retention, type}): Observable<IResultModel> {
    return Observable.create(observer => {
      const data: Array<IResultModel> = [];
      const date = new Date();
      for (let i = 0; i < 100; i++) {
        data.push({
          date,
          benchmark1: type === 'complex' ? ((Math.random() * limit) + i) / 100 : i * limit,
          benchmark2: type === 'complex' ? ((Math.random() * (limit - retention)) - i) / 100 : i * (limit - retention)
        });
      }

      observer.next(data);
      observer.complete();
    });
  }
}
