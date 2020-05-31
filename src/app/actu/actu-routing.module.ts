import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActuPage } from './actu.page';

const routes: Routes = [
  {
    path: '',
    component: ActuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuPageRoutingModule {}
