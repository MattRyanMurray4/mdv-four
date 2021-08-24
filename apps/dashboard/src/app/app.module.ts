import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientsComponent } from './patients/patients.component';
import { PatientsListComponent } from './patients/patients-list/patients-list.component';
import { PatientDetailsComponent } from './patients/patient-details/patient-details.component';
import { CoreStateModule } from '@healthcare/core-state';
import { CoreDataModule } from '@healthcare/core-data';
import { UiLibraryModule } from '@healthcare/ui-library';
import { MaterialModule } from '@healthcare/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientsListComponent,
    PatientDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreStateModule,
    CoreDataModule,
    UiLibraryModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
