import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = "http://localhost:8080/News24h/api/news";
  private baseUrl1 = "http://localhost:8080/News24h/api/news/viewtop";
  constructor(private http: HttpClient) { }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(hocvien: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, hocvien);
  }
  update(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getTopView(): Observable<any> {
    return this.http.get(`${this.baseUrl1}`);
  }

}
