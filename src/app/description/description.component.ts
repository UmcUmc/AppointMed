import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: '[app-description]',
  standalone: true,
  imports: [
    MatGridListModule
  ],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {

}
