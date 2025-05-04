import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparateControlsComponent } from './separate-controls.component';

describe('SeparateControlsComponent', () => {
  let component: SeparateControlsComponent;
  let fixture: ComponentFixture<SeparateControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeparateControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeparateControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
