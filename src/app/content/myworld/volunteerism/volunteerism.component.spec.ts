import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerismComponent } from './volunteerism.component';

describe('VolunteerismComponent', () => {
  let component: VolunteerismComponent;
  let fixture: ComponentFixture<VolunteerismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
