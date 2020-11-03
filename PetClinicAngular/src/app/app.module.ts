import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    PetProfileComponent
  ],
  imports: [
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    BrowserModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDividerModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      {path: 'register', component: RegisterPageComponent},
      {path: 'profile', component: PetProfileComponent}
    ]),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
