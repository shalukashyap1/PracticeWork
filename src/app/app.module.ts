import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { InterpolationworkComponent } from './components/interpolationwork/interpolationwork.component';
import { PropertybindingworkComponent } from './components/propertybindingwork/propertybindingwork.component';
import { EventworkComponent } from './components/eventwork/eventwork.component';
import { ConditionalworkComponent } from './components/conditionalwork/conditionalwork.component';
import { FormcreatwithtableComponent } from './assignment/formcreatwithtable/formcreatwithtable.component';

import { FormsModule } from '@angular/forms';
import { FremworkComponent } from './assignment/fremwork/fremwork.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { MultipleconditionsComponent } from './components/multipleconditions/multipleconditions.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { TodolistComponent } from './assignment/todolist/todolist.component';
import { HomeComponent } from './assignment/home/home.component';
import { AboutComponent } from './assignment/about/about.component';
import { ServiceComponent } from './assignment/service/service.component';
import { ContactformComponent } from './assignment/contactform/contactform.component';
import { NestedloopworkComponent } from './components/nestedloopwork/nestedloopwork.component';
import { NgifComponent } from './assignment/ngif/ngif.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    InterpolationworkComponent,
    PropertybindingworkComponent,
    EventworkComponent,
    ConditionalworkComponent,
    FormcreatwithtableComponent,
    FremworkComponent,
    EmployeeComponent,
    MultipleconditionsComponent,
    NgForComponent,
    TodolistComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactformComponent,
    NestedloopworkComponent,
    NgifComponent,
  
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }