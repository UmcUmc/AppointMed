import { Injectable } from '@angular/core';
import { Doctor } from './doctor'; 

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: Doctor[] = [
    {
      name: 'Acme Fresh Start Housing',
      surname: 'Kowalski',
      specialization: 'Anestezjolog',
      city: 'Warszawa',
      availableDate: '21-02-2024'
    },
    {
        name: 'Acme Fresh Start Housing',
        surname: 'Kowalski',
        specialization: 'Anestezjolog',
        city: 'Kraków',
        availableDate: '21-02-2024'
    },
    {
        name: 'Acme Fresh Start Housing',
        surname: 'Kowalski',
        specialization: 'Anestezjolog',
        city: 'Warszawa',
        availableDate: '21-02-2024'
    },
    {
        name: 'Acme Fresh Start Housing',
        surname: 'Kowalski',
        specialization: 'Anestezjolog',
        city: 'Lublin',
        availableDate: '21-02-2024'
    }
  ];

 
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/