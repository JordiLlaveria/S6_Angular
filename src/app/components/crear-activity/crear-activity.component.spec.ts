import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActivityComponent } from './crear-activity.component';

describe('CrearActivityComponent', () => {
  let component: CrearActivityComponent;
  let fixture: ComponentFixture<CrearActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
