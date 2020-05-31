import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActuPageRoutingModule } from './actu-routing.module';

import { ActuPage } from './actu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActuPageRoutingModule
  ],
  declarations: [ActuPage]
})
export class ActuPageModule {}
