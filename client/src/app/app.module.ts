import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { tokenInterceptorProvider } from './core/interceptors/token.interceptor';
import { CoreModule } from './core/core.module';
import { DestinationCardComponent } from './shared/components/destination-card/destination-card.component';
import { PopularFilterPipe } from './shared/pipes/popular-filter.pipe';
import { AddDestinationCardComponent } from './shared/components/add-destination-card/add-destination-card.component';
import { DestinationModalComponent } from './shared/components/destination-modal/destination-modal.component';
import { HotelModalComponent } from './shared/components/hotel-modal/hotel-modal.component';
import { HotelCardComponent } from './pages/hotels/hotel-card/hotel-card.component';
import { AddHotelCardComponent } from './pages/hotels/add-hotel-card/add-hotel-card.component';
import { SearchComponent } from './pages/destinations/search/search.component';
import { DeleteIconComponent } from './shared/components/destination-card/delete-icon/delete-icon.component';
import { HotelDetailsComponent } from './pages/hotel-details/hotel-details.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReviewsComponent } from './pages/hotel-details/reviews/reviews.component';
// import { GoogleMapsComponent } from './pages/hotel-details/google-maps/google-maps.component';

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
    DestinationModalComponent,
    HotelModalComponent,
    HotelCardComponent,
    AddHotelCardComponent,
    SearchComponent,
    DeleteIconComponent,
    HotelDetailsComponent,
    ReviewsComponent,
    // GoogleMapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    GoogleMapsModule,
    HttpClientJsonpModule,
  ],
  providers: [tokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
