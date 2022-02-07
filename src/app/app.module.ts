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

const appRoutes : Routes= [
  {path : 'query', component :QueryComponent},
  {path : 'answer', component :AnswerComponent},
  {path : 'login', component :LoginComponent},
  {path : 'signUp', component :SignUpComponent},
  {path : '', component :HomeComponent},
  {path : '404', component : NotFoundComponent},
  {path : '**', redirectTo:'/404'},
]

@NgModule({
  declarations: [
    AppComponent,
    QueryComponent,
    AnswerComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    SignUpComponent
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
