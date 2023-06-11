import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortProfileComponent } from './port-profile.component';

describe('PortProfileComponent', () => {
  let component: PortProfileComponent;
  let fixture: ComponentFixture<PortProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
