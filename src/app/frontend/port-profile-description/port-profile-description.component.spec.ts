import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortProfileDescriptionComponent } from './port-profile-description.component';

describe('PortProfileDescriptionComponent', () => {
  let component: PortProfileDescriptionComponent;
  let fixture: ComponentFixture<PortProfileDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortProfileDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortProfileDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
