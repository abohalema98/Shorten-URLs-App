import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlcuttingComponent } from './urlcutting.component';

describe('UrlcuttingComponent', () => {
  let component: UrlcuttingComponent;
  let fixture: ComponentFixture<UrlcuttingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlcuttingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlcuttingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
