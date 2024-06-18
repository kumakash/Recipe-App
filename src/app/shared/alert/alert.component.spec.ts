import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlretComponent } from './alert.component';

describe('AlretComponent', () => {
  let component: AlretComponent;
  let fixture: ComponentFixture<AlretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlretComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
