import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BunkethallComponent } from './bunkethall.component';

describe('BunkethallComponent', () => {
  let component: BunkethallComponent;
  let fixture: ComponentFixture<BunkethallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BunkethallComponent]
    });
    fixture = TestBed.createComponent(BunkethallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
