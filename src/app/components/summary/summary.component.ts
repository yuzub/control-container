import {Component, inject} from '@angular/core';
import {ControlContainer, FormGroup} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-summary',
  imports: [
    JsonPipe
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  private readonly controlContainer = inject(ControlContainer);

  get parentFormGroup(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }
}
