import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGitesComponent } from './gestion-gites.component';

describe('GestionGitesComponent', () => {
  let component: GestionGitesComponent;
  let fixture: ComponentFixture<GestionGitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionGitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionGitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
