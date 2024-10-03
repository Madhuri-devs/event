import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private apiUrl = 'http://localhost:8091/api/eventCategories';

  constructor(private http: HttpClient) {}

  // getMessage(): Observable<any> {
  //   return this.http.get('/api');
  // }

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getServices(): Observable<any> {
    return this.http.get(`${this.apiUrl}/services`);
  }

  getAchievements():Observable<any>{
    return this.http.get(`${this.apiUrl}/getAchievements`);
  }
}
