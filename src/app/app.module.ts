import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';


import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CreateEmployeeComponent } from './empleados/create-employee/create-employee.component';
import { EmployeeListComponent } from './empleados/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './empleados/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './empleados/update-employee/update-employee.component';
import { InicioEmployeeComponent } from './empleados/inicio-employee/inicio-employee.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    InicioEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
