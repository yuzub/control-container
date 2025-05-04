import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCheckboxControlComponent } from './base-checkbox-control.component';

describe('BaseCheckboxControlComponent', () => {
  let component: BaseCheckboxControlComponent;
  let fixture: ComponentFixture<BaseCheckboxControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseCheckboxControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseCheckboxControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
