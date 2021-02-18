import { CustomReuseStrategy } from './shared/custom-reuse-strategy';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteReuseStrategy, RouterModule } from "@angular/router";
import { LoaderComponent } from './loader/loader.component';
import { MessageComponent } from './message/message.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { UserDetailGuard } from './shared/user-detail.guard';
import { UserListResolverService } from './shared/user-list-resolver.service';
import { UserResolverService } from './shared/user-resolver.service';
import { SignupComponent } from './signup/signup.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';
@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ProductListComponent,
                resolve: { products: UserListResolverService }
            }, {
                path: 'signup',
                component: SignupComponent
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
        ])
    ],
    exports: [RouterModule],
    declarations: [
        ProductListComponent,
        ConvertToSpacePipe,
        LoaderComponent,
        UserDetailsComponent,
        UserEditComponent,
        MessageComponent,
        SignupComponent
    ],
    providers: [UserResolverService, UserListResolverService]
})
export class UserModule { }