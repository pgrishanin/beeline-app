import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveListComponent } from './responsive-list.component';

describe('ResponsiveListComponent', () => {
  let component: ResponsiveListComponent;
  let fixture: ComponentFixture<ResponsiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
