import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {BaseInputControlComponent} from '../../controls/base-input-control/base-input-control.component';
import {BaseSelectControlComponent} from '../../controls/base-select-control/base-select-control.component';
import {BaseTextareaControlComponent} from '../../controls/base-textarea-control/base-textarea-control.component';
import {SELECT_OPTIONS} from '../../../constants/select-options';
import {BaseCheckboxControlComponent} from '../../controls/base-checkbox-control/base-checkbox-control.component';

@Component({
  selector: 'app-card-1',
  imports: [
    MatCard,
    MatCardContent,
    BaseInputControlComponent,
    BaseSelectControlComponent,
    BaseTextareaControlComponent,
    BaseCheckboxControlComponent,
    ReactiveFormsModule
  ],
  templateUrl: './card-1.component.html',
  styleUrl: './card-1.component.scss'
})
export class Card1Component {
  @Input({required: true}) form!: FormGroup;
  protected readonly selectOptions = SELECT_OPTIONS;

  getControl(controlName: string): FormControl {
    // return this.formGroup.controls[controlName] as FormControl;
    return this.form.controls[controlName] as FormControl;
  }
}
