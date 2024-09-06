import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './shared/front/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './shared/admin/main-layout/main-layout.component';

const routes: Routes = [
  {
    path:'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./modules/authentification/authentification.module').then(m => m.AuthentificationModule)
  },
  {
    path:'admin',
    component: MainLayoutComponent,
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'', redirectTo:'auth', pathMatch:'full'
  },
  {
    path:'**', redirectTo:'auth', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
