import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { QualityComponent } from './components/home/quality/quality.component';
import { ServiceComponent } from './components/home/service/service.component';
import { RealisationsComponent } from './components/home/realisations/realisations.component';
import { MetiersComponent } from './components/home/metiers/metiers.component';
import { CallToActionComponent } from './components/home/call-to-action/call-to-action.component';
import { HowItWorksComponent } from './components/home/how-it-works/how-it-works.component';
import { AvantagesComponent } from './components/home/avantages/avantages.component';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/authentification/login/login.component';
import { RegisterComponent } from './components/authentification/register/register.component';
import { FormsModule } from '@angular/forms';
import { MetierItemComponent } from './components/shared/metier-item/metier-item.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { IndexComponent } from './components/dashboard/index/index.component';
import { CardComponent } from './components/dashboard/card/card.component';
import { AnnonceComponent } from './components/dashboard/annonce/annonce.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { UserDetailsComponent } from './components/dashboard/user-details/user-details.component';
import { UserUpdateComponent } from './components/dashboard/user-update/user-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    QualityComponent,
    ServiceComponent,
    RealisationsComponent,
    MetiersComponent,
    CallToActionComponent,
    HowItWorksComponent,
    AvantagesComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MetierItemComponent,
    SidebarComponent,
    HeaderComponent,
    IndexComponent,
    CardComponent,
    AnnonceComponent,
    UsersComponent,
    UserDetailsComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
