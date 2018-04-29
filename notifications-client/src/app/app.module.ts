import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
];
 

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
