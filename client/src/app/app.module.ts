import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { tokenInterceptorProvider } from './core/interceptors/token.interceptor';
import { CoreModule } from './core/core.module';
import { DestinationCardComponent } from './shared/components/destination-card/destination-card.component';
import { PopularFilterPipe } from './shared/pipes/popular-filter.pipe';
import { AddDestinationCardComponent } from './shared/components/add-destination-card/add-destination-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DestinationsComponent,
    HotelsComponent,
    DestinationCardComponent,
    PopularFilterPipe,
    AddDestinationCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [tokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
