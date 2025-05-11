import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatAnchor, MatButton} from '@angular/material/button';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {FormSyncService} from './services/form-sync.service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatAnchor, MatButton, ReactiveFormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly formSync = inject(FormSyncService);
  private readonly router = inject(Router);
  form: FormGroup = new FormGroup({});
  isShowValue = false;

  get isSummaryRoute(): boolean {
    return this.router.url.includes('summary');
  }

  ngOnInit(): void {
    this.formSync.setForm(this.form);
  }

  submit(): void {
    console.log('submit() form.invalid =', this.form.invalid);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('form.value =', this.form.value);
  }

  reset(): void {
    console.log('reset()');
    this.form.reset();
  }
}
