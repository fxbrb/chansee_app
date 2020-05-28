import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { SearchPage } from './search/search.page';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {
    path: 'login', component: LoginPage
  },
  {
    path: 'register', component: RegisterPage
  },
  {
    path: 'search', component: SearchPage
  },
  {
    path: 'profil', component: ProfilComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
