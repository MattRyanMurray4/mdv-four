import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emptyPatient, Patient } from '@healthcare/api-interfaces';
import { PatientsFacade } from '@healthcare/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'healthcare-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  form: FormGroup;
  patients$: Observable<Patient[]> = this.patientsFacade.allPatients$;
  selectedPatient: Observable<Patient> = this.patientsFacade.selectedPatient$;
  constructor(
    private patientsFacade: PatientsFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.patientsFacade.loadPatients();
    this.reset();
  }

  reset() {
    this.selectPatient(emptyPatient);
    this.form.reset();
  }

  selectPatient(patient: Patient) {
    this.patientsFacade.selectPatient(patient.id);
    this.form.patchValue(patient);
  }

  createPatient(patient: Patient) {
    this.patientsFacade.createPatient(patient);
    this.reset();
  }

  updatePatient(patient: Patient) {
    this.patientsFacade.updatePatient(patient);
    this.reset();
  }

  savePatient(patient: Patient) {
    patient.id
      ? this.patientsFacade.updatePatient(patient)
      : this.patientsFacade.createPatient(patient);
  }

  deletePatient(patient: Patient) {
    this.patientsFacade.deletePatient(patient);
    this.reset();
  }

  cancel() {
    this.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      insurance: ['', Validators.required],
      birthday: ['', Validators.required],
      diagnosis: ['', Validators.required],
      txInterventions: ['', Validators.required],
      txEpisode: [''],
    });
  }
}
