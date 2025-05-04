import { Component } from '@angular/core';
import {BaseInputComponent} from '../base-input/base-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-base-textarea-control',
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  templateUrl: './base-textarea-control.component.html',
  styleUrl: './base-textarea-control.component.scss'
})
export class BaseTextareaControlComponent extends BaseInputComponent {

}
