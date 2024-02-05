import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullviewproductComponent } from './fullviewproduct.component';

describe('FullviewproductComponent', () => {
  let component: FullviewproductComponent;
  let fixture: ComponentFixture<FullviewproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullviewproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullviewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
