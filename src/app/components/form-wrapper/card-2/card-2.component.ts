import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {BaseCheckboxControlComponent} from '../../controls/base-checkbox-control/base-checkbox-control.component';
import {BaseInputControlComponent} from '../../controls/base-input-control/base-input-control.component';
import {
  BaseRadioGroupControlComponent
} from '../../controls/base-radio-group-control/base-radio-group-control.component';
import {RADIO_BUTTON_OPTIONS} from '../../../constants/radio-button-options';

@Component({
  selector: 'app-card-2',
  imports: [
    MatCard,
    MatCardContent,
    BaseCheckboxControlComponent,
    BaseInputControlComponent,
    BaseRadioGroupControlComponent,
    ReactiveFormsModule
  ],
  templateUrl: './card-2.component.html',
  styleUrl: './card-2.component.scss'
})
export class Card2Component {
  @Input({required: true}) form!: FormGroup;
  protected readonly radioButtonOptions = RADIO_BUTTON_OPTIONS;

  getControl(controlName: string): FormControl {
    return this.form.controls[controlName] as FormControl;
  }
}
