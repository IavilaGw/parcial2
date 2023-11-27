import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Conferencia } from './conferencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConferenciasService {
 private apiUrl: string = environment.baseUrl + 'conferencias';
constructor(private http: HttpClient) { }
getCOnferencias(): Observable<Conferencia[]> {
   return this.http.get<Conferencia[]>(this.apiUrl);
 }
}
