import { Injectable } from '@angular/core';

import { Guest } from '../../models/guest';
import { Api } from '../api/api';

@Injectable()
export class Guests {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/guests', params);
  }

  add(guest: Guest) {
  }

  delete(guest: Guest) {
  }

}
