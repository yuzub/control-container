import { Component } from '@angular/core';
import {BaseInputComponent} from '../base-input/base-input.component';
import {MatCheckbox} from '@angular/material/checkbox';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-base-checkbox-control',
  imports: [
    MatCheckbox,
    ReactiveFormsModule
  ],
  templateUrl: './base-checkbox-control.component.html',
  styleUrl: './base-checkbox-control.component.scss'
})
export class BaseCheckboxControlComponent extends BaseInputComponent {

}
