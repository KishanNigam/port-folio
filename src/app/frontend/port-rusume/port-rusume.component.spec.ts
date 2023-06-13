import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortRusumeComponent } from './port-rusume.component';

describe('PortRusumeComponent', () => {
  let component: PortRusumeComponent;
  let fixture: ComponentFixture<PortRusumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortRusumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortRusumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
