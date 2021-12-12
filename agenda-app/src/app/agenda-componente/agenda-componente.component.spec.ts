import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaComponenteComponent } from './agenda-componente.component';

describe('AgendaComponenteComponent', () => {
  let component: AgendaComponenteComponent;
  let fixture: ComponentFixture<AgendaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
