import { Injectable } from '@angular/core';

import { Guest } from '../../models/guest';

@Injectable()
export class Guest {
  guests: Guest[] = [];

  defaultGuest: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let guests = [
      {
        "name": "Burt Bear",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Burt is a Bear."
      },
      {
        "name": "Charlie Cheetah",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Donald Duck",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Eva Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy."
      }
    ];

    for (let guest of guests) {
      this.guests.push(new Guest(guest));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.guests;
    }

    return this.guests.filter((guest) => {
      for (let key in params) {
        let field = guest[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return guest;
        } else if (field == params[key]) {
          return guest;
        }
      }
      return null;
    });
  }

  add(guest: Guest) {
    this.guests.push(guest);
  }

  delete(guest: Guest) {
    this.guests.splice(this.guests.indexOf(guest), 1);
  }
}
