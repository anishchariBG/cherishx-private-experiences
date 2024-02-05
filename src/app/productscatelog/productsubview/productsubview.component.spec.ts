import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsubviewComponent } from './productsubview.component';

describe('ProductsubviewComponent', () => {
  let component: ProductsubviewComponent;
  let fixture: ComponentFixture<ProductsubviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsubviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsubviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
