import {Component} from '@angular/core';
import {Card1Component} from './card-1/card-1.component';
import {Card2Component} from './card-2/card-2.component';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-control-container',
  imports: [
    Card1Component,
    Card2Component,
    ReactiveFormsModule,
  ],
  templateUrl: './control-container.component.html',
  styleUrl: './control-container.component.scss'
})
export class ControlContainerComponent {
}
