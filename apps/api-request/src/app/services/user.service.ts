import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = 'http://localhost:8080/parking-spot';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '/list');
  }

  addUser(user: User) {
    return this.http.post(this.apiUrl + '/save', user);
  }

  removeUser(id: string) {
    return this.http.post(this.apiUrl + '/delete/' + id, '');
  }
}
