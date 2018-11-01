import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorymanageComponent } from './inventorymanage.component';

describe('InventorymanageComponent', () => {
  let component: InventorymanageComponent;
  let fixture: ComponentFixture<InventorymanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorymanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorymanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
