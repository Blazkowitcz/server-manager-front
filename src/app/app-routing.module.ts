import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TorrentComponent } from './torrent/torrent.component';

const routes: Routes = [
  { path: 'auth/:type', component: AuthComponent},
  { path: 'torrent', component: TorrentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
