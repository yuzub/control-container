import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Card1Component} from './card-1/card-1.component';
import {Card2Component} from './card-2/card-2.component';
import {FormSyncService} from '../../services/form-sync.service';

@Component({
  selector: 'app-form-wrapper',
  imports: [
    ReactiveFormsModule,
    Card1Component,
    Card1Component,
    Card2Component,
  ],
  templateUrl: './form-wrapper.component.html',
  styleUrl: './form-wrapper.component.scss'
})
export class FormWrapperComponent implements OnInit, OnDestroy {
  private readonly formSync = inject(FormSyncService);
  private readonly fb = inject(FormBuilder);
  form!: FormGroup;

  get card1FormGroup() {
    return this.form?.controls?.['step2Card1'] as FormGroup;
  }

  get card2FormGroup() {
    return this.form?.controls?.['step2Card2'] as FormGroup;
  }

  ngOnInit(): void {
    if (this.formSync.form) {
      this.form = this.formSync.form;

      this.form.addControl('step2Card1', this.fb.group({
        inputControl: ['', Validators.required],
        selectControl: ['', Validators.required],
        textareaControl1: ['', Validators.required],
        checkboxControl: [false],
        textareaControl2: [''],
      }));
      this.form.addControl('step2Card2', this.fb.group({
        checkboxControl1: [true],
        radioButtonControl1: ['NO'],
        checkboxControl2: [false],
        radioButtonControl2: ['YES'],
        inputControl: ['', Validators.required],
      }));
    }
  }

  ngOnDestroy(): void {
    if (this.form) {
      // this.form.removeControl('step2Card1');
      // this.form.removeControl('step2Card2');
    }
  }
}
