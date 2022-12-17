import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './index/main/main.component';

// Auth
import { LoginregisterComponent } from './auth/loginregister/loginregister.component';

const routes: Routes = [
  // landing page
  { path: '', component: MainComponent},

  // Auth
  { path: 'login-register', component: LoginregisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes ,  {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
