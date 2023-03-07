import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private base_url = 'http://127.0.0.1:3000/auth';
    constructor(private http: HttpClient) { }

    /**
     * Login
     * @param username 
     * @param password 
     * @returns 
     */
    async login(username: String, password: String){
        const response: any = await this.http.post(this.base_url + '/login', {username: username, password: password}).toPromise();
        return response;
    }
}