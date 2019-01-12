import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { GuestDetailPage } from './guest-detail';

@NgModule({
  declarations: [
    GuestDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GuestDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    guestDetailPage
  ]
})
export class GuestDetailPageModule { }
