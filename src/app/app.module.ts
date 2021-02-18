import { CustomReuseStrategy } from './shared/custom-reuse-strategy';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from "@angular/router";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from "./app.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MessageComponent } from './message/message.component';
import { NavigationComponent } from "./navigation/navigation.component";
import { Page404Component } from "./page-404/page-404.component";
import { UserData } from './shared/user-data';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "messages",
        component: MessageComponent,
        outlet: 'popup'
      },
      {
        path: 'users',
        loadChildren: () => import('./user.module').then(m => m.UserModule)
      },
      {
        path: "",
        component: LandingPageComponent,
        pathMatch: 'full'
      }
      , {
        path: '**',
        component: Page404Component
      }
    ]),
    InMemoryWebApiModule.forRoot(UserData)
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    Page404Component,
    LandingPageComponent,
  ],
  // providers: [{provide:RouteReuseStrategy, useClass:CustomReuseStrategy}],
  
  bootstrap: [AppComponent],

})
export class AppModule { }
