import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortRusumeComponent } from './frontend/port-rusume/port-rusume.component';
import { PortProfileDescriptionComponent } from './frontend/port-profile-description/port-profile-description.component';
import { PortWorksComponent } from './frontend/port-works/port-works.component';

const routes: Routes = [
  {
    path: '',
    component:PortProfileDescriptionComponent   
  },
  {
    path: 'port-resume',
    component: PortRusumeComponent
  },
  {
    path: 'port-works',
    component: PortWorksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
