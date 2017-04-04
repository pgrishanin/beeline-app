import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsPreviewComponent } from './goods-preview.component';

describe('GoodsPreviewComponent', () => {
  let component: GoodsPreviewComponent;
  let fixture: ComponentFixture<GoodsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
