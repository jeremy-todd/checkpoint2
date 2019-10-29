import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { IUser } from '../interfaces/iuser';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<IUser[]>('{environment.apiUrl}/users');
    }

    deleteUser() {
        this.http.delete<IUser>('{environment.apiUrl}/users');
    }
}