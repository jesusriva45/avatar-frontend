import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPokemonsDetailComponent } from './modal-pokemons-detail.component';

describe('ModalPokemonsDetailComponent', () => {
  let component: ModalPokemonsDetailComponent;
  let fixture: ComponentFixture<ModalPokemonsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPokemonsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPokemonsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
