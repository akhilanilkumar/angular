import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MessageComponent } from './message/message.component';
import { NavigationComponent } from "./navigation/navigation.component";
import { Page404Component } from "./page-404/page-404.component";
import { UserModule } from './user.module';

@NgModule({
  imports: [
    UserModule,
    RouterModule.forRoot([
      {
        path: "messages",
        component: MessageComponent,
        outlet: 'popup'
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
