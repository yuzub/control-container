import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTextareaControlComponent } from './base-textarea-control.component';

describe('BaseTextareaControlComponent', () => {
  let component: BaseTextareaControlComponent;
  let fixture: ComponentFixture<BaseTextareaControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseTextareaControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseTextareaControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
