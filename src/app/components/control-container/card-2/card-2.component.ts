import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {BaseCheckboxControlComponent} from '../../controls/base-checkbox-control/base-checkbox-control.component';
import {ControlContainer, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
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
export class Card2Component implements OnInit, OnDestroy {
  private readonly controlContainer = inject(ControlContainer);
  private readonly fb = inject(FormBuilder);

  checkboxControl1 = this.fb.control(true);
  checkboxControl2 = this.fb.control(false);
  radioButtonControl1 = this.fb.control('NO');
  radioButtonControl2 = this.fb.control('YES');
  inputControl = this.fb.control('', Validators.required);

  radioButtonOptions = RADIO_BUTTON_OPTIONS;

  get parentFormGroup(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl('step3Card2', this.fb.group({
        checkbox1: this.checkboxControl1,
        radioButton1: this.radioButtonControl1,
        checkbox2: this.checkboxControl2,
        radioButton2: this.radioButtonControl2,
        input: this.inputControl,
      })
    );
  }

  ngOnDestroy(): void {
    if (this.parentFormGroup) {
      // this.parentFormGroup.removeControl('step3Card2');
    }
  }
}
