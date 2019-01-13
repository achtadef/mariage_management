import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Guest } from '../../models/guest';
import { Guests } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentGuests: Guest[];

  constructor(public navCtrl: NavController, public guests: Guests, public modalCtrl: ModalController) {
    this.currentGuests = this.guests.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addGuest() {
    let addModal = this.modalCtrl.create('GuestCreatePage');
    addModal.onDidDismiss(guest => {
      if (guest) {
        this.guests.add(guest);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteGuest(guest) {
    this.guests.delete(guest);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openGuest(guest: Guest) {
    this.navCtrl.push('GuestDetailPage', {
      guest: guest
    });
  }
}
