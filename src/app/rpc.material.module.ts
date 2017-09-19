import { NgModule } from '@angular/core';
import {MdButtonModule,
  MdCheckboxModule,
  MdFormFieldModule,
  MdRadioModule,
  MdInputModule,
  MdProgressBarModule,
MdTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdFormFieldModule,
    MdRadioModule,
    MdInputModule,
    MdTableModule,
    CdkTableModule,
    MdProgressBarModule],
  exports: [MdButtonModule,
    MdCheckboxModule,
    MdFormFieldModule,
    MdRadioModule,
    MdInputModule,
    MdTableModule,
    CdkTableModule,
    MdProgressBarModule],
  declarations: [],
  providers: [],
})
export class RpcMaterialModule { }
