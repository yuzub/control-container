import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInputControlComponent } from './base-input-control.component';

describe('BaseInputControlComponent', () => {
  let component: BaseInputControlComponent;
  let fixture: ComponentFixture<BaseInputControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseInputControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseInputControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
