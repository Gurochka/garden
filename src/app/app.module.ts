import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { PublicModule } from './public/public.module';
import { PublicComponent } from './public/public.component';

import { UserModule } from './user/user.module';
import { AppUser } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    AppUser
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PublicModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
