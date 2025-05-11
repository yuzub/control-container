import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {BaseInputControlComponent} from "../../controls/base-input-control/base-input-control.component";
import {BaseSelectControlComponent} from "../../controls/base-select-control/base-select-control.component";
import {BaseTextareaControlComponent} from "../../controls/base-textarea-control/base-textarea-control.component";
import {MatCard, MatCardContent} from "@angular/material/card";
import {ControlContainer, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SELECT_OPTIONS} from '../../../constants/select-options';
import {BaseCheckboxControlComponent} from '../../controls/base-checkbox-control/base-checkbox-control.component';

@Component({
  selector: 'app-card-1',
  imports: [
    BaseInputControlComponent,
    BaseSelectControlComponent,
    BaseTextareaControlComponent,
    MatCard,
    MatCardContent,
    ReactiveFormsModule,
    BaseCheckboxControlComponent
  ],
  templateUrl: './card-1.component.html',
  styleUrl: './card-1.component.scss'
})
export class Card1Component implements OnInit, OnDestroy {
  private readonly controlContainer = inject(ControlContainer);
  private readonly fb = inject(FormBuilder);

  inputControl = this.fb.control('', Validators.required);
  selectControl = this.fb.control('', Validators.required);
  textareaControl1 = this.fb.control('', Validators.required);
  checkboxControl = this.fb.control(true);
  textareaControl2 = this.fb.control('', Validators.required);

  protected readonly selectOptions = SELECT_OPTIONS;

  get parentFormGroup(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }

  ngOnInit(): void {
    this.parentFormGroup.removeControl('step3Card1');

    this.parentFormGroup.addControl('step3Card1', this.fb.group({
        input: this.inputControl,
        select: this.selectControl,
        textarea1: this.textareaControl1,
        checkbox1: this.checkboxControl,
        textarea2: this.textareaControl2,
      })
    );
  }

  ngOnDestroy(): void {
    if (this.parentFormGroup) {
      // this.parentFormGroup.removeControl('step3Card1');
    }
  }
}
