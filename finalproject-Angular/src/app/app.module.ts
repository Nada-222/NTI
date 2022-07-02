import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './components/pages/pages.component';
import { SharedComponent } from './components/shared/shared.component';
import { ContentComponent } from './components/pages/content/content.component';
import { IndexComponent } from './components/pages/index/index.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { SinglePostComponent } from './components/pages/single-post/single-post.component';
import { UserListComponent } from './components/pages/user-list/user-list.component';
import { UserInfoComponent } from './components/pages/user-info/user-info.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    SharedComponent,
    ContentComponent,
    IndexComponent,
    LoginComponent,
    ProductsComponent,
    RegisterComponent,
    SinglePostComponent,
    UserListComponent,
    UserInfoComponent,
    NavbarComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
