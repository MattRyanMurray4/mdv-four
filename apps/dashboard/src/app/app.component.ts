import { Component } from '@angular/core';

@Component({
  selector: 'healthcare-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HealthCare-Application';
  links = [
    { path: '/', icon: 'home', title: 'Login' },
    { path: 'patients', icon: 'view_list', title: 'Patients-List' },
  ];
}
