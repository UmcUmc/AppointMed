import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: '[app-signin]',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  isRegisterVisible = false;

  signInForm(){
    this.isRegisterVisible = !this.isRegisterVisible;
  }
}
