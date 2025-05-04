import {Component} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Card1Component} from './card-1/card-1.component';
import {MatButton} from '@angular/material/button';
import {JsonPipe} from '@angular/common';
import {Card2Component} from './card-2/card-2.component';
import {Card3Component} from './card-3/card-3.component';
import {Card4Component} from './card-4/card-4.component';

@Component({
  selector: 'app-control-container',
  imports: [
    Card1Component,
    ReactiveFormsModule,
    MatButton,
    JsonPipe,
    Card2Component,
    Card3Component,
    Card4Component
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
