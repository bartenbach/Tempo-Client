import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  public API_URL = '//localhost:8080/api';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.API_URL);
  }

}
