import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { LeaveComponent } from './leave/leave.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { ContainerComponent } from './container/container.component';

const appRoutes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'myinfo/:id', component: MyInfoComponent },
  { path: 'empdata', component: EmployeeDataComponent },
  { path: 'leave', component: LeaveComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    LeaveComponent,
    MyInfoComponent,
    EmployeeDataComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
