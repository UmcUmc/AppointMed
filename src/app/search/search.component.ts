import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import {AsyncPipe} from '@angular/common';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable, OperatorFunction} from 'rxjs';
import {startWith, map, debounceTime} from 'rxjs/operators';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DescriptionComponent } from '../description/description.component';
import { DoctorsComponent } from '../doctors/doctors.component';
import { Doctor } from '../doctor';
import { CommonModule } from '@angular/common';


@Component({
  selector: '[app-search]',
  standalone: true,
  imports: [
    MatGridListModule,
    MatAutocompleteModule,
    MatInputModule,
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    DescriptionComponent,
    DoctorsComponent,
    CommonModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent implements OnInit{

  ngOnInit(): void {
    //this.doctors = this.getDoctors();
  }

  doctors: any[] = [];
  myControl = new FormControl('');
  
  NameOptions: {name: string}[] = [
    {name: 'Alergolog'},
    {name: 'Anestezjolog'},
    {name: 'Angiolog'},
    {name: 'Audiolog'},
    {name: 'Chirurg'},
    {name: 'Chirurg plastyczny'},
    {name: 'Dermatolog'},
    {name: 'Diabetolog'},
    {name: 'Endokrynolog'},
    {name: 'Fizjoterapeuta'},
    {name: 'Foniatra'},
    {name: 'Gastroenterolog'},
    {name: 'Gastrolog'},
    {name: 'Genetyk'},
    {name: 'Geriatra'},
    {name: 'Ginekolog'},
    {name: 'Hematolog'},
    {name: 'Immunolog'},
    {name: 'Internista'},
    {name: 'Kardiolog'},
    {name: 'Laryngolog'},
    {name: 'Lekarz chorób zakaźnych'},
    {name: 'Lekarz medycyny nuklearnej'},
    {name: 'Lekarz sportowy'},
    {name: 'Logopeda'},
    {name: 'Nefrolog'},
    {name: 'Neonatolog'},
    {name: 'Neurochirurg'},
    {name: 'Neurolog'},
    {name: 'Okulista'},
    {name: 'Onkolog'},
    {name: 'Opieka paliatywna'},
    {name: 'Ortodonta'},
    {name: 'Ortopeda'},
    {name: 'Pediatra'},
    {name: 'Proktolog'},
    {name: 'Psychiatra'},
    {name: 'Psycholog'},
    {name: 'Pulmunolog'},
    {name: 'Radioterapeuta'},
    {name: 'Reumatolog'},
    {name: 'Seksuolog'},
    {name: 'Stomatolog'},
    {name: 'Toksykolog'},
    {name: 'Tomograf'},
    {name: 'Transplantolog'},
    {name: 'Urolog'}
  ];

  CityOptions: {city: string}[] = [
    {city: 'Warszawa'}, 
    {city: 'Kraków'}, 
    {city: 'Gdańsk'},
    {city: 'Poznań'},
    {city: 'Wrocław'},
    {city: 'Lublin'}
  ];

  trackByFnName(index: number, item: {name: string}): string {
    return item.name;
  }
  trackByFnCity(index: number, item: {city: string}): string {
    return item.city;
  }
}


