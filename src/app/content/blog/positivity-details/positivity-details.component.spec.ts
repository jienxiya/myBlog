import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositivityDetailsComponent } from './positivity-details.component';

describe('PositivityDetailsComponent', () => {
  let component: PositivityDetailsComponent;
  let fixture: ComponentFixture<PositivityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositivityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositivityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
