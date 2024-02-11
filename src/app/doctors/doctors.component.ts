import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Doctor{
  name: string;
  specialization: string;
  city: string;
  availableDates: AvailableDate[];
}
interface AvailableDate{
  date: string;
  time: string[];
}

@Component({
  selector: '[app-doctors]',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent implements OnInit{
  doctors: Doctor[] = [
    {
      name: 'Jan Kowalski',
      specialization: 'Alergolog',
      city: 'Warszawa',
      availableDates: [
        {
          date: '22-02-2024',
          time: ['12:00','13:00','13:30','14:30']
        },
        {
          date: '23-02-2024',
          time: ['12:00','13:00']
        },
        {
          date: '24-02-2024',
          time: ['12:00','13:00']
        }
      ]
    },
    {
      name: 'Anna Nowak',
      specialization: 'Anestezjolog',
      city: 'Kraków',
      availableDates: [
        {
          date: '22-02-2024',
          time: ['12:00','13:00','14:30']
        },
        {
          date: '23-02-2024',
          time: ['12:00','13:00']
        },
        {
          date: '24-02-2024',
          time: ['12:00','13:00','14:30']
        }
      ]
    },
    {
      name: 'Paweł Makowski',
      specialization: 'Angiolog',
      city: 'Gdańsk',
      availableDates: [
        {
          date: '22-02-2024',
          time: ['12:00','13:00','13:30','14:30']
        },
        {
          date: '23-02-2024',
          time: ['12:00','13:00','14:30']
        },
        {
          date: '24-02-2024',
          time: ['12:00','13:00']
        }
      ]
    },
    {
      name: 'Maria Zielińska',
      specialization: 'Audiolog',
      city: 'Poznań',
      availableDates: [
        {
          date: '22-02-2024',
          time: ['12:00','13:00','13:30','14:30']
        },
        {
          date: '23-02-2024',
          time: ['12:00','13:00']
        },
        {
          date: '24-02-2024',
          time: ['12:00','13:00','14:30','15:30']
        }
      ]
    },
    {
      name: 'Bartosz Malinowski',
      specialization: 'Chirurg',
      city: 'Wrocław',
      availableDates: [
        {
          date: '22-02-2024',
          time: ['12:00','13:00','13:30','14:30']
        },
        {
          date: '23-02-2024',
          time: ['12:00','13:00']
        },
        {
          date: '24-02-2024',
          time: ['12:00','13:00']
        }
      ]
    },
    {
      name: 'Agnieszka Nowak',
      specialization: 'Chirurg plastyczny',
      city: 'Lublin',
      availableDates: [
        {
          date: '22-02-2024',
          time: ['12:00','13:00','13:30','14:30']
        },
        {
          date: '23-02-2024',
          time: ['12:00','13:00']
        },
        {
          date: '24-02-2024',
          time: ['12:00','13:00']
        }
      ]
    }
  ];

  constructor() { }
  ngOnInit(): void {}


}
