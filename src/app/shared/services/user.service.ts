import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    baseUrl:string = "http://localhost:3000";

    constructor(private httpClient : HttpClient) {}

    getAll(){ 
        return this.httpClient.get<User[]>(this.baseUrl + '/users');
    }

    getById(id:number){
        return this.httpClient.get<User>(this.baseUrl + '/user/' + id);
    }
}
