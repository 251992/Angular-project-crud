import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthoGuard } from './authentication/autho.guard';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
//import { EmployeeRegistrationComponent } from './components/pages/employee-registration/employee-registration.component';
import { EmployeeTodoComponent } from './components/pages/employee-todo/employee-todo.component';
import { LoginComponent } from './components/pages/login/login.component';
import { OrderMenuComponent } from './components/pages/order-menu/order-menu.component';

const routes: Routes = [
  {path:'', component:DashboardComponent,
children:[
  //{path:'employee-registration', component:EmployeeRegistrationComponent},
  {path:'order-menu', component:OrderMenuComponent},
  {path:'employee-todo', component:EmployeeTodoComponent}

]

},
  {path:'login', component:LoginComponent},
  // {path:'dashboard', component:DashboardComponent, canActivate:[AuthoGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
