import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { GuestCreatePage } from './guest-create';

@NgModule({
  declarations: [
    GuestCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(GuestCreatePage),
    TranslateModule.forChild()
  ],
  exports: [
    GuestCreatePage
  ]
})
export class GuestCreatePageModule { }
