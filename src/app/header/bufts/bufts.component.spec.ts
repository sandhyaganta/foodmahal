import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuftsComponent } from './bufts.component';

describe('BuftsComponent', () => {
  let component: BuftsComponent;
  let fixture: ComponentFixture<BuftsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuftsComponent]
    });
    fixture = TestBed.createComponent(BuftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
