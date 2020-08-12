import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MaterialModule } from './modules/material.module';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SecondComponent } from './components/second/second.component';

import { IfHasAccessDirective } from './directives/if-has-access.directive';
import { MouseBoldDirective } from "./directives/mouse-bold.directive";
import {UserFilter} from './pipes/filter.pipe';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'second', component: SecondComponent},
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    MainComponent,
    SecondComponent,
    IfHasAccessDirective,
    MouseBoldDirective,
    UserFilter,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
