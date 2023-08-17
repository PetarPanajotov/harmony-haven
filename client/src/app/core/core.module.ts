import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AuthenticateComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterComponent, HeaderComponent, AuthenticateComponent, ErrorComponent]
})
export class CoreModule { }
