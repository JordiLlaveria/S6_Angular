import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CrearUserComponent } from './components/crear-user/crear-user.component';
import { ListarUsersComponent } from './components/listar-users/listar-users.component';
import { ListarActivitiesComponent } from './components/listar-activities/listar-activities.component';
import { CrearActivityComponent } from './components/crear-activity/crear-activity.component';

// Routes
const routes: Routes = [
  //{ path: '', component: ListarUsersComponent},
  //{ path: 'crear-user', component: CrearUserComponent},
  //{ path: 'editar-user/:name', component: CrearUserComponent},
  //{ path: '**', redirectTo: '', pathMatch: 'full'}, // In case of a wrong URL, the code redirects to the main path
  { path: '', component : ListarActivitiesComponent},
  { path: 'crear-activity', component: CrearActivityComponent},
  { path: 'editar-activity/:name', component: CrearActivityComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
