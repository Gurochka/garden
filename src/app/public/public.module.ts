import { RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';

import { PublicHeaderComponent } from './shared/header/header.component';
import { PlantsComponent } from './pages/plants/plants.component';
import { HomeComponent } from './pages/home/home.component';
import { PestsComponent } from './pages/pests/pests.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    PublicHeaderComponent,
    HomeComponent,
    PlantsComponent,
    PestsComponent
  ],
  imports: [
    RouterModule,
    MaterialModule
  ],
  exports: [
    PublicHeaderComponent,
    HomeComponent,
    PlantsComponent,
    PestsComponent
  ]
})

export class PublicModule {}
