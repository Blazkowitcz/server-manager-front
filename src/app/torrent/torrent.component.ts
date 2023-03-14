import { Component, OnInit } from '@angular/core';
import { NgMetro4Module } from 'ng-metro4';
import { TorrentService } from './torrent.service';
import { TorrentUtil } from './torrent.util';

@Component({
  selector: 'app-torrent',
  templateUrl: './torrent.component.html',
  styleUrls: ['./torrent.component.css'],
})
export class TorrentComponent implements OnInit {

  constructor(private torrentService: TorrentService, private torrentUtil: TorrentUtil) { }

  torrents: any[] = [];

  torrent_name: String = '';
  torrent_size: String = '';
  torrent_location: String = '';
  torrent_hash: String = '';
  torrent_uploaded: String = '';
  torrent_downloaded: String = '';
  torrent_state: String = '';

  ngOnInit(): void {
    this.refreshTorrent();
    this.getTorrent();
  }

  /**
   * Start Intreval to refresh torrent table
   */
  async getTorrent(){
    setInterval(() =>{
      this.refreshTorrent();
    }, 10000)
  }

  /**
   * Refresh Torrents table
   */
  async refreshTorrent(){
    let torrents = await this.torrentService.getTorrents();
    torrents.forEach((torrent: any) => {
      let exist = false;
      this.torrents.forEach((t: any) => {
        if(torrent.hash === t.hash){
          exist = true;
          t.percentage = torrent.percentage;
        }
      });
      if(!exist){
        this.torrents.push(Object.assign(torrent));
      }
    });
  }

  async uploadTorrent(file: any){
    const formData = new FormData();
    formData.append("torrent", file.target.files[0]);
    const upload = await this.torrentService.uploadTorrent(formData);
  }

  async getTorrentInformations(hash: String){
    const infos = await this.torrentService.getTorrentInformations(hash);
    this.torrent_name = infos.name;
    this.torrent_size = this.torrentUtil.formatBytes(infos.totalSize, 2);
    this.torrent_location = infos.downloadDir;
    this.torrent_hash = infos.hashString;
    this.torrent_uploaded = this.torrentUtil.formatBytes(infos.uploadedEver, 2);
    this.torrent_downloaded = this.torrentUtil.formatBytes(infos.downloadedEver, 2);
    this.torrent_state = this.torrentUtil.getStatus(infos.status);
  }
}
