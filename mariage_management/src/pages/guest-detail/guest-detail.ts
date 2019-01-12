import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Guests } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-guest-detail',
  templateUrl: 'guest-detail.html'
})
export class GuestDetailPage {
  guest: any;

  constructor(public navCtrl: NavController, navParams: NavParams, guests: Guests) {
    this.guest = navParams.get('guest') || guests.defaultGuest;
  }

}
