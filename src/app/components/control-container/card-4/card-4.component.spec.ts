import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card4Component } from './card-4.component';

describe('Card4Component', () => {
  let component: Card4Component;
  let fixture: ComponentFixture<Card4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
