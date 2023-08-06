import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { CreateDestinationModalComponent } from './pages/create-destination-modal/create-destination-modal.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'destinations', component: DestinationsComponent},
  {path: 'destinations/create', component: CreateDestinationModalComponent},
  {path: 'destinations/dubai', component: HotelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
