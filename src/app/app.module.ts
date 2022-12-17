import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { MainComponent } from './index/main/main.component';
import { IndexnavbarComponent } from './index/indexnavbar/indexnavbar.component';
import { HeaderComponent } from './index/header/header.component';
import { FooterComponent } from './index/footer/footer.component';

/* === Auth ===  */
import { AuthGuard } from './auth/auth.guard';
import { LoginregisterComponent } from './auth/loginregister/loginregister.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ResetPasswordDoneComponent } from './auth/reset-password-done/reset-password-done.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,

    
    IndexnavbarComponent,
    HeaderComponent,
    LoginregisterComponent,
    ResetComponent,
    ResetPasswordComponent,
    ResetPasswordDoneComponent,
    ChangePasswordComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
