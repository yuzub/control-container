import { Component } from '@angular/core';
import {BaseInputComponent} from '../base-input/base-input.component';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-base-input-control',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './base-input-control.component.html',
  styleUrl: './base-input-control.component.scss'
})
export class BaseInputControlComponent extends BaseInputComponent {

}
