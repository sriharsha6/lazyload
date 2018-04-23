import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PasswordComponent } from './password/password.component';
import { UserComponent } from './user/user.component';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [DashboardComponent, HomeComponent, PasswordComponent, UserComponent]
})
export class AuthModule { }
