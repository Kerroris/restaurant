import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionicPage } from './actionic.page';

const routes: Routes = [
  {
    path: '',
    component: ActionicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionicPageRoutingModule {}
