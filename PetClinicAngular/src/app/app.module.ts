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
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from "@angular/common";
import {MatTabsModule} from '@angular/material/tabs';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { MessageboardPageComponent } from './messageboard-page/messageboard-page.component';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { RolePageComponent } from './role-page/role-page.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    PetProfileComponent,
    AccountDetailsComponent,
    AppointmentPageComponent,
    MessageboardPageComponent,
    PaymentsPageComponent,
    ContactPageComponent,
    RolePageComponent
  ],
  imports: [
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    CommonModule,
    BrowserModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDividerModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      {path: 'register', component: RegisterPageComponent},
      {path: 'appointment', component: AppointmentPageComponent},
      {path: 'board', component: MessageboardPageComponent},
      {path: 'payments', component: PaymentsPageComponent},
      {path: 'account', component: AccountDetailsComponent},
      {path: 'login', component: LoginPageComponent},
      {path: 'profile', component: PetProfileComponent},
      {path: 'contact', component: ContactPageComponent },
      {path: 'role', component: RolePageComponent}
    ]),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
