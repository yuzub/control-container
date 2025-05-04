import {Component} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Card1Component} from './card-1/card-1.component';
import {MatButton} from '@angular/material/button';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-control-container',
  imports: [
    MatCard,
    MatCardContent,
    Card1Component,
    ReactiveFormsModule,
    MatButton,
    JsonPipe
  ],
  templateUrl: './control-container.component.html',
  styleUrl: './control-container.component.scss'
})
export class ControlContainerComponent {
  form: FormGroup = new FormGroup({});
  isShowValue = false;

  submit(): void {
    console.log('submit() form.invalid =', this.form.invalid);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('form.value =', this.form.value);
  }
}
