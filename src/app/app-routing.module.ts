import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppUser } from './user/user.component';
import { DashboardComponent } from './user/pages/dashboard/dashboard.component';
import { ProfileComponent } from './user/pages/profile/profile.component';
import { GardenComponent } from './user/pages/garden/garden.component';
import { CalendarComponent } from './user/pages/calendar/calendar.component';

import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/pages/home/home.component';
import { PlantsComponent } from './public/pages/plants/plants.component';
import { PestsComponent } from './public/pages/pests/pests.component';

const routes: Routes = [
  { path: '', 
    component: PublicComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'plants', component: PlantsComponent },
      { path: 'pests', component: PestsComponent }
    ]
  },
  { path: 'user', 
    component: AppUser,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'garden', component: GardenComponent },
      { path: 'calendar', component: CalendarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
