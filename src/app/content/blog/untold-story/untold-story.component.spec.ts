import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UntoldStoryComponent } from './untold-story.component';

describe('UntoldStoryComponent', () => {
  let component: UntoldStoryComponent;
  let fixture: ComponentFixture<UntoldStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UntoldStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UntoldStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
