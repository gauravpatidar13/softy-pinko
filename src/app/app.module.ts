import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { EnjoyComponent } from './enjoy/enjoy.component';
import { DownloadComponent } from './download/download.component';
import { WatchComponent } from './watch/watch.component';
import { SoftPinkoComponent } from './soft-pinko/soft-pinko.component';
import { SoftyStrategyComponent } from './softy-strategy/softy-strategy.component';
import { SoftyDiscussComponent } from './softy-discuss/softy-discuss.component';
import { SoftyBusinessComponent } from './softy-business/softy-business.component';
import { SoftyWorkComponent } from './softy-work/softy-work.component';
import { SoftySayComponent } from './softy-say/softy-say.component';
import { SoftyPricingComponent } from './softy-pricing/softy-pricing.component';
import { SoftyBlogComponent } from './softy-blog/softy-blog.component';
import { SoftyTalkComponent } from './softy-talk/softy-talk.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    EnjoyComponent,
    DownloadComponent,
    WatchComponent,
    SoftPinkoComponent,
    SoftyStrategyComponent,
    SoftyDiscussComponent,
    SoftyBusinessComponent,
    SoftyWorkComponent,
    SoftySayComponent,
    SoftyPricingComponent,
    SoftyBlogComponent,
    SoftyTalkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
