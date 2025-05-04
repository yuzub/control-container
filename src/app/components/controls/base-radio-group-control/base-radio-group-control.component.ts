import {Component, Input} from '@angular/core';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {ReactiveFormsModule} from '@angular/forms';
import {BaseInputComponent} from '../base-input/base-input.component';
import {Option} from '../../../interfaces/option';

@Component({
  selector: 'app-base-radio-group-control',
  imports: [
    MatRadioGroup,
    MatRadioButton,
    ReactiveFormsModule
  ],
  templateUrl: './base-radio-group-control.component.html',
  styleUrl: './base-radio-group-control.component.scss'
})
export class BaseRadioGroupControlComponent extends BaseInputComponent {
  @Input({required:true}) options!: Option<unknown>[];
}
