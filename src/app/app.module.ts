import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { LoginComponent } from './login/login.component';
import { DatePipe } from './pipes/date.pipe';
import { RepositoriesComponent } from './repositories/repositories.component';
import { FontDirective } from './font.directive';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    PersonalDetailsComponent,
    LoginComponent,
    DatePipe,
    RepositoriesComponent,
    FontDirective,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
