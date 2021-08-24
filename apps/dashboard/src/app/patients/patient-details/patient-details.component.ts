import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Patient } from '@healthcare/api-interfaces';

@Component({
  selector: 'healthcare-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss'],
})
export class PatientDetailsComponent {
  currentPatient: Patient;
  originalName: string;
  @Input() set patient(value: Patient | null) {
    if (value) this.originalName = value.name;
    this.currentPatient = Object.assign({}, value);
  }
  @Input()
  form: FormGroup;
  @Output()
  saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  save(patient: Patient) {
    this.saved.emit(patient);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    if (this.form.invalid) return;
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }
}
