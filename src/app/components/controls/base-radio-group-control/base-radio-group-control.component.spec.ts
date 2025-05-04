import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseRadioGroupControlComponent } from './base-radio-group-control.component';

describe('BaseRadioGroupControlComponent', () => {
  let component: BaseRadioGroupControlComponent;
  let fixture: ComponentFixture<BaseRadioGroupControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseRadioGroupControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseRadioGroupControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
