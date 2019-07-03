import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynapseComponent } from './synapse.component';

describe('SynapseComponent', () => {
  let component: SynapseComponent;
  let fixture: ComponentFixture<SynapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
