import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSelectControlComponent } from './base-select-control.component';

describe('BaseSelectControlComponent', () => {
  let component: BaseSelectControlComponent;
  let fixture: ComponentFixture<BaseSelectControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseSelectControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseSelectControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
