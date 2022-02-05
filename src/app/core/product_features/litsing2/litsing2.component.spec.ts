import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Litsing2Component } from './litsing2.component';

describe('Litsing2Component', () => {
  let component: Litsing2Component;
  let fixture: ComponentFixture<Litsing2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Litsing2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Litsing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
