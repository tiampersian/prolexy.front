
import { NgModule } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DayjsDateAdapter, MAT_DAYJS_DATE_ADAPTER_OPTIONS, MAT_DAYJS_DATE_FORMATS } from './material.persian-date.adapter';


@NgModule({
  providers: [
    {
      provide: DateAdapter,
      useClass: DayjsDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_DAYJS_DATE_ADAPTER_OPTIONS]
    }
  ],
})
export class DayjsDateModule { }

@NgModule({
  imports: [DayjsDateModule],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MAT_DAYJS_DATE_FORMATS }],
})
export class MatDayjsDateModule { }