import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SoftPinkoComponent } from './soft-pinko/soft-pinko.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HeaderComponent},
  {path:'soft-pinko',component:SoftPinkoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
