import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { SigninComponent } from './signin/signin.component';

@Component({
  selector: '[app-header]',
  standalone: true,
  imports: [
    MatGridListModule,
    MatButtonModule,
    SigninComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor() {}

}
