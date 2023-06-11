import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortHeaderComponent } from './port-header.component';

describe('PortHeaderComponent', () => {
  let component: PortHeaderComponent;
  let fixture: ComponentFixture<PortHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
