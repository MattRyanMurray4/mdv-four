import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsFacade } from './patients/patients.facade';

@NgModule({
  imports: [CommonModule],
  providers: [PatientsFacade],
})
export class CoreStateModule {}
