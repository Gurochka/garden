import { RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';

import { UserHeaderComponent } from './shared/header/header.component';
import { UserSidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GardenComponent } from './pages/garden/garden.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    UserHeaderComponent,
    UserSidebarComponent,
    DashboardComponent,
    ProfileComponent,
    GardenComponent,
    CalendarComponent
  ],
  imports: [
    MaterialModule,
    RouterModule
  ],
  exports: [
    UserHeaderComponent,
    UserSidebarComponent
  ]
})

export class UserModule {}
