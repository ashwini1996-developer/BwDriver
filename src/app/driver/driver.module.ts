import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule } from '../shared/shared.module';
import { DriverRoutingModule } from './driver-routing.module';
import { DriverComponent } from './driver.component';
import { Driver1Component } from './driver1/driver1.component';
import { Driver2Component } from './driver2/driver2.component';


@NgModule({
  declarations: [DriverComponent, Driver1Component, Driver2Component],
  imports: [
    CommonModule,
    DriverRoutingModule,
    SharedModule
  ]
})
export class DriverModule { }
