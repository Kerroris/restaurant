import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionicPageRoutingModule } from './actionic-routing.module';

import { ActionicPage } from './actionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionicPageRoutingModule
  ],
  declarations: [ActionicPage]
})
export class ActionicPageModule {}
