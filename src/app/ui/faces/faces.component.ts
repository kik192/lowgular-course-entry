import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EmployeeModel} from "../../model/employee.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-faces',
  templateUrl: './faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacesComponent {
  data$: Observable<EmployeeModel[]>= this._httpClient.get<EmployeeModel[]>('assets/data/employees.json')
  constructor(private _httpClient: HttpClient) {}
}
