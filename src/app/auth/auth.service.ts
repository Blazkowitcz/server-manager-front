import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import config from '../../../config.json';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private base_url = config.backend.protocole + '://' + config.backend.address + ':' + config.backend.port + '/auth';
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