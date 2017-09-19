import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { CalculationService } from './services/calculationService';
import { RpcDataSource } from './data/rpc.datasource';
import { RpcDatabase } from './data/rpc.database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mainLimitControl = new FormControl(0, [Validators.required]);
  mainRetentionControl = new FormControl(0, [Validators.required]);
  calculationType = 'simple';
  dataSource: RpcDataSource = null;
  database = new RpcDatabase();
  title = 'app';

  calculating = false;
  hasResults = false;

  constructor(private service: CalculationService) {}
  ngOnInit(): void {
    this.dataSource = new RpcDataSource(this.database);
  }

  formIsValid(): boolean {
    return this.mainLimitControl.value > 0 && this.mainRetentionControl.value > 0;
  }
  calculate(): void {
    this.hasResults = false;
    this.database.clearData();
    this.calculating = true;
    this.service.calculateActuarial({
      limit: this.mainLimitControl.value,
      retention: this.mainRetentionControl.value,
      type: this.calculationType})
    .subscribe(res => {
      console.log(res);
      res.forEach(element => {
        this.database.addResult(element);
      });
      this.calculating = false;
      this.hasResults = true;
    });
  }
}
