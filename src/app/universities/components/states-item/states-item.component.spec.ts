import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesItemComponent } from './states-item.component';

describe('StatesItemComponent', () => {
  let component: StatesItemComponent;
  let fixture: ComponentFixture<StatesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatesItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
