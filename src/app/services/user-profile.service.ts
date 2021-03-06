import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/iuser';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  

  constructor(private http: HttpClient) { }

  post(user: IUser): Observable<IUser> {
    return this.http.post<IUser>("https://reqres.in/api/registerUser", user);
  }
}