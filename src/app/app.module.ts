import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {AppareilService} from './service/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule} from '@angular/router';
import {AuthService} from './service/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuardService} from './service/auth-guard.service';

// @ts-ignore
// @ts-ignore
// @ts-ignore

const appRoutes: Routes = [
  {path : 'appareils', canActivate: [AuthGuardService], component: AppareilViewComponent},
  {path : 'appareils/:id', canActivate: [AuthGuardService], component : SingleAppareilComponent},
  {path : 'auth', component: AuthComponent},
  {path : '', component : AppareilViewComponent},
  {path : 'not-found', component : FourOhFourComponent},
  {path : '**', redirectTo : '/not-found'}


];
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
