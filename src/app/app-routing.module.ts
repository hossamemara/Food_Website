import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { CornComponent } from './corn/corn.component';
import { DetailsComponent } from './details/details.component';
import { FruitComponent } from './fruit/fruit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PastaComponent } from './pasta/pasta.component';
import { PepperComponent } from './pepper/pepper.component';
import { PizzaComponent } from './pizza/pizza.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'pizza',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthGuardGuard]},
  {path:'pizza',component:PizzaComponent,canActivate:[AuthGuardGuard]},
  {path:'pasta',component:PastaComponent},
  {path:'corn',component:CornComponent,canActivate:[AuthGuardGuard]},
  {path:'details/:id',component:DetailsComponent,canActivate:[AuthGuardGuard]},
  {path:'fruit',component:FruitComponent,canActivate:[AuthGuardGuard]},
  {path:'pepper',component:PepperComponent,canActivate:[AuthGuardGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
