import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Guest } from '../../models/guest';
import { Guests } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentGuests: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public guests: Guests) { }

  /**
   * Perform a service for the proper guests.
   */
  getGuests(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentGuests = [];
      return;
    }
    this.currentGuests = this.guests.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this guest.
   */
  openGuest(guest: Guest) {
    this.navCtrl.push('GuestDetailPage', {
      guest: guest
    });
  }

}
