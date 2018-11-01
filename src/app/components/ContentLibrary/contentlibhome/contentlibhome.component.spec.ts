import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentlibhomeComponent } from './contentlibhome.component';

describe('ContentlibhomeComponent', () => {
  let component: ContentlibhomeComponent;
  let fixture: ComponentFixture<ContentlibhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentlibhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentlibhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
