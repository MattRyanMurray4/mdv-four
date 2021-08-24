import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Patient } from '@healthcare/api-interfaces';

@Component({
  selector: 'healthcare-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
})
export class PatientsListComponent {
  @Input() patients: Patient[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
