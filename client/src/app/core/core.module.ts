import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AuthenticateComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent, HeaderComponent, AuthenticateComponent]
})
export class CoreModule { }
