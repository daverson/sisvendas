import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoConsultaComponent } from './produto-consulta.component';

describe('ProdutoConsultaComponent', () => {
  let component: ProdutoConsultaComponent;
  let fixture: ComponentFixture<ProdutoConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
