import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormSyncService} from '../../services/form-sync.service';
import {MatSelectModule} from '@angular/material/select';
import {SELECT_OPTIONS} from '../../constants/select-options';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {RADIO_BUTTON_OPTIONS} from '../../constants/radio-button-options';

@Component({
  selector: 'app-all-in-one',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  templateUrl: './all-in-one.component.html',
  styleUrl: './all-in-one.component.scss',
  // viewProviders: [ { provide: ControlContainer, useExisting: FormGroupDirective } ]
})
export class AllInOneComponent implements OnInit, OnDestroy {
  private readonly formSync = inject(FormSyncService);
  private readonly fb = inject(FormBuilder);
  form!: FormGroup;
  protected readonly selectOptions = SELECT_OPTIONS;
  protected readonly radioButtonOptions = RADIO_BUTTON_OPTIONS;

  ngOnInit() {
    if (this.formSync.form) {
      this.form = this.formSync.form;

      this.form.addControl('step1Card1', this.fb.group({
        inputControl: ['', Validators.required],
        selectControl: ['', Validators.required],
        textareaControl1: ['', Validators.required],
        checkboxControl: [false],
        textareaControl2: [''],
      }));
      this.form.addControl('step1Card2', this.fb.group({
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
      // this.form.removeControl('step1Card1');
      // this.form.removeControl('step1Card2');
    }
  }
}
