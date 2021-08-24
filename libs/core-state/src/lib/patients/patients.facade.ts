import { NotifyService, PatientsService } from '@healthcare/core-data';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Patient } from '@healthcare/api-interfaces';
import { take, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PatientsFacade {
  private _allPatientsSource$ = new BehaviorSubject<Patient[]>([]);
  allPatients$: Observable<Patient[]> = this._allPatientsSource$.asObservable();
  private _selectedPatientSource$ = new BehaviorSubject<Patient>({} as Patient);
  selectedPatient$: Observable<Patient> =
    this._selectedPatientSource$.asObservable();

  constructor(
    private patientsService: PatientsService,
    private notify: NotifyService
  ) {}

  loadPatients() {
    this.patientsService
      .all()
      .pipe(
        tap((patients) => this._allPatientsSource$.next(patients)),
        take(1)
      )
      .subscribe();
  }

  selectPatient(patientId: string) {
    return this.patientsService
      .find(patientId)
      .pipe(
        tap((patientId) => this._selectedPatientSource$.next(patientId)),
        take(1)
      )
      .subscribe(() => {
        this.loadPatients();
      });
  }

  createPatient(patient: Patient) {
    return this.patientsService
      .create(patient)
      .pipe(
        tap((patient) => this._selectedPatientSource$.next(patient)),
        take(1)
      )
      .subscribe(() => {
        this.loadPatients();
        this.notify.notification(`Created ${patient.name} successfully!`);
      });
  }

  updatePatient(patient: Patient) {
    return this.patientsService
      .update(patient)
      .pipe(
        tap((patient) => this._selectedPatientSource$.next(patient)),
        take(1)
      )
      .subscribe(() => {
        this.loadPatients();
        this.notify.notification(`Updated ${patient.name} successfully!`);
      });
  }

  deletePatient(patient: Patient) {
    return this.patientsService
      .delete(patient)
      .pipe(
        tap((patient) => this._selectedPatientSource$.next(patient)),
        take(1)
      )
      .subscribe(() => {
        this.loadPatients();
        this.notify.notification(`Deleted ${patient.name} successfully!`);
      });
  }
}
