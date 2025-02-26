import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemsFormComponent } from './add-items-form.component';

describe('AddItemsFormComponent', () => {
  let component: AddItemsFormComponent;
  let fixture: ComponentFixture<AddItemsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItemsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddItemsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
