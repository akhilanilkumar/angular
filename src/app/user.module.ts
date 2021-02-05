import { MessageComponent } from './message/message.component';
import { LoaderComponent } from './loader/loader.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserResolverService } from './shared/user-resolver.service';
import { UserDetailGuard } from './shared/user-detail.guard';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListResolverService } from './shared/user-list-resolver.service';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild([{
            path: "users",
            canActivate: [AuthGuard],
            children: [
                {
                    path: '',
                    component: ProductListComponent,
                    resolve: { products: UserListResolverService }
                }, {
                    path: ":id",
                    component: UserDetailsComponent,
                    canActivate: [UserDetailGuard],
                    resolve: { user: UserResolverService },
                    children: [
                        { path: 'info', component: UserEditComponent }
                    ],
                }, {
                    path: "edit/:id",
                    component: UserEditComponent
                }
            ]
        }])
    ],
    declarations: [
        ProductListComponent,
        ConvertToSpacePipe,
        LoaderComponent,
        UserDetailsComponent,
        UserEditComponent,
        MessageComponent
      ],
    providers: [UserResolverService, UserListResolverService]
})
export class UserModule { }