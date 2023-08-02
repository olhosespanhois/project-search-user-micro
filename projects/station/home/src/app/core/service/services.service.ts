import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiUrl = `https://jsonplaceholder.typicode.com/`;

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get(`${this.apiUrl}users`);
  }
  getUserSearch(name: string) {
    return this.http.get(`${this.apiUrl}users?name=${name}`);
  }
  getUserDetails(Id: string) {
    return this.http.get(`${this.apiUrl}users/${Id}`);
  }
}
