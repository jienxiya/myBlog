import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UStoryDetailsComponent } from './u-story-details.component';

describe('UStoryDetailsComponent', () => {
  let component: UStoryDetailsComponent;
  let fixture: ComponentFixture<UStoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UStoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UStoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
