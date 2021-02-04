import { UserListResolverService } from './shared/user-list-resolver.service';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ConvertToSpacePipe } from "./shared/convert-to-space.pipe";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { LoaderComponent } from "./loader/loader.component";
import { HttpClientModule } from "@angular/common/http";
import { Page404Component } from "./page-404/page-404.component";
import { RouterModule } from "@angular/router";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailGuard } from "./shared/user-detail.guard";
import { UserResolverService } from './shared/user-resolver.service';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "users",
        component: ProductListComponent,
        resolve: { products: UserListResolverService }
      },
      {
        path: "users/:id",
        component: UserDetailsComponent,
        canActivate: [UserDetailGuard],
        resolve: { user: UserResolverService },
        children: [
          { path: 'info', component: UserEditComponent }
        ]
      },
      {
        path: "users/edit/:id",
        component: UserEditComponent
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
    ProductListComponent,
    NavigationComponent,
    ConvertToSpacePipe,
    LoaderComponent,
    Page404Component,
    LandingPageComponent,
    UserDetailsComponent,
    UserEditComponent
  ],
  bootstrap: [AppComponent],
  providers: [UserResolverService, UserListResolverService]
})
export class AppModule { }
