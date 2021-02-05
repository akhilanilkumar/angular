import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MessageComponent } from './message/message.component';
import { NavigationComponent } from "./navigation/navigation.component";
import { Page404Component } from "./page-404/page-404.component";
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
    ])
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    Page404Component,
    LandingPageComponent,
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
