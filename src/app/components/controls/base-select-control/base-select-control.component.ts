import {Component, Input} from '@angular/core';
import {BaseInputComponent} from '../base-input/base-input.component';
import {Option} from '../../../interfaces/option';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-base-select-control',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './base-select-control.component.html',
  styleUrl: './base-select-control.component.scss'
})
export class BaseSelectControlComponent extends BaseInputComponent {
  @Input({required:true}) options!: Option<unknown>[];
}
