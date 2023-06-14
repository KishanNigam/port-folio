import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortWorksComponent } from './port-works.component';

describe('PortWorksComponent', () => {
  let component: PortWorksComponent;
  let fixture: ComponentFixture<PortWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
