import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceUpdateComponent } from './maintenance-update.component';

describe('MaintenanceUpdateComponent', () => {
  let component: MaintenanceUpdateComponent;
  let fixture: ComponentFixture<MaintenanceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
