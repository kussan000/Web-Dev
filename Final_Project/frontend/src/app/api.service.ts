import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(this.api + 'login/', data);
  }

  getTasks() {
    return this.http.get(this.api + 'tasks/');
  }

  createTask(data: any) {
    return this.http.post(this.api + 'tasks/create/', data);
  }

  deleteTask(id: number) {
    return this.http.delete(this.api + 'tasks/' + id + '/');
  }
}