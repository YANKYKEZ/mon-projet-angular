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

// @ts-ignore
// @ts-ignore
// @ts-ignore

const appRoutes: Routes = [
  {path : 'appareils', component: AppareilViewComponent},
  {path : 'auth', component: AuthComponent},
  {path : '', component : AppareilViewComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
