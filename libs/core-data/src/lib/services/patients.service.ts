import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '@healthcare/api-interfaces';
import { mapTo } from 'rxjs/operators';

export const BASE_URL = 'https://db-30x30.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  private model = 'patients';
  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Patient[]>(this.getUrl());
  }

  find(id: string) {
    return this.httpClient.get<Patient>(this.getUrlById(id));
  }

  create(patient: Patient) {
    return this.httpClient.post<Patient>(this.getUrl(), patient);
  }

  update(patient: Patient) {
    return this.httpClient.patch<Patient>(this.getUrlById(patient.id), patient);
  }

  delete(patient: Patient) {
    return this.httpClient
      .delete<Patient>(this.getUrlById(patient.id))
      .pipe(mapTo(patient));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
