import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoEtudesComponent } from './perso-etudes.component';

describe('PersoEtudesComponent', () => {
  let component: PersoEtudesComponent;
  let fixture: ComponentFixture<PersoEtudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoEtudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoEtudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
