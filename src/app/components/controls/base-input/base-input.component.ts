import {Component, DestroyRef, inject, Input, OnInit, signal} from '@angular/core';
import {ControlEvent, FormControl, TouchedChangeEvent} from '@angular/forms';
import {filter} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-base-input',
  imports: [],
  template: '',
})
export abstract class BaseInputComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  @Input({required:true}) control!: FormControl;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() errorRequired!: string;
  @Input() hint!: string;
  errorMessage = signal('');

  ngOnInit(): void {
    this.control.events
      .pipe(
        filter((event: ControlEvent) => event instanceof TouchedChangeEvent),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((): void => this.updateErrorMessage());
    }

  updateErrorMessage(): void {
    console.log('updateErrorMessage()');
    if (this.control.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.control.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
}
