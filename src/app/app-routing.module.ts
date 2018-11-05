import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgencyComponent} from './components/agency/agency.component';
import {AgencydetailComponent} from './components/agency/agencydetail/agencydetail.component';
import {AnnouncementComponent} from './components/announcement/announcement.component';

const routes: Routes = [
  // 路由重定向  当url为4200会 content
  {path: '', redirectTo: '/agency', pathMatch: 'full'},
  {path: 'agency', component: AgencyComponent},
  {path: 'agencyDetail', component: AgencydetailComponent},
  {path: 'announcement', component: AnnouncementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
