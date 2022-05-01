import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from './pipes/date.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './service/profile.service';
import { GithubComponent } from './github/github.component';


@NgModule({
  declarations: [
    AppComponent,
    DatePipe,
    ProfileComponent,
    GithubComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
