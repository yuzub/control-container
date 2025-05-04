import {Component, inject, OnInit} from '@angular/core';
import {BaseInputControlComponent} from "../../controls/base-input-control/base-input-control.component";
import {BaseSelectControlComponent} from "../../controls/base-select-control/base-select-control.component";
import {BaseTextareaControlComponent} from "../../controls/base-textarea-control/base-textarea-control.component";
import {MatCard, MatCardContent} from "@angular/material/card";
import {ControlContainer, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SELECT_OPTIONS} from '../../../constants/select-options';

@Component({
  selector: 'app-card-1',
    imports: [
        BaseInputControlComponent,
        BaseSelectControlComponent,
        BaseTextareaControlComponent,
        MatCard,
        MatCardContent
    ],
  templateUrl: './card-1.component.html',
  styleUrl: './card-1.component.scss'
})
export class Card1Component implements OnInit {
  private controlContainer = inject(ControlContainer);
  private fb = inject(FormBuilder);
  checkboxControl = this.fb.control(true);
  radioButtonControl = this.fb.control('yes');
  inputControl = this.fb.control('', Validators.required);
  selectControl = this.fb.control('', Validators.required);
  textareaControl = this.fb.control('', Validators.required);
  selectOptions = SELECT_OPTIONS;

  get parentFormGroup() {
    this.controlContainer.formDirective
    return this.controlContainer.control as FormGroup;
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl('card1', this.fb.group({
        checkbox: this.checkboxControl,
        radioButton: this.radioButtonControl,
        input: this.inputControl,
        select: this.selectControl,
        textarea: this.textareaControl,
      })
    );
  }
}
