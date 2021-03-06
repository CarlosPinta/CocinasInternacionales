import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent} from './components/client-list/client-list.component'
import {ClientFormComponent} from './components/client-form/client-form.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/clients',
    pathMatch: 'full'
  },
  {
    path:'clients',
    component: ClientListComponent
  },
  {
    path:'clients/add',
    component: ClientFormComponent
  },
  {
    path:'clients/edit/:id',
    component: ClientFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
