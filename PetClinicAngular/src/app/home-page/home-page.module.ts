import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClient,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ]
})
@Component({
  selector: 'sidenav-autosize-example',
  templateUrl: 'sidenav-autosize-example.html',
  styleUrls: ['sidenav-autosize-example.css'],
})
export class HomePageModule { showFiller = false;}
