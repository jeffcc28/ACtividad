import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudHeroesComponent } from './crud-heroes.component';

describe('CrudHeroesComponent', () => {
  let component: CrudHeroesComponent;
  let fixture: ComponentFixture<CrudHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
