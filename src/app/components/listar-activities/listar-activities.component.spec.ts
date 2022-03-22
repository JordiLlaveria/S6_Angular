import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarActivitiesComponent } from './listar-activities.component';

describe('ListarActivitiesComponent', () => {
  let component: ListarActivitiesComponent;
  let fixture: ComponentFixture<ListarActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
