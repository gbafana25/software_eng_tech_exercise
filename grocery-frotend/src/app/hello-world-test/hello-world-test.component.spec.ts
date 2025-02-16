import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldTestComponent } from './hello-world-test.component';

describe('HelloWorldTestComponent', () => {
  let component: HelloWorldTestComponent;
  let fixture: ComponentFixture<HelloWorldTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloWorldTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloWorldTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
