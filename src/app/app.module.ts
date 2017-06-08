import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent, RootComponent } from './app.component';
// import { AlertBasicComponent } from './alert-basic/alert-basic.component';

const appRouter: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'appAlert',  loadChildren: './alert-basic/alert-basic.component#AlertBasicComponent' },
  { path: '', redirectTo: '/app',pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    RootComponent
  ],
  imports: [
    RouterModule.forRoot(appRouter),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [NgbAlertConfig],
  bootstrap: [RootComponent]
})
export class AppModule {
  constructor(alertConfig: NgbAlertConfig){
    alertConfig.type = 'warning';
    alertConfig.dismissible = true;
  }
 }
