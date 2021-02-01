import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ConvertToSpacePipe } from "./shared/convert-to-space.pipe";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { LoaderComponent } from './loader/loader.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    ProductListComponent,
    NavigationComponent,
    ConvertToSpacePipe,
    LoaderComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
