import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositivityComponent } from './positivity.component';

describe('PositivityComponent', () => {
  let component: PositivityComponent;
  let fixture: ComponentFixture<PositivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
