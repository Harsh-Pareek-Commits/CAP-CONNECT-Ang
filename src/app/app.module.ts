import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AnswerComponent } from 'src/UserComponents/answer/answer.component';
import { QueryComponent } from 'src/UserComponents/query/query.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/UserComponents/login/login.component';
import { NotFoundComponent } from 'src/UserComponents/not-found/not-found.component';
import { HomeComponent } from 'src/UserComponents/home/home.component';
import { SignUpComponent } from 'src/UserComponents/sign-up/sign-up.component';
import { HeaderComponent } from 'src/UserComponents/header/header.component';
import { FooterComponent } from 'src/UserComponents/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from 'src/UserComponents/about/about.component';
import { AddCategoryComponent } from 'src/AdminComponents/add-category/add-category.component';
import { ViewQueryComponent } from 'src/AdminComponents/view-query/view-query.component';
import { ViewUsersComponent } from 'src/AdminComponents/view-users/view-users.component';

const appRoutes : Routes= [
  {path : 'query', component :QueryComponent},
  {path : 'answer', component :AnswerComponent},
  {path : 'login', component :LoginComponent},
  {path : 'signUp', component :SignUpComponent},
  {path : 'about', component :AboutComponent},
  {path : '', component :HomeComponent},
  {path : '404', component : NotFoundComponent},
  // {path : '**', redirectTo:'/404'},
  {path : 'answer/:id', component :AnswerComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    QueryComponent,
    AnswerComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    AddCategoryComponent,
    ViewQueryComponent,
    ViewUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut :2000, 
      positionClass : 'toast-top-center',
      preventDuplicates : true,
    }),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
