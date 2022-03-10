import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artykul1Component } from './artykul1.component';

describe('Artykul1Component', () => {
  let component: Artykul1Component;
  let fixture: ComponentFixture<Artykul1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Artykul1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Artykul1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
