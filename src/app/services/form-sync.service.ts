import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormSyncService {
  private _form: FormGroup | undefined;

  setForm(form: FormGroup): void {
    this._form = form;
  }

  get form(): FormGroup | undefined {
    return this._form;
  }
}
