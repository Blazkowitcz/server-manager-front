import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import config from '../../../config.json';

@Injectable({
    providedIn: 'root'
})
export class TorrentService {
    private base_url = config.backend.protocole + '://' + config.backend.address + ':' + config.backend.port + '/torrent';
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

    /**
     * Get all torrents
     * @returns 
     */
    async getTorrents(){
        const response: any = await this.http.get(this.base_url + '/all').toPromise();
        return response;
    }

    /**
     * Get Torrent Informations
     * @param hash 
     * @returns
     */
    async getTorrentInformations(hash: String){
        const params = new HttpParams().set('hash', hash.toString());
        const response: any = await this.http.get(this.base_url + '/info', {params: params}).toPromise();
        return response
    }

    /**
     * Send torrent fileto the client 
     * @param torrent
     * @returns 
     */
    async uploadTorrent(torrent: FormData){
        const response: any = await this.http.post(this.base_url + '/add', torrent).toPromise();
        return response;
    }
}